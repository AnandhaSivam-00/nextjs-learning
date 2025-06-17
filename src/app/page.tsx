"use client";
import Image from "next/image";
import heroImage from "@/public/hero-image 1.png";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <section className="grid md:grid-cols-2 gap-x-5 gap-y-10 px-10">
        <div className="flex flex-col justify-center items-start gap-y-10">
          <h5 className="uppercase text-base">Your go-to platform for 3D printing files</h5>
          <h1 className="text-5xl font-bold">Discover what’s possible with 3D printing</h1>
          <p className="text-2xl">Join our community of creators and explore a vast library of user-submitted models.</p>
          <button 
            onClick={() => window.location.href = "/models"}
            className="border-2 border-black uppercase p-3 hover:bg-black hover:text-white hover:cursor-pointer"
          >
            Browse models
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Image src={heroImage} alt="Hero image" className="w-[627px] h-[627px] object-cover" />
        </div>
      </section>
    </main>
  );
}
