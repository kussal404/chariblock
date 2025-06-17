// components/Header.js
'use client';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow">
      {/* Left: Logo */}
     <Image src={"/logo.png"} alt="Logo" width={150} height={100} className="cursor-pointer" />

      {/* Right: Navigation */}
      <nav className="flex items-center space-x-6 text-sm">
         
        <div className="cursor-pointer">Resources</div>
        <div className="cursor-pointer" onClick={() => router.push("/about")}>About</div>
        <button className="bg-yellow-300 px-4 py-2 rounded cursor-pointer " 
         onClick={() => {
         const el = document.getElementById("donations");
        if (el) el.scrollIntoView({ behavior: "smooth" });
         }}>Donations</button>
        <Link href={"./campaign"}><button className="bg-[#D99CA2] text-white px-4 py-2 rounded cursor-pointer" >  Start a Campaign</button></Link>
        
      </nav>
    </header>
  );
}
