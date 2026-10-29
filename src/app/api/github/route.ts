import { NextResponse } from "next/server";
import { z } from "zod";
import { serverConfig } from "@/lib/server-config";

const userSchema = z.object({ login:z.string(), name:z.string().nullable(), bio:z.string().nullable(), public_repos:z.number(), html_url:z.string().url() });
const repoSchema = z.array(z.object({ name:z.string(), description:z.string().nullable(), language:z.string().nullable(), stargazers_count:z.number(), html_url:z.string().url(), updated_at:z.string() }));
export const revalidate=3600;

export async function GET(){
  const username=serverConfig.githubUsername;
  if(!username)return NextResponse.json({configured:false,message:"Add GITHUB_USERNAME to enable verified public GitHub activity."});
  try{
    const headers={Accept:"application/vnd.github+json"};
    const [profileResponse,reposResponse]=await Promise.all([
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}`,{headers,next:{revalidate:3600}}),
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6&type=owner`,{headers,next:{revalidate:3600}}),
    ]);
    if(!profileResponse.ok||!reposResponse.ok){const limited=profileResponse.status===403||reposResponse.status===403;return NextResponse.json({configured:false,message:limited?"GitHub’s public rate limit was reached. Activity will return after the cache refreshes.":"Public GitHub activity is temporarily unavailable."},{status:limited?429:502});}
    const profile=userSchema.parse(await profileResponse.json());const repos=repoSchema.parse(await reposResponse.json());
    return NextResponse.json({configured:true,profile:{login:profile.login,name:profile.name,bio:profile.bio,publicRepos:profile.public_repos,htmlUrl:profile.html_url},repos:repos.map(repo=>({name:repo.name,description:repo.description,language:repo.language,stars:repo.stargazers_count,url:repo.html_url,updatedAt:repo.updated_at}))});
  }catch{return NextResponse.json({configured:false,message:"Public GitHub data could not be validated right now."},{status:502});}
}
