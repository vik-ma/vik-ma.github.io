import Image from "next/image";
import LogoBanner from "./LogoBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-2 md:px-5 text-stone-100">
      <div className="">
        <h1 className="text-6xl font-extrabold">
          <span className="header-shadow-anim">Header</span>
        </h1>
      </div>
      <div className="text-center">
        <h2 className="pb-4 text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          Languages and Tools
        </h2>
        <div className="font-mono text-sm">
          <LogoBanner />
        </div>
      </div>
    </main>
  );
}
