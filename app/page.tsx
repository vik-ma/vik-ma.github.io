import Image from "next/image";
import LogoBanner from "./components/LogoBanner";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-2 md:px-5">
      <header className="py-7">
        <div>
          <h1 className="text-7xl font-extrabold">
            <span className="header-shadow-anim">Header</span>
          </h1>
        </div>
      </header>
      <section className="mt-20 py-7">
        <div className="text-center">
          <h2 className="pb-4 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Languages and Tools
          </h2>
          <div className="font-mono text-sm text-amber-50">
            <LogoBanner />
          </div>
        </div>
      </section>
      {/* <div className="text-center">
        <h2 className="pb-4 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
          Projects
        </h2>
      </div> */}
      {/* <div className="text-center">
        <h2 className="pb-4 text-4xl md:text-6xl font-extrabold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-neutral-700 via-neutral-100 to-neutral-700 bg-clip-text text-transparent">
          Projects
        </h2>
      </div> */}
      {/* <div className="text-center">
        <h2 className="pb-4 text-4xl md:text-6xl font-extrabold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-600 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
          Projects
        </h2>
      </div> */}
      <section className="py-7">
        <div className="text-center">
          <h2 className="pb-4 text-4xl md:text-6xl font-extrabold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-amber-900 via-amber-100 to-amber-900 bg-clip-text text-transparent">
            Projects
          </h2>
        </div>
        <ProjectsSection />
      </section>
    </main>
  );
}
