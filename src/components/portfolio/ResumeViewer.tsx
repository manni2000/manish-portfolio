"use client";

import { ChevronLeft, ChevronRight, Download, ExternalLink, Maximize2, Minimize2, Minus, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ResumeViewer({ path, downloadName }: { path: string; downloadName: string }) {
  const [available,setAvailable]=useState<boolean|null>(null); const [zoom,setZoom]=useState(100); const [page,setPage]=useState(1); const [isFullscreen,setIsFullscreen]=useState(false); const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{fetch(path,{method:"HEAD"}).then(r=>setAvailable(r.ok && (r.headers.get("content-type")?.includes("pdf") ?? false))).catch(()=>setAvailable(false));},[path]);
  useEffect(()=>{const syncFullscreen=()=>setIsFullscreen(document.fullscreenElement===ref.current);document.addEventListener("fullscreenchange",syncFullscreen);return()=>document.removeEventListener("fullscreenchange",syncFullscreen);},[]);
  const toggleFullscreen=async()=>{if(document.fullscreenElement)await document.exitFullscreen();else await ref.current?.requestFullscreen();};
  if(available===null)return <div className="resume-viewer"><div><div className="mono">Loading document viewer…</div></div></div>;
  if(!available)return <div className="resume-viewer"><div><h2>Resume file not added yet</h2><p className="muted">Place the real PDF at <code>{`public${path}`}</code>. No placeholder resume is generated.</p></div></div>;
  return <div className="resume-document" ref={ref}><div className="resume-toolbar"><div className="resume-toolbar-group"><button className="button" onClick={()=>setPage(p=>Math.max(1,p-1))} aria-label="Previous page"><ChevronLeft size={15}/></button><span className="pill">Page {page}</span><button className="button" onClick={()=>setPage(p=>p+1)} aria-label="Next page"><ChevronRight size={15}/></button></div><div className="resume-toolbar-group"><button className="button" onClick={()=>setZoom(z=>Math.max(50,z-10))} aria-label="Zoom out"><Minus size={15}/></button><span className="pill">{zoom}%</span><button className="button" onClick={()=>setZoom(z=>Math.min(200,z+10))} aria-label="Zoom in"><Plus size={15}/></button></div><div className="resume-toolbar-group resume-toolbar-actions"><button className="button" onClick={toggleFullscreen} aria-pressed={isFullscreen}>{isFullscreen?<Minimize2 size={15}/>:<Maximize2 size={15}/>} {isFullscreen?"Exit full screen":"Full screen"}</button><a className="button" href={path} download={downloadName}><Download size={15}/> Download</a><a className="button" href={path} target="_blank" rel="noreferrer"><ExternalLink size={15}/> Open</a></div></div><iframe title="Manish Kumar resume" className="resume-frame" src={`${path}#page=${page}&zoom=${zoom}`}/></div>;
}
