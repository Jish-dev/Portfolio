"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  type: string;
  year: string;
  description: string;
  technologies: string[];
  image?: string;
  status: string;
  live?: string;
  github?: string;
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  // ============================================================
  // PROJECT DATA
  // ============================================================

  const projects: Project[] = [
    {
      number: "01",
      title: "Explore Kerala",
      category: "TRAVEL",
      type: "Digital Experience",
      year: "2026",
      status: "CONCEPT",
      description:
        "A refined travel platform concept designed to bring Kerala's destinations, culture and landscapes into a clear and engaging digital experience.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Responsive Design",
      ],
      image: "/exp-kl.png",
      live: "#",
      github: "#",
    },

    {
      number: "02",
      title: "OpenWallet",
      category: "FINANCE",
      type: "Web Application",
      year: "2026",
      status: "PRODUCT",
      description:
        "A focused personal finance application created to make everyday income, expenses and balance management simple and intuitive.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "Local Storage",
        "Responsive UI",
      ],
      image: "/openwallet.png",
      live: "#",
      github: "#",
    },

    {
      number: "03",
      title: "DriveX",
      category: "AUTOMOTIVE",
      type: "Digital Platform",
      year: "2026",
      status: "CONCEPT",
      description:
        "A modern automotive platform concept built around vehicle discovery, rental journeys and a structured digital experience.",
      technologies: [
        "React",
        "JavaScript",
        "Bootstrap",
        "REST API",
        "Responsive Design",
      ],
      image: "/Drivex.png",
      live: "https://jish-dev.github.io/DriveX/",
      github: "https://github.com/Jish-dev/DriveX",
    },

    {
      number: "04",
      title: "EduTec",
      category: "EDUCATION",
      type: "Full Stack System",
      year: "2026",
      status: "FULL STACK",
      description:
        "A connected education management system bringing academic operations, attendance and administration together through one streamlined platform.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "JWT",
      ],
      image: "/edutec.png",
      live: "#",
      github: "#",
    },

    {
      number: "05",
      title: "Frozy Fresh",
      category: "FOOD / BRAND",
      type: "Brand Experience",
      year: "2026",
      status: "CLIENT WORK",
      description:
        "A brand-focused digital experience created to communicate product identity, present offerings and establish a stronger online presence.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Responsive UI",
      ],
      image: "/frozyfresh.png",
      live: "#",
      github: "#",
    },

    {
      number: "06",
      title: "Frozy Outlets",
      category: "FOOD / BRAND",
      type: "Admin Portal",
      year: "2026",
      status: "CLIENT WORK",
      description:
        "A brand-focused digital Admin Portal created to store product data, stocks and establish a stronger online presence.",
      technologies: [
        "MERN",
        "Tailwind CSS",
        "TypeScript",
      ],
      image: "/ff-admin.png",
      live: "#",
      github: "#",
    },

    {
      number: "07",
      title: "Ammas Hotel",
      category: "FOOD ",
      type: "Food Experience",
      year: "2026",
      status: "CLIENT WORK",
      description:
        "A restaurant-focused digital experience created to showcase its identity, highlight the menu and create an engaging online presence for customers.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Responsive UI",
      ],
      image: "/ammas.png",
      live: "#",
      github: "#",
    },
  ];

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
    const elements =
      sectionRef.current?.querySelectorAll("[data-project]");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(
            (entry.target as HTMLElement).dataset.project
          );

          setVisibleProjects((current) =>
            current.includes(index)
              ? current
              : [...current, index]
          );
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-[#06090E] py-28 text-white md:py-36"
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute left-[-15%] top-[10%] h-[550px] w-[550px] rounded-full bg-[#bc9851]/[0.05] blur-[140px]" />

      <div className="pointer-events-none absolute right-[-15%] top-[45%] h-[550px] w-[550px] rounded-full bg-[#bc9851]/[0.04] blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-15%] left-[25%] h-[500px] w-[500px] rounded-full bg-[#bc9851]/[0.025] blur-[140px]" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">

        {/* =================================================
            HEADER
        ================================================== */}

        <div className="mb-24 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#bc9851]" />

              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#bc9851]">
                Projects / Portfolio
              </span>
            </div>

            <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-white md:text-7xl lg:text-8xl">
              Thinking beyond
              <br />

              <span className="bg-gradient-to-r from-[#bc9851] via-[#d0b071] to-[#bc9851] bg-clip-text text-transparent">
                concepts.
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:col-span-4">
            <div className="border-l border-white/10 pl-6">
              <p className="font-mono text-[13px] uppercase tracking-[0.25em] text-gray-500">
                03 / Projects
              </p>

              <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400 md:text-base">
                A collection of websites, applications and digital
                products developed through technology, design and
                practical problem solving.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            INTRO
        ================================================== */}

        <div className="mb-28 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-gray-400">
              Portfolio / 2026
            </p>

            <div className="mt-7 border-l border-[#bc9851]/40 pl-5">
              <p className="text-sm leading-7 text-gray-300">
                Each project represents a different problem, idea or
                digital direction explored through development.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h3 className="max-w-5xl text-2xl font-medium leading-[1.4] tracking-[-0.025em] text-white md:text-3xl lg:text-4xl">
              From concept to implementation,
              <span className="text-[#bc9851]">
                {" "}
                I build digital experiences
              </span>{" "}
              with structure, functionality and visual clarity.
            </h3>
          </div>
        </div>

        {/* =================================================
            PROJECT INDEX
        ================================================== */}

        <div className="mb-28 border-y border-white/10 py-3">
          <div className="grid grid-cols-2 md:grid-cols-5">
            {projects.map((project, index) => (
              <a
                key={project.number}
                href={`#project-${project.number}`}
                className={`group relative p-5 transition-all duration-300 hover:bg-white/[0.02] sm:p-6 ${
                  index !== projects.length - 1
                    ? "border-r border-white/10"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#bc9851] sm:text-xs">
                    {project.number}
                  </span>

                  <span className="text-sm text-gray-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#bc9851]">
                    ↗
                  </span>
                </div>

                <p className="mt-5 truncate text-xs font-medium uppercase tracking-[0.12em] text-gray-400 transition-colors group-hover:text-white sm:text-sm">
                  {project.title}
                </p>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#bc9851] transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* =================================================
            PROJECTS
        ================================================== */}

        <div className="space-y-28 lg:space-y-36">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.includes(index);
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={project.number}
                id={`project-${project.number}`}
                data-project={index}
                className={`group transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }`}
                style={{
                  transitionDelay: `${(index % 3) * 120}ms`,
                }}
              >
                {/* =================================================
                    PROJECT META
                ================================================== */}

                <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600 sm:text-xs">
                    Project / {project.number}
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-600 sm:text-xs">
                    {project.year}
                  </span>
                </div>

                {/* =================================================
                    PROJECT GRID
                ================================================== */}

                <div className="grid min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div
                    className={`min-w-0 lg:col-span-7 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative w-full max-w-full overflow-hidden rounded-3xl border border-white/10 bg-[#080C12] shadow-2xl shadow-black/20">

                      {/* IMAGE */}

                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.title} project preview`}
                          className="block h-auto w-full max-w-full object-contain object-center opacity-85 grayscale-[10%] transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="flex min-h-[320px] items-center justify-center">
                          <div className="text-center">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-[#bc9851]/30 bg-[#bc9851]/[0.03] transition-all duration-500 group-hover:border-[#bc9851]/60 group-hover:bg-[#bc9851]/[0.06]">
                              <span className="text-3xl font-light text-[#bc9851]">
                                +
                              </span>
                            </div>

                            <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.3em] text-gray-500 sm:text-[10px]">
                              Add Project Image
                            </p>

                            <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-gray-700">
                              /public/projects/
                            </p>
                          </div>
                        </div>
                      )}

                      {/* DARK GRADIENT */}

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06090E]/80 via-transparent to-transparent" />

                      {/* GOLD OVERLAY */}

                      <div className="pointer-events-none absolute inset-0 bg-[#bc9851]/[0.015] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* TOP LEFT NUMBER */}

                      <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-2 font-mono text-[9px] tracking-[0.25em] text-white/50 backdrop-blur-md">
                          {project.number}
                        </span>
                      </div>

                      {/* TOP RIGHT CATEGORY */}

                      <div className="absolute right-5 top-5 sm:right-6 sm:top-6">
                        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>

                      {/* BOTTOM INFO */}

                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-6 sm:left-6 sm:right-6">
                        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/45 sm:text-[10px]">
                          {project.type}
                        </span>

                        <span className="text-lg text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#bc9851]">
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div
                    className={`min-w-0 lg:col-span-5 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative border-l border-white/10 pl-6 transition-colors duration-500 group-hover:border-[#bc9851]/50 lg:pl-8">

                      {/* STATUS */}

                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#bc9851] sm:text-[10px]">
                          {project.status}
                        </span>

                        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray-700 sm:text-[10px]">
                          {project.year}
                        </span>
                      </div>

                      {/* TITLE */}

                      <h3 className="mt-6 text-4xl font-bold tracking-[-0.055em] text-white transition-colors duration-500 group-hover:text-[#bc9851] sm:text-5xl md:text-6xl">
                        {project.title}
                      </h3>

                      {/* TYPE */}

                      <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.28em] text-gray-600 sm:text-[10px]">
                        {project.category} / {project.type}
                      </p>

                      {/* DESCRIPTION */}

                      <p className="mt-7 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                        {project.description}
                      </p>

                      {/* TECHNOLOGIES */}

                      <div className="mt-8 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/[0.015] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-gray-500 transition-all duration-300 group-hover:border-[#bc9851]/25 group-hover:text-gray-300 sm:text-[10px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* LINK */}

                      <div className="mt-9">
                        <a
                          href={project.live || "#"}
                          target={
                            project.live && project.live !== "#"
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            project.live && project.live !== "#"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="group/link inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-gray-400 transition-all duration-300 hover:border-[#bc9851]/50 hover:bg-[#bc9851]/[0.05] hover:text-[#bc9851] sm:text-xs"
                        >
                          View Project

                          <span className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1">
                            ↗
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =================================================
            PROJECT SUMMARY
        ================================================== */}

        <div className="mb-28 mt-32 border-y border-white/10 py-14 lg:mt-40">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#bc9851]">
                Portfolio / Overview
              </p>

              <h3 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">
                Built through
                <br />

                <span className="text-[#bc9851]">
                  code & creativity.
                </span>
              </h3>
            </div>

            <div className="flex items-end lg:col-span-5">
              <p className="max-w-lg text-sm leading-8 text-gray-500 md:text-base">
                A growing collection of development work, concepts and
                practical digital products built across different
                domains.
              </p>
            </div>
          </div>

          {/* STATS */}

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">

            <div className="bg-[#080C12] p-7 transition-colors duration-300 hover:bg-[#0A0F16]">
              <p className="text-4xl font-bold tracking-[-0.05em] text-[#bc9851] md:text-5xl">
                07
              </p>

              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.3em] text-gray-500 sm:text-[10px]">
                Projects
              </p>
            </div>

            <div className="bg-[#080C12] p-7 transition-colors duration-300 hover:bg-[#0A0F16]">
              <p className="text-4xl font-bold tracking-[-0.05em] text-white md:text-5xl">
                MERN
              </p>

              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.3em] text-gray-500 sm:text-[10px]">
                Full Stack
              </p>
            </div>

            <div className="bg-[#080C12] p-7 transition-colors duration-300 hover:bg-[#0A0F16]">
              <p className="text-4xl font-bold tracking-[-0.05em] text-[#bc9851] md:text-5xl">
                WEB
              </p>

              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.3em] text-gray-500 sm:text-[10px]">
                Digital Products
              </p>
            </div>

            <div className="bg-[#080C12] p-7 transition-colors duration-300 hover:bg-[#0A0F16]">
              <p className="text-4xl font-bold tracking-[-0.05em] text-white md:text-5xl">
                CODE
              </p>

              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.3em] text-gray-500 sm:text-[10px]">
                Development
              </p>
            </div>

          </div>
        </div>

        {/* =================================================
            FINAL CTA
        ================================================== */}

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#080C12] p-8 md:p-12 lg:p-16">

          <div className="pointer-events-none absolute right-[-10%] top-[-50%] h-[400px] w-[400px] rounded-full bg-[#bc9851]/[0.05] blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 items-end gap-10 lg:grid-cols-12">

            <div className="lg:col-span-8">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#bc9851]">
                Next Project
              </p>

              <h3 className="mt-5 max-w-3xl text-4xl font-bold leading-[1] tracking-[-0.05em] text-white md:text-6xl">
                Have an idea?
                <br />

                <span className="text-[#bc9851]">
                  Let's build it.
                </span>
              </h3>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <a
                href="#contact"
                className="inline-flex items-center gap-4 rounded-full bg-[#bc9851] px-7 py-4 text-sm font-bold text-[#06090E] transition-all duration-300 hover:bg-[#d0b071] hover:shadow-xl hover:shadow-[#bc9851]/20"
              >
                Start a Project
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}