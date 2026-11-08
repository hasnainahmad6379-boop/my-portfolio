"use client";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { PageIntro, Reveal } from "./site";
export default function ContactPage() {
  return (
    <div className="mt-4 space-y-4">
      <PageIntro
        eyebrow="Get in touch"
        title={
          <>
            Let’s build something{" "}
            <span className="green-text">great together.</span>
          </>
        }
        description="Have a project in mind, want to collaborate, or simply want to say hello? I’d be happy to hear from you."
      />
      <Reveal className="panel p-6 sm:p-10">
        <div className="mb-7 flex items-center gap-2 text-xs font-semibold text-[#4c7059]">
          <Sparkles size={15} /> Open to meaningful opportunities
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="contact-card rounded-2xl border border-[#e8ece6] bg-[#fbfcf9] p-6">
            <Phone />
            <p className="eyebrow mt-5">Phone</p>
            <p className="mt-2 select-all font-semibold text-[#2c4234]">
              03005729829
            </p>
            <p className="mt-1 text-[11px] text-[#89938b]">
              Select and copy this number
            </p>
          </div>
          <div className="contact-card rounded-2xl border border-[#e8ece6] bg-[#fbfcf9] p-6">
            <Mail />
            <p className="eyebrow mt-5">Email</p>
            <p className="mt-2 select-all break-all font-semibold text-[#2c4234]">
              hasnainahmad6379@gmail.com
            </p>
            <p className="mt-1 text-[11px] text-[#89938b]">
              Select and copy this address
            </p>
          </div>
          <a
            href="https://github.com/hasnainahmad6379-boop"
            target="_blank"
            rel="noreferrer"
            className="contact-card rounded-2xl border border-[#e8ece6] bg-[#fbfcf9] p-6"
          >
            <Github />
            <p className="eyebrow mt-5">GitHub</p>
            <p className="mt-2 font-semibold text-[#2c4234]">Explore my code</p>
            <p className="mt-1 flex items-center gap-1 text-[11px] text-[#63836d]">
              View profile <ExternalLink size={11} />
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/hasnain-ahmad-796397424/"
            target="_blank"
            rel="noreferrer"
            className="contact-card rounded-2xl border border-[#e8ece6] bg-[#fbfcf9] p-6"
          >
            <Linkedin />
            <p className="eyebrow mt-5">LinkedIn</p>
            <p className="mt-2 font-semibold text-[#2c4234]">Let’s connect</p>
            <p className="mt-1 flex items-center gap-1 text-[11px] text-[#63836d]">
              View profile <ExternalLink size={11} />
            </p>
          </a>
        </div>
      </Reveal>
    </div>
  );
}
