
"use client";

import { useEffect, useState } from "react";

type Tab = "overview" | "approach" | "stack";

const profileOverview = [
  {
    number: "01",
    title: "Digital Thinking",
    description:
      "I start by understanding the idea, the people it's for, and the core problem the product needs to solve.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "I turn concepts into responsive, functional digital products using modern frontend and full-stack technologies.",
  },
  {
    number: "03",
    title: "Visual Direction",
    description:
      "I care about how a product feels, creating interfaces with clear hierarchy, balance, and visual consistency.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand",
    description:
      "Clarify the idea, audience, and goals before starting work.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Map out structure, features, and the tech stack.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Create visual direction, layouts, and interface hierarchy.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Build responsive experiences using maintainable code.",
  },
  {
    number: "05",
    title: "Refine",
    description:
      "Test, polish details, and finalize the experience.",
  },
];

const stack = [
  {
    title: "Frontend",
    items: [
      "HTML / CSS",
      "JavaScript / TS",
      "React",
      "Next.js",
      "Tailwind",
    ],
  },
  {
    title: "Backend & DB",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
    ],
  },
  {
    title: "Design & Tools",
    items: [
      "Figma",
      "Visual Design",
      "Git / GitHub",
      "VS Code",
    ],
  },
];

const capabilities = [
  {
    title: "Web Applications",
    image: "/web-app.jpeg",
    description:
      "Interactive web applications and Progressive Web Apps designed around usability, responsive layouts, and practical functionality.",
  },
  {
    title: "Full-Stack Systems",
    image: "/fullstack.png",
    description:
      "Frontend interfaces, backend services, database integration, and REST APIs for applications that need more than a static website.",
  },
  {
    title: "Visual Design",
    image: "/visual.avif",
    description:
      "Thoughtful layouts, interface concepts, visual hierarchy, and consistent design systems for businesses and digital products.",
  },
];

