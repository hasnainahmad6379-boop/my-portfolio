"use client";
import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";
const links = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Contact", "/contact"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-3 z-50 mt-3 rounded-2xl border border-[#e8e9e2] bg-[#fbfaf6]/95 px-5 py-3 shadow-lg backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <a
          href="/"
          className="font-display text-[26px] font-bold tracking-[-.09em] text-[#1b3d2e]"
        >
          HA<span className="text-[#579174]">.</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([n, u]) => (
            <a key={u} href={u} className="nav-link">
              {n}
            </a>
          ))}
        </nav>
        <a href="/contact" className="btn-primary hidden sm:inline-flex">
          Let’s Talk <ArrowUpRight size={14} />
        </a>
        <button
          className="rounded-full border p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="grid gap-1 pt-4 md:hidden">
          {links.map(([n, u]) => (
            <a
              key={u}
              href={u}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm hover:bg-[#edf3ee]"
            >
              {n}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="panel mt-5 flex flex-col items-center justify-between gap-5 px-6 py-6 sm:flex-row">
      <div>
        <b className="font-display text-2xl text-[#1b3d2e]">HA.</b>
        <p className="mt-1 text-[10px] text-[#849087]">
          Hasnain Ahmad · Full-Stack Web Developer
        </p>
      </div>
      <nav className="flex flex-wrap justify-center gap-5">
        {links.map(([n, u]) => (
          <a key={u} href={u} className="nav-link">
            {n}
          </a>
        ))}
      </nav>
      <div className="flex gap-3">
        <a
          href="https://github.com/hasnainahmad6379-boop"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={17} />
        </a>
        <Linkedin className="text-gray-400" />
      </div>
    </footer>
  );
}
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <Reveal className="panel p-7 sm:p-11">
      <div className="eyebrow">{eyebrow}</div>
      <h1 className="display-title mt-6 max-w-4xl text-5xl sm:text-7xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-sm leading-7 text-[#727b74] sm:text-base">
        {description}
      </p>
    </Reveal>
  );
}
