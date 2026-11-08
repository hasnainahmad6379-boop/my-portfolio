"use client";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  GraduationCap,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./site";
export default function HomePage() {
  return (
    <div className="mt-4 grid gap-4 lg:grid-cols-[1.02fr_.98fr]">
      <Reveal className="panel relative flex min-h-[540px] flex-col justify-between overflow-hidden p-7 sm:p-10">
        <div>
          <div className="eyebrow">Full-Stack Web Developer</div>
          <h1 className="display-title mt-8 text-[clamp(3.5rem,7.2vw,6.7rem)]">
            Hi, I’m
            <br />
            <span className="green-text">Hasnain</span> Ahmad
            <span className="green-text">.</span>
          </h1>
          <p className="mt-6 max-w-[410px] text-sm leading-7 text-[#69736c]">
            I build modern, responsive and functional web applications — turning
            thoughtful ideas into useful digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/projects" className="btn-primary">
              Explore my work <ArrowUpRight size={15} />
            </a>
            <a href="/contact" className="btn-secondary">
              Get in touch <ArrowRight size={14} />
            </a>
          </div>
          <div className="mt-7 flex gap-3">
            <a
              href="https://github.com/hasnainahmad6379-boop"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/hasnain-ahmad-796397424/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="text-gray-400 hover:text-[#0A66C2] transition-colors" />
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-7 border-t border-[#e9ece6] pt-5 text-[11px] text-[#66736a]">
          <span>
            <Code2 className="mr-1 inline" /> 3+ Featured projects
          </span>
          <span>
            <GraduationCap className="mr-1 inline" /> Always learning
          </span>
          <span>
            <Sparkles className="mr-1 inline" /> Building with purpose
          </span>
        </div>
      </Reveal>
      <Reveal
        delay={0.08}
        className="panel relative flex min-h-[540px] items-center justify-center overflow-hidden bg-[#e9f0e9] p-6"
      >
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#d2e3d5]" />
        <div className="relative flex h-[410px] w-full max-w-[430px] flex-col items-center justify-center rounded-[44%_44%_25px_25px] border border-white/70 bg-gradient-to-b from-[#dce9dd] to-[#b9d0bd]">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-[7px] border-white shadow-lg">
            <img
              src="/images/profile.png"
              alt="Hasnain Ahmad"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-4 right-5 rounded-2xl bg-white/90 px-4 py-3 shadow-lg">
            <p className="text-[9px] uppercase tracking-widest text-[#819087]">
              Currently building
            </p>
            <p className="mt-1 text-xs font-semibold text-[#294d38]">
              Thoughtful web experiences ↗
            </p>
          </div>
        </div>
        <div className="absolute bottom-7 left-7 text-[10px] font-semibold uppercase tracking-[.18em] text-[#65816d]">
          Based in Pakistan
        </div>
      </Reveal>
      <Reveal className="panel flex flex-wrap items-center justify-between gap-5 p-6 sm:px-9">
        <div>
          <p className="eyebrow">A quick introduction</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">
            Code, curiosity &{" "}
            <span className="green-text">continuous growth.</span>
          </h2>
        </div>
        <a href="/about" className="btn-secondary">
          Discover my journey <ArrowUpRight size={14} />
        </a>
      </Reveal>
    </div>
  );
}
