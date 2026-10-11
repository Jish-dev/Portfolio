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
      live: "https://jish-dev.github.io/Explore-kerala/",
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
      live: "https://jish-dev.github.io/openwallet/",
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
      title: "EduTech",
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
      live: "https://jish-dev.github.io/EduTech/",
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
      live: "https://frozyfresh.netlify.app/",
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
      live: "https://frozyadmin.netlify.app/",
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
    {
      number: "08",
      title: "Alpha Electronics",
      category: "BRAND" ,
      type: "Electronics",
      year: "2026",
      status: "REACT PROJECT",
      description:
        "A modern e-commerce experience built to showcase electronic products, simplify product discovery, and deliver a seamless online shopping experience through a clean, responsive, and user-friendly interface.",
      technologies: [
        "REACT",
        "Tailwind CSS",
        "TypeScript",
        "Responsive UI",
      ],
      image: "/alpha.png",
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
    const elements = sectionRef.current?.querySelectorAll("[data-project]");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number((entry.target as HTMLElement).dataset.project);

          setVisibleProjects((current) =>
            current.includes(index) ? current : [...current, index]
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
      className="relative overflow-hidden bg-slate-50 py-24 text-slate-900 md:py-32"
    >

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div className="relative z-10 mx-auto max-w-[1300px] px-6 md:px-10 lg:px-16">

        {/* =================================================
            HEADER
        ================================================== */}
        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#bc9851]/50" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#bc9851]">
                Projects / Portfolio
              </span>
            </div>

            <h2 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-7xl">
              Thinking beyond <br />
              <span className="text-[#bc9851]">concepts.</span>
            </h2>
          </div>

          <div className="flex items-end lg:col-span-4">
            <div className="border-l-2 border-slate-200 pl-6">
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 md:text-base">
                A collection of websites, applications and digital products
                developed through technology, design and practical problem
                solving.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            INTRO
        ================================================== */}
        <div className="mb-24 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Portfolio / 2026
            </p>
            <div className="mt-6 border-l-2 border-[#bc9851]/30 pl-5">
              <p className="text-sm leading-relaxed text-slate-600">
                Each project represents a different problem, idea or digital
                direction explored through development.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h3 className="max-w-4xl text-2xl font-medium leading-relaxed tracking-tight text-slate-900 md:text-3xl">
              From concept to implementation,
              <span className="font-bold text-[#bc9851]">
                {" "}
                I build digital experiences
              </span>{" "}
              with structure, functionality and visual clarity.
            </h3>
          </div>
        </div>


        <div className="mb-24 border-y border-slate-200 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {projects.map((project, index) => (
              <a
                key={project.number}
                href={`#project-${project.number}`}
                className={`group relative p-5 transition-all duration-300 hover:bg-slate-100 sm:p-6 ${index !== projects.length - 1 ? "border-slate-200 md:border-r" : ""
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-[#bc9851] sm:text-xs">
                    {project.number}
                  </span>
                  <span className="text-sm text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#bc9851]">
                    ↗
                  </span>
                </div>
                <p className="mt-5 truncate text-xs font-bold uppercase tracking-[0.1em] text-slate-500 transition-colors group-hover:text-slate-900">
                  {project.title}
                </p>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#bc9851] transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-28 lg:space-y-36">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.includes(index);
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={project.number}
                id={`project-${project.number}`}
                data-project={index}
                className={`group transition-all duration-1000 ease-out ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                  }`}
                style={{
                  transitionDelay: `${(index % 3) * 120}ms`,
                }}
              >
                {/* PROJECT META */}
                <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
                    Project / {project.number}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
                    {project.year}
                  </span>
                </div>

                <div className="grid min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

                  {/* IMAGE */}
                  <div
                    className={`min-w-0 lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"
                      }`}
                  >
                    <div className="relative w-full max-w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">

                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.title} project preview`}
                          className="block h-auto w-full max-w-full object-contain object-center transition-transform duration-700 ease-out "
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="flex min-h-[320px] items-center justify-center bg-slate-50">
                          <div className="text-center">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-[#bc9851]/20 bg-amber-50 transition-all duration-500 group-hover:border[#bc9851]/40 group-hover:bg-amber-100">
                              <span className="text-3xl font-light text-[#bc9851]">+</span>
                            </div>
                            <p className="mt-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                              Add Project Image
                            </p>
                            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400">
                              /public/projects/
                            </p>
                          </div>
                        </div>
                      )}

                      {/* LIGHT FROSTED OVERLAYS */}
                      <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                        <span className="rounded-full border border-slate-200 bg-white/90 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-700 backdrop-blur-md shadow-sm">
                          {project.number}
                        </span>
                      </div>

                      <div className="absolute right-5 top-5 sm:right-6 sm:top-6">
                        <span className="rounded-full border border-slate-200 bg-white/90 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-700 backdrop-blur-md shadow-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`min-w-0 lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"
                      }`}
                  >
                    <div className="relative border-l-2 border-slate-200 pl-6 transition-colors duration-500 group-hover:border-[#bc9851]/40 lg:pl-8">

                      {/* STATUS */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#bc9851] sm:text-xs">
                          {project.status}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                          {project.year}
                        </span>
                      </div>

                      {/* TITLE */}
                      <h3 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 transition-colors duration-500 group-hover:text-[#bc9851] sm:text-5xl">
                        {project.title}
                      </h3>

                      {/* TYPE */}
                      <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                        {project.category} / {project.type}
                      </p>

                      {/* DESCRIPTION */}
                      <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                        {project.description}
                      </p>

                      {/* TECHNOLOGIES */}
                      <div className="mt-8 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500 transition-all duration-300 group-hover:border-[#bc9851]/30 group-hover:bg-amber-50 group-hover:text-[#bc9851]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* LINK */}
                      <div className="mt-10">
                        <a
                          href={project.live || "#"}
                          target={
                            project.live && project.live !== "#" ? "_blank" : undefined
                          }
                          rel={
                            project.live && project.live !== "#"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="group/link inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 shadow-sm transition-all duration-300 hover:border-[#bc9851]/40 hover:bg-amber-50 hover:text-[#bc9851]"
                        >
                          View Project

                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        <div className="mb-24 mt-32 border-y border-slate-200 py-16 lg:mt-40">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#bc9851]">
                Portfolio / Overview
              </p>
              <h3 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Built through <br />
                <span className="text-[#bc9851]">code & creativity.</span>
              </h3>
            </div>

            <div className="flex items-end lg:col-span-5">
              <p className="max-w-lg text-sm leading-relaxed text-slate-600 md:text-base">
                A growing collection of development work, concepts and practical
                digital products built across different domains.
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-4">
            <div className="bg-white p-8 transition-colors duration-300 hover:bg-slate-50">
              <p className="text-4xl font-bold tracking-tight text-[#bc9851] md:text-5xl">
                08
              </p>
              <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Projects
              </p>
            </div>

            <div className="bg-white p-8 transition-colors duration-300 hover:bg-slate-50">
              <p className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                MERN
              </p>
              <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Full Stack
              </p>
            </div>

            <div className="bg-white p-8 transition-colors duration-300 hover:bg-slate-50">
              <p className="text-4xl font-bold tracking-tight text-[#bc9851] md:text-5xl">
                WEB
              </p>
              <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Digital Products
              </p>
            </div>

            <div className="bg-white p-8 transition-colors duration-300 hover:bg-slate-50">
              <p className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                CODE
              </p>
              <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Development
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            FINAL CTA
        ================================================== */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-10 md:p-16 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#ffdc97]">
                Next Project
              </p>
              <h3 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
                Have an idea? <br />
                <span className="text-[#ffdc97]">Let's build it.</span>
              </h3>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-amber-50"
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