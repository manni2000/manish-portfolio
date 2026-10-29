"use client";

import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import { Physics, RapierRigidBody, RigidBody, useRopeJoint } from "@react-three/rapier";
import Image from "next/image";
import { useRef, useState } from "react";
import { portfolio } from "@/data/portfolio";

function BadgePhysics() {
  const anchor = useRef<RapierRigidBody>(null!);
  const card = useRef<RapierRigidBody>(null!);
  const [active, setActive] = useState(false);
  useRopeJoint(anchor, card, [[0, 0, 0], [0, 1.45, 0], 2.3]);
  useFrame(() => {
    if (!active && card.current) {
      const rotation = card.current.rotation();
      card.current.applyTorqueImpulse({ x: -rotation.x * .0005, y: -rotation.y * .0005, z: -rotation.z * .0005 }, true);
    }
  });
  const move = (event: ThreeEvent<PointerEvent>) => {
    if (!active || !card.current) return;
    const native = event.nativeEvent;
    card.current.applyImpulse({ x: native.movementX * .006, y: -native.movementY * .006, z: 0 }, true);
    card.current.applyTorqueImpulse({ x: -native.movementY * .001, y: native.movementX * .001, z: native.movementX * .0004 }, true);
  };
  return <>
    <RigidBody ref={anchor} type="fixed" position={[0, 3.3, 0]} />
    <mesh position={[0, 2.3, 0]}><cylinderGeometry args={[.022, .022, 2.1, 10]} /><meshStandardMaterial color="#34404b" metalness={.7} roughness={.3}/></mesh>
    <RigidBody ref={card} position={[0, .25, 0]} colliders="cuboid" angularDamping={2.2} linearDamping={1.4} restitution={.25}>
      <mesh onPointerDown={e => { e.stopPropagation(); setActive(true); (e.target as Element).setPointerCapture?.(e.pointerId); }} onPointerUp={() => setActive(false)} onPointerLeave={() => setActive(false)} onPointerMove={move} castShadow>
        <boxGeometry args={[3.7, 2.35, .13]} />
        <meshPhysicalMaterial color="#0d1116" metalness={.72} roughness={.24} clearcoat={1} clearcoatRoughness={.18} />
        <Html transform distanceFactor={3.65} position={[0, 0, .071]} style={{ pointerEvents: "none", width: 350 }}>
          <div className="identity-card" style={{ width: 350 }}>
            <div className="card-top"><span className="mono">Engineering access</span><span className="status-dot" /></div>
            <div className="card-name"><strong>{portfolio.personal.name}</strong><div className="card-role"><span>Full Stack Developer</span><span>AI Application Engineer</span></div></div>
            <div className="card-bottom"><span className="card-details"><span>{portfolio.personal.institution}</span><span>{portfolio.personal.shortLocation}</span><b>Available for opportunities</b></span><Image className="card-qr" src="/qrcode.png" width={84} height={84} alt="" priority unoptimized /></div>
          </div>
        </Html>
      </mesh>
    </RigidBody>
  </>;
}

export default function IdentityBadgeCanvas() {
  return <div className="badge-canvas" aria-hidden="true">
    <Canvas camera={{ position: [0, 0, 7], fov: 42 }} dpr={[1, 1.5]} shadows="basic" gl={{ antialias: true, powerPreference: "high-performance" }}>
      <ambientLight intensity={.55} /><directionalLight position={[4, 5, 6]} intensity={2.5} color="#d7f7ff" castShadow/><pointLight position={[-4, -2, 3]} intensity={20} color="#396dff" />
      <Physics gravity={[0, -4.5, 0]} timeStep="vary"><BadgePhysics /></Physics>
      <Environment preset="city" />
    </Canvas>
  </div>;
}
