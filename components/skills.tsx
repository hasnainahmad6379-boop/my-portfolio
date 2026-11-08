"use client";
import {
  Braces,
  Database,
  Globe2,
  Layers3,
  CreditCard,
  Wrench,
} from "lucide-react";
import { PageIntro, Reveal } from "./site";
const groups = [
  {
    title: "Frontend",
    description: "Interfaces and user experiences",
    icon: Globe2,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    description: "Server-side development",
    icon: Braces,
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    description: "Data storage and modeling",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma", "Mongoose"],
  },
  {
    title: "State & Data",
    description: "Application state and fetching",
    icon: Layers3,
    items: ["TanStack Query", "Redux Toolkit"],
  },
  {
    title: "Payments",
    description: "Payment integration",
    icon: CreditCard,
    items: ["Stripe"],
  },
  {
    title: "Developer Tools",
    description: "Daily development workflow",
    icon: Wrench,
    items: ["Git", "GitHub", "Postman"],
  },
];
export default function SkillsPage() {
  return (
    <div className="mt-4 space-y-4">
      <PageIntro
        eyebrow="Tools of the trade"
        title={
          <>
            Technologies I <span className="green-text">work with.</span>
          </>
        }
        description="A growing toolkit for building across the frontend, backend and database layers. These are technologies I have studied and used while building practical projects."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {groups.map((g, i) => {
          const Icon = g.icon;
          return (
            <Reveal
              key={g.title}
              delay={i * 0.04}
              className="project-card panel p-6 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf4ee] text-[#397454]">
                  <Icon size={21} />
                </div>
                <span className="text-[10px] font-semibold tracking-widest text-[#a0aaa2]">
                  0{i + 1}
                </span>
              </div>
              <h2 className="font-display mt-6 text-2xl text-[#2b4032]">
                {g.title}
              </h2>
              <p className="mt-1 text-xs text-[#89938b]">{g.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