const principles = [
  {
    number: "01",
    category: "MINDSET",
    title: "Stay Curious.",
    description:
      "Technology keeps evolving, and so do I. I enjoy exploring new tools, understanding how systems work, and expanding my technical knowledge through practical learning.",
  },
  {
    number: "02",
    category: "PROBLEM-SOLVING",
    title: "Think Before Building.",
    description:
      "Good development starts with understanding the problem. Breaking requirements into manageable steps helps me build solutions that are practical, structured, and easier to maintain.",
  },
  {
    number: "03",
    category: "CRAFT",
    title: "Details Matter.",
    description:
      "From clean code and consistent layouts to responsive behavior and small interface details, I pay attention to the elements that make a digital product feel complete and dependable.",
  },
  {
    number: "04",
    category: "GROWTH",
    title: "Learn by Building.",
    description:
      "I learn best by applying ideas to real projects, experimenting with different approaches, and improving through challenges. Every project is an opportunity to strengthen my skills.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  // SCROLL TO TOP ON PAGE LOAD / REFRESH
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden fo bg-slate-50 py-24 text-slate-900 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#bc9851]/50" />

              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#bc9851]">
                About / Profile
              </span>
            </div>

            <h2 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-7xl">
              Building digital
              <br />
              <span className="text-[#bc9851]">
                experiences.
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:col-span-4">
            <div className="border-l-2 border-slate-200 pl-6">
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 md:text-base">
                A developer and visual designer focused on
                building useful, modern, and visually considered
                digital products.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <div className="mb-32 grid grid-cols-1 gap-16 lg:grid-cols-12">

          {/* PROFILE IMAGE */}

          <div className="lg:col-span-5">
            <div className="relative lg:sticky lg:top-28">
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
                <img
                  src="/Abt-ph.png"
                  alt="Jishnu Dev"
                  className="h-[480px] w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400">
                    Developer / Designer
                  </p>

                  <p className="mt-1 text-lg font-bold text-white">
                    Jishnu Dev N A
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ABOUT CONTENT */}

          <div className="flex flex-col justify-center lg:col-span-7">
            <h3 className="border-b border-slate-200 pb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Who I am
            </h3>

            <div className="mt-8 space-y-6">
              <p className="text-xl font-medium leading-relaxed text-slate-900 md:text-2xl">
                I'm{" "}
                <span className="font-bold text-[#bc9851]">
                  Jishnu Dev
                </span>
                , a Software Developer and Visual Designer
                focused on creating modern websites and digital
                products.
              </p>

              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                My work sits between technology and visual
                thinking. I work across frontend development,
                backend systems, and APIs, while keeping a
                strong focus on interface quality, structural
                hierarchy, and consistency.
              </p>

              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                I'm especially interested in understanding how
                different parts of an application work together,
                from the user interface to the underlying data
                and logic that make a product functional.
              </p>
            </div>

            {/* CURRENT FOCUS */}

            <div className="mt-10 rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                Current Focus
              </p>

              <p className="mt-2 font-medium text-slate-800">
                MERN Stack • React • TypeScript • Visual Design
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            CORE CAPABILITIES
        ====================================================== */}

        <div className="mb-32">
          <div className="mb-12 flex items-center justify-between border-b border-slate-200 pb-6">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[#bc9851]">
                What I Bring
              </p>

              <h3 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Core Capabilities
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            {capabilities.map((cap) => (


              <div
                key={cap.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#bc9851]/20 hover:shadow-md"
              >

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white md:col-span-3">
                  <img
                    src={cap.image}
                    alt={`${cap.title} preview`}
                    className="h-32 w-full object-cover transition-transform duration-500  sm:h-40"
                    loading="lazy"
                  />
                </div>

                <h4 className="text-xl py-3 font-bold text-slate-900">
                  {cap.title}
                </h4>

                <p className=" text-sm leading-relaxed text-slate-600">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-32 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:p-12">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-slate-100 pb-8">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[#bc9851]">
                My Method
              </p>

              <h3 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                How I work
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {(["overview", "approach", "stack"] as Tab[]).map(
                (tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    aria-pressed={activeTab === tab}
                    className={`rounded-full px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] transition-all duration-300 md:px-6 ${activeTab === tab
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>
          </div>

          {/* OVERVIEW TAB */}

          {activeTab === "overview" && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {profileOverview.map((item) => (
                <div key={item.number} className="group relative">
                  <span className="font-mono text-lg font-bold text-amber-700/40 transition-colors group-hover:text-[#bc9851]">
                    {item.number}
                  </span>

                  <h4 className="mt-4 text-xl font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* APPROACH TAB */}

          {activeTab === "approach" && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {workflow.map((item) => (
                <div
                  key={item.number}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-6 transition-colors hover:border-amber-700/20"
                >
                  <span className="font-mono text-sm font-bold text-[#bc9851]">
                    {item.number}
                  </span>

                  <h4 className="mt-6 text-base font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* STACK TAB */}

          {activeTab === "stack" && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {stack.map((group) => (
                <div
                  key={group.title}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-8"
                >
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                    {group.title}
                  </h4>

                  <div className="mt-6 flex flex-col gap-3">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium text-slate-600"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#bc9851]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>


        <div className="mb-32">
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-[#bc9851]/50" />

                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#bc9851]">
                  Beyond Development
                </span>
              </div>

              <h3 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
                What drives{" "}
                <span className="text-[#bc9851]">
                  my work.
                </span>
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 md:col-span-4 md:text-base">
              The principles behind how I learn, solve problems,
              and approach every new challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-[#bc9851]/30 hover:shadow-xl hover:shadow-slate-200/50 md:p-10"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-[#bc9851]">
                    {principle.number} / {principle.category}
                  </span>
-
                </div>

                <h4 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  {principle.title}
                </h4>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 md:text-base">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 grid grid-cols-2 gap-8 border-y border-slate-200 py-12 md:grid-cols-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Experience
            </p>

            <p className="mt-3 text-4xl font-bold text-slate-900">
              MERN
            </p>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Full-stack development
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Focus
            </p>

            <p className="mt-3 text-4xl font-bold text-slate-900">
              React
            </p>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Modern interfaces
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Approach
            </p>

            <p className="mt-3 text-4xl font-bold text-slate-900">
              UI +
            </p>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Code & visual thinking
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Based
            </p>

            <p className="mt-3 text-4xl font-bold text-slate-900">
              KL
            </p>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Kerala, India
            </p>
          </div>
        </div>


        <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-10 shadow-2xl md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#bc9851]/10 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#bc9851]">
                Let's Build
              </p>

              <h3 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                Have an idea?
                <br />
                Let's make it real.
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-400">
                Whether it's a website, an application, or a
                new digital concept, I'm open to discussing
                meaningful projects and collaborations.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all hover:scale-105 hover:bg-amber-50"
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
