'use client'
import { useRouter } from 'next/navigation';
import Navbar from "./Components/Navbar";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const handelLoginClick = () => {
    router.push("/Login");
  }

  return (
    <div className="bg-[url('/images/jobrecbg1.jpg')] bg-cover">
      <Navbar/>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-8xl font-bold text-[#202526] text-shadow-md">ResuMatch</h1>
        <p className="text-2xl italic text-[#E0E1DD]">instant job matching with one click </p>
        <button className="rounded-3xl text-3xl text-[#E0E1DD] border-5 border-[#E0E1DD] border-double m-2 px-5 py-2 hover:bg-[#34485f] hover:text-[#9c9d9a]" onClick={handelLoginClick}>get started</button>
        </div>
    </div>
  );
}
