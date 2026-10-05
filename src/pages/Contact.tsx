"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [projectType, setProjectType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ============================================================
  // PROJECT TYPES
  // ============================================================

  const projectTypes = [
    {
      number: "01",
      title: "Website",
      description: "Business, portfolio or landing page",
    },
    {
      number: "02",
      title: "Web Application",
      description: "Interactive full-stack application",
    },
    {
      number: "03",
      title: "ERP System",
      description: "Business management platform",
    },
    {
      number: "04",
      title: "E-Commerce",
      description: "Online store or product platform",
    },
    {
      number: "05",
      title: "UI / Visual Design",
      description: "Interface and visual design",
    },
    {
      number: "06",
      title: "Other",
      description: "Something different",
    },
  ];

  // ============================================================
  // CONTACT INFO
  // ============================================================

  const contactInfo = [
    {
      number: "01",
      label: "EMAIL",
      value: "jishnudevna@gmail.com",
      href: "mailto:jishnudevna@gmail.com",
    },
    {
      number: "02",
      label: "LOCATION",
      value: "Kerala, India",
      href: "#",
    },
    {
      number: "03",
      label: "AVAILABILITY",
      value: "Available for freelance projects",
      href: "#",
    },
  ];

  // ============================================================
  // SOCIALS
  // ============================================================

  const socials = [
    {
      number: "01",
      name: "LinkedIn",
      handle: "Professional network",
      href: "https://www.linkedin.com/in/jishnu-dev-43882028b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    },
    {
      number: "02",
      name: "GitHub",
      handle: "Code & projects",
      href: "https://github.com/Jish-dev",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      number: "03",
      name: "Instagram",
      handle: "Creative work",
      href: "https://www.instagram.com/jish_dev?igsh=MW9zMGE1NDVuazBk",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/instagram.svg",
    },
  ];

  // ============================================================
  // FORM SUBMIT
  // ============================================================

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  // ============================================================
  // SELECTED PROJECT
  // ============================================================

  const selectedProject = projectTypes.find(
    (project) => project.title === projectType
  );

  // ============================================================
  // AUTO SCROLL TO TOP ON REFRESH / PAGE LOAD
  // ============================================================

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  // ============================================================
  // SCROLL REVEAL
  // ============================================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.08,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#06090E] px-5 py-28 text-white sm:px-8 md:py-36 lg:px-12 xl:px-16"
    >
      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      <div className="pointer-events-none absolute  overflow-hidden">
        {/* Gold glow */}
        <div className="absolute left-[5%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#bc9851]/[0.045] blur-[140px]" />

        <div className="absolute right-[2%] top-[38%] h-[500px] w-[500px] rounded-full bg-[#bc9851]/[0.035] blur-[160px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Vertical frame lines */}
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.035]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.035]" />
      </div>

      {/* ========================================================
          MAIN CONTAINER
      ======================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ======================================================
            HEADER
        ====================================================== */}

        <div data-reveal className="reveal mb-20 max-w-5xl">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-[#bc9851]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#bc9851]">
              Contact / Connect
            </span>

            <span className="ml-auto hidden text-[12px] font-medium tracking-[0.2em] text-white/25 sm:block">
              05 / CONTACT
            </span>
          </div>

          <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-white md:text-7xl lg:text-8xl">
            Let’s connect
            <br />
            <span className="bg-gradient-to-r from-[#bc9851] via-[#d0b071] to-[#bc9851] bg-clip-text text-transparent">
              and create.
            </span>
          </h2>

          <div className="mt-10 max-w-2xl">
            <p className="text-base leading-7 text-white/50 sm:text-lg">
              Have an idea, project or digital experience in mind?
              Let's turn it into something useful, thoughtful and
              well-built.
            </p>
          </div>
        </div>

        {/* ======================================================
            INTRO STATS
        ====================================================== */}

        <div
          data-reveal
          className="reveal mb-20 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              number: "01",
              title: "CONTACT",
              text: "Start a conversation",
            },
            {
              number: "02",
              title: "IDEA",
              text: "Define what matters",
            },
            {
              number: "03",
              title: "BUILD",
              text: "Design & develop",
            },
            {
              number: "04",
              title: "24/7",
              text: "Stay connected",
            },
          ].map((item, index) => (
            <div
              key={item.number}
              className={`group relative p-7 transition duration-500 hover:bg-[#bc9851]/[0.035] ${
                index !== 3
                  ? "border-b border-white/10 sm:border-r lg:border-b-0"
                  : ""
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[12px] font-bold tracking-[0.2em] text-[#bc9851]">
                  {item.number}
                </span>

                <span className="text-[9px] tracking-[0.2em] text-white/10">
                  0{index + 1}
                </span>
              </div>

              <h3 className="font-bold tracking-[0.12em] text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-[14px] text-white/45">
                {item.text}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#bc9851] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* ======================================================
            CONTACT + FORM
        ====================================================== */}

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          {/* ====================================================
              CONTACT INFORMATION
          ==================================================== */}

          <div
            data-reveal
            className="reveal rounded-3xl border border-white/10 bg-[#080C12] p-7 sm:p-9"
          >
            <div className="mb-14">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#bc9851]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#bc9851]">
                  Get In Touch
                </span>
              </div>

              <h3 className="max-w-sm text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-4xl">
                HAVE A
                <br />
                PROJECT
                <br />
                <span className="text-[#bc9851]">IN MIND?</span>
              </h3>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/40">
                Tell me what you are building, what you need, and where
                you want to take it. I&apos;ll get back to you with the
                next step.
              </p>
            </div>

            {/* Contact details */}

            <div className="space-y-2">
              {contactInfo.map((item) => (
                <a
                  key={item.number}
                  href={item.href}
                  className="group block rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-300 hover:border-[#bc9851]/30 hover:bg-[#bc9851]/[0.035]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#bc9851]">
                          {item.number}
                        </span>

                        <span className="text-[9px] font-bold tracking-[0.2em] text-white/50">
                          {item.label}
                        </span>
                      </div>

                      <p className="text-sm font-medium text-white/75 transition group-hover:text-white">
                        {item.value}
                      </p>
                    </div>

                    <span className="text-lg text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#bc9851]">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}

            <div className="mt-5 rounded-2xl border border-[#bc9851]/20 bg-[#bc9851]/[0.035] p-5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#bc9851]/40" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#bc9851]" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#bc9851]">
                  Currently Available
                </span>
              </div>

              <p className="mt-3 text-xs leading-5 text-white/55">
                Open to selected freelance projects, collaborations and
                digital product opportunities.
              </p>
            </div>
          </div>

          {/* ====================================================
              FORM
          ==================================================== */}

          <div
            data-reveal
            className="reveal rounded-3xl border border-white/10 bg-[#080C12] p-7 sm:p-9"
          >
            {/* Form header */}

            <div className="mb-10 flex items-start justify-between gap-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#bc9851]">
                  Project Inquiry
                </span>

                <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.03em] sm:text-3xl">
                  TELL ME ABOUT IT.
                </h3>
              </div>

              <span className="hidden rounded-full border border-white/15 px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] text-white/35 sm:block">
                START HERE
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-white/65"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-[#06090E] px-5 py-4 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-[#bc9851]/50 focus:bg-[#bc9851]/[0.025] focus:ring-1 focus:ring-[#bc9851]/20"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-white/65"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#06090E] px-5 py-4 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-[#bc9851]/50 focus:bg-[#bc9851]/[0.025] focus:ring-1 focus:ring-[#bc9851]/20"
                  />
                </div>
              </div>

              {/* Project Type Select */}

              <div>
                <label
                  htmlFor="projectType"
                  className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-white/65"
                >
                  Project Type
                </label>

                <div className="relative">
                  <select
                    id="projectType"
                    name="projectType"
                    value={projectType}
                    onChange={(event) =>
                      setProjectType(event.target.value)
                    }
                    required
                    className="w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-[#06090E] px-5 py-4 pr-14 text-sm text-white outline-none transition-all duration-300 focus:border-[#bc9851]/50 focus:bg-[#bc9851]/[0.025] focus:ring-1 focus:ring-[#bc9851]/20"
                  >
                    <option
                      value=""
                      disabled
                      className="bg-[#080C12] text-white/40"
                    >
                      Select a project type
                    </option>

                    {projectTypes.map((project) => (
                      <option
                        key={project.number}
                        value={project.title}
                        className="bg-[#080C12] text-white"
                      >
                        {project.title}
                      </option>
                    ))}
                  </select>

                  {/* Custom arrow */}

                  <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#bc9851]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Selected project description */}

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    selectedProject
                      ? "mt-3 max-h-20 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {selectedProject && (
                    <div className="flex items-center gap-3 px-1">
                      <span className="text-[9px] font-bold tracking-[0.2em] text-[#bc9851]">
                        {selectedProject.number}
                      </span>

                      <span className="h-px w-5 bg-[#bc9851]/40" />

                      <p className="text-xs text-white/35">
                        {selectedProject.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-white/65"
                >
                  Tell Me More
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your idea, goals, requirements or anything else that might be useful..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#06090E] px-5 py-4 text-sm leading-6 text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-[#bc9851]/50 focus:bg-[#bc9851]/[0.025] focus:ring-1 focus:ring-[#bc9851]/20"
                />
              </div>

              {/* Submit */}

              <div className="flex flex-col gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className=" text-[13px] leading-5 text-white/65">
                  I'll review your message and get back to you with
                  the next steps.
                </p>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#bc9851] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#06090E] transition-all duration-300 hover:bg-[#d0b071] hover:shadow-[0_0_35px_rgba(188,152,81,0.18)]"
                >
                  {submitted ? "Message Sent" : "Send Inquiry"}
                </button>
              </div>

              {/* Success */}

              <div
                className={`overflow-hidden rounded-xl border border-[#bc9851]/20 bg-[#bc9851]/[0.04] transition-all duration-500 ${
                  submitted
                    ? "max-h-24 p-4 opacity-100"
                    : "max-h-0 p-0 opacity-0"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#bc9851] text-xs font-bold text-[#06090E]">
                    ✓
                  </span>

                  <div>
                    <p className="font-bold text-white">
                      Thanks for reaching out.
                    </p>

                    <p className="mt-1 text-[12px] text-white/65">
                      Your project inquiry has been received.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* ======================================================
            SOCIAL / CONNECT
        ====================================================== */}

        <div data-reveal className="reveal mt-20">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#bc9851]">
                Elsewhere
              </span>

              <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.04em] sm:text-3xl">
                LET'S STAY
                <span className="text-[#bc9851]"> CONNECTED.</span>
              </h3>
            </div>

            <span className="hidden text-[9px] font-medium uppercase tracking-[0.2em] text-white/20 sm:block">
              SOCIAL / 03
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {socials.map((social) => (
              <a
                key={social.number}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#bc9851]/30 hover:bg-[#bc9851]/[0.035]"
              >
                {/* Hover glow */}

                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#bc9851]/[0.08] opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Top row */}

                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-[12px] font-bold tracking-[0.2em] text-[#bc9851]">
                      {social.number}
                    </span>

                    <span className="text-lg text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#bc9851]">
                      ↗
                    </span>
                  </div>

                  {/* Social Image */}

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.8] p-3 transition-all duration-500 group-hover:border-[#bc9851]/40">
                    <img
                      src={social.icon}
                      alt={`${social.name} icon`}
                      className="h-8 w-8 object-contain opacity-100 transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>

                  {/* Social name */}

                  <h4 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#d0b071]">
                    {social.name}
                  </h4>

                  <p className="mt-1 text-xs text-white/30">
                    {social.handle}
                  </p>

                  {/* Bottom line */}

                  <div className="mt-6 h-px w-0 bg-[#bc9851] transition-all duration-500 group-hover:w-full" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ======================================================
            FINAL CTA
        ====================================================== */}

        <div
          data-reveal
          className="reveal relative mt-24 overflow-hidden rounded-3xl border border-white/10 bg-[#080C12] px-7 py-14 sm:px-12 sm:py-20"
        >
          {/* CTA glow */}

          <div className="pointer-events-none absolute right-[-10%] top-[-50%] h-[500px] w-[500px] rounded-full bg-[#bc9851]/[0.05] blur-[130px]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#bc9851]">
                Have an idea?
              </span>

              <h3 className="mt-5 max-w-3xl text-[clamp(2.5rem,6vw,6rem)] font-black uppercase leading-[0.86] tracking-[-0.06em]">
                LET'S BUILD
                <br />
                SOMETHING
                <br />
                <span className="text-[#bc9851]">DIGITAL.</span>
              </h3>
            </div>

            <a
              href="mailto:jishnudevna@gmail.com"
              className="group inline-flex shrink-0 items-center gap-4 rounded-full border border-[#bc9851]/40 bg-[#bc9851]/[0.05] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#bc9851] transition-all duration-300 hover:border-[#bc9851] hover:bg-[#bc9851] hover:text-[#06090E]"
            >
              Start a Conversation

              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* ======================================================
            FOOTER
        ====================================================== */}

        <div
          data-reveal
          className="reveal mt-10 flex flex-col gap-4 border-t border-white/[0.07] pt-7 text-[10px] uppercase tracking-[0.2em] text-white/50 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© 2026 JISHNU DEV</p>

          <p>DESIGN • CODE • BUILD</p>

          <p>KERALA, INDIA</p>
        </div>
      </div>

      {/* ========================================================
          REVEAL STYLES
      ======================================================== */}

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.9s ease,
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        select option {
          background: #080c12;
          color: white;
        }

        select option:checked {
          background: #bc9851;
          color: #06090e;
        }

        input::selection,
        textarea::selection {
          background: rgba(188, 152, 81, 0.3);
          color: white;
        }
      `}</style>
    </section>
  );
}