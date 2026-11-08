"use client";
import { Code2, Globe2, Layers3, Braces, Database, Rocket } from "lucide-react";
import { PageIntro, Reveal } from "./site";
const journey = [
  [
    "Python foundations",
    "Programming fundamentals, variables, conditions, loops, functions and object-oriented programming.",
    Code2,
  ],
  [
    "Frontend fundamentals",
    "HTML, CSS and JavaScript for structuring, styling and making interactive websites.",
    Globe2,
  ],
  [
    "React development",
    "Components, props, hooks, state management and routing.",
    Layers3,
  ],
  [
    "Backend development",
    "Node.js, Express, REST APIs and authentication.",
    Braces,
  ],
  [
    "Working with data",
    "MySQL, MongoDB and PostgreSQL, using Prisma and Mongoose.",
    Database,
  ],
  [
    "Modern full-stack apps",
    "Next.js, TypeScript, Tailwind CSS, TanStack Query, Redux Toolkit and Stripe.",
    Rocket,
  ],
] as const;
export default function AboutPage() {
  return (
    <div className="mt-4 space-y-4">
      <PageIntro
        eyebrow="A little about me"
        title={
          <>
            My journey as a <span className="green-text">developer.</span>
          </>
        }
        description="I enjoy turning ideas into useful software. My journey began with programming fundamentals and has grown into building complete web applications — learning by creating, testing and improving real projects."
      />
      <Reveal className="panel p-7 sm:p-10">
        <div className="eyebrow">The learning path</div>
        <div className="relative mt-8 space-y-8 pl-1 sm:pl-3">
          {journey.map(([title, description, Icon], i) => (
            <div key={title} className="relative flex gap-4 sm:gap-6">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#e3ebe3] bg-[#f0f5ef] text-[#397454]">
                <Icon size={19} />
              </div>
              {i !== journey.length - 1 && (
                <div className="timeline-line absolute left-[23px] top-12 h-[calc(100%+16px)] w-px" />
              )}
              <div className="flex-1 pt-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-2xl text-[#2b4032] sm:text-3xl">
                    {title}
                  </h2>
                  <span className="text-[10px] font-semibold tracking-widest text-[#9aa69d]">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[#778179]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className="panel grid gap-5 p-7 sm:grid-cols-[1fr_auto] sm:items-center sm:p-9">
        <div>
          <div className="eyebrow">How I approach development</div>
          <h2 className="display-title mt-4 text-3xl sm:text-4xl">
            Learn by building.{" "}
            <span className="green-text">Improve by doing.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#778179]">
            I value practical experience, clean code and understanding how each
            part of an application works together. I’m continuously learning and
            looking for opportunities to build useful digital products.
          </p>
        </div>
        <div className="rounded-2xl bg-[#edf4ee] p-5 text-center">
          <p className="font-display text-4xl text-[#24533e]">∞</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[#63816d]">
            Always learning
          </p>
        </div>
      </Reveal>
    </div>
  );
}
