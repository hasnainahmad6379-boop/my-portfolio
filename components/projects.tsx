"use client";
import { ArrowUpRight, Github, Play, Video } from "lucide-react";
import { PageIntro, Reveal } from "./site";
const projects = [
  {
    name: "TripWise",
    type: "AI Travel Planning Platform",
    description:
      "An AI-powered travel planner with personalized itineraries, real-world places, weather, interactive maps, budget estimates, AI chat and Stripe-powered credits.",
    video: "/videos/tripwise.mp4",
    poster: "/posters/tripwise.jpeg",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Gemini API",
      "Stripe",
    ],
    repository: "https://github.com/hasnainahmad6379-boop/TripWise",
    featured: true,
    accent: "from-[#dcebe0] to-[#b9d4c0]",
  },
  {
    name: "Shopper",
    type: "Full-Stack E-commerce",
    description:
      "An online store with product categories, shopping cart, authentication, product image uploads and an admin product-management panel.",
    video: "/videos/shopper.mp4",
    poster: "/posters/shopper.jpeg",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Stripe",
    ],
    repository: "https://github.com/hasnainahmad6379-boop/Ecommerce-Website",
    accent: "from-[#e8e4da] to-[#d9d2c3]",
  },
  {
    name: "Social Media App",
    type: "Video-sharing application",
    description:
      "A social platform with user accounts, video uploads, video browsing and comments, backed by MongoDB.",
    video: "/videos/social-media.mp4",
    poster: "/posters/social-media.jpeg",
    technologies: ["Node.js", "Express", "EJS", "MongoDB", "Multer"],
    repository: "https://github.com/hasnainahmad6379-boop/Social-Media-App",
    accent: "from-[#dce8e0] to-[#9fb9a6]",
  },
];
function Demo({ p }: { p: (typeof projects)[number] }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[18px] bg-gradient-to-br ${p.accent}`}
    >
      <video
        className="project-video aspect-video w-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={p.poster}
        aria-label={`${p.name} project demonstration`}
      >
        <source src={p.video} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
      <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-[9px] font-bold tracking-widest text-[#365746]">
        <Play size={10} fill="currentColor" /> PROJECT DEMO
      </div>
    </div>
  );
}
export default function ProjectsPage() {
  return (
    <div className="mt-4 space-y-4">
      <PageIntro
        eyebrow="Selected work"
        title={
          <>
            Projects you can <span className="green-text">see in action.</span>
          </>
        }
        description="Watch short demos to see the interfaces and features working, then explore the technologies behind each project."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 0.06}
            className={`panel overflow-hidden p-4 sm:p-5 ${p.featured ? "lg:col-span-2" : ""}`}
          >
            <div
              className={
                p.featured
                  ? "grid gap-5 lg:grid-cols-[1.2fr_.8fr] lg:items-center"
                  : "space-y-5"
              }
            >
              <Demo p={p} />
              <div className="px-1 pb-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="eyebrow">{p.type}</p>
                    <h2 className="font-display mt-2 text-3xl text-[#26392d] sm:text-4xl">
                      {p.name}
                    </h2>
                  </div>
                  {p.featured && (
                    <span className="rounded-full bg-[#edf4ee] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#286347]">
                      Featured
                    </span>
                  )}
                </div>
                <p className="mt-4 text-[13px] leading-6 text-[#69756d]">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => (
                    <span key={t} className="skill-chip">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.repository ? (
                    <a
                      href={p.repository}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary !min-h-[40px] !px-4 !text-[11px]"
                    >
                      <Github size={14} /> Repository <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <span className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-[#e3e8e2] px-4 text-[11px] font-semibold text-[#89958c]">
                      <Github size={14} />
                    </span>
                  )}
                  <span className="inline-flex min-h-[40px] items-center gap-2 rounded-full bg-[#edf4ee] px-4 text-[11px] font-semibold text-[#668071]">
                    <Video size={14} /> Demo video
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
