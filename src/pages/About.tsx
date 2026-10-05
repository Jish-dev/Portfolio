
"use client";

import { useEffect, useState } from "react";

type Tab = "overview" | "approach" | "stack";

const profileOverview = [
  {
    number: "01",
    title: "Digital Thinking",
    description:
      "I start by understanding the idea, the people it is for and the problem the product needs to solve.",
    tags: ["Ideas", "Structure", "Purpose"],
  },
  {
    number: "02",
    title: "Development",
    description:
      "I turn concepts into responsive and functional digital products using modern frontend and full-stack technologies.",
    tags: ["Frontend", "Backend", "Full-Stack"],
  },
  {
    number: "03",
    title: "Visual Direction",
    description:
      "I care about how a product looks and feels, creating interfaces with clear hierarchy, balance and visual consistency.",
    tags: ["Interface", "Typography", "Visuals"],
  },
];

const capabilities = [
  {
    number: "01",
    title: "Web Applications",
    description:
      "Interactive web applications built around real workflows, reusable components and practical functionality.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    number: "02",
    title: "Full-Stack Systems",
    description:
      "Complete digital systems connecting frontend interfaces with APIs, authentication, server logic and databases.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    number: "03",
    title: "Responsive Interfaces",
    description:
      "Interfaces designed to remain clear, consistent and usable across desktops, tablets and mobile devices. Feel it",
    tags: ["Responsive", "Layout", "UI"],
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the idea, requirements, audience and goals before starting the actual work.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Break the project into structure, features, technologies and a practical development direction.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Create the visual direction, layouts and interface hierarchy before moving into development.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Build responsive and functional experiences using reusable components and maintainable code.",
  },
  {
    number: "05",
    title: "Refine",
    description:
      "Test, improve responsiveness, fix details and refine the final experience.",
  },
];

const stack = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Bootstrap",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API", "JWT"],
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose", "Local Storage"],
  },
  {
    title: "Design",
    items: ["Visual Design", "Typography", "Layout", "Branding"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma", "Canva", "Illustrator"],
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  // ============================================================
  // SCROLL TO TOP ON PAGE LOAD / REFRESH
  // ============================================================

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

      <div className="pointer-events-none absolute left-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#b89b63]/[0.05] blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#b89b63]/[0.035] blur-[140px]" />

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
              <span className="h-px w-12 bg-[#b89b63]" />

              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#b89b63]">
                About / Profile
              </span>
            </div>

            <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-white md:text-7xl lg:text-8xl">
              Building digital
              <br />
              <span className="bg-gradient-to-r from-[#a88541] via-[#b89b63] to-[#b89b63] bg-clip-text text-transparent">
                experiences.
              </span>
            </h2>

          </div>

          <div className="flex items-end lg:col-span-4">

            <div className="border-l border-white/10 pl-6">

              <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-gray-500">
                01 / About
              </p>

              <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400 md:text-base">
                A developer and visual designer focused on building useful,
                modern and visually considered digital products.
              </p>

            </div>

          </div>
        </div>

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <div className="mb-28 grid grid-cols-1 gap-16 lg:grid-cols-12">

          {/* IMAGE */}

          <div className="lg:col-span-5">

            <div className="sticky top-28">

              <div className="relative mb-10">

                <div className="absolute -inset-4 rounded-3xl bg-[#b89b63]/[0.09] blur-3xl" />

                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080B10]">

                  <img
                    src="Abt-ph.png"
                    alt="Jishnu Dev"
                    className="h-[460px] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06090E] via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6">

                    <p className="font-mono font-bold text-[10px] uppercase tracking-[0.3em] text-[#a88541]">
                      Developer / Designer
                    </p>

                    <p className="mt-2 text-lg font-bold text-white">
                      Jishnu Dev N A
                    </p>

                  </div>

                </div>

                <div className="mt-3 flex items-center justify-between px-1">

                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray-600">
                    VISUAL / 02
                  </span>

                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray-600">
                    2026
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* WHO I AM */}

          <div className="lg:col-span-7">

            <div>

              <h3 className="border-b border-[#a88541]/20 text-3xl font-bold leading-tight tracking-[-0.05em] text-white md:text-4xl">
                Who I am
              </h3>

              <div className="mt-8 space-y-7">

                <p className="text-xl font-medium leading-8 text-white md:text-2xl">
                  I'm{" "}
                  <span className="font-bold text-[#bc9851]">
                    Jishnu Dev
                  </span>
                  , a{" "}
                  <span className="font-bold">
                    Software Developer and Visual Designer
                  </span>{" "}
                  focused on creating modern websites, web applications and
                  digital experiences.
                </p>

                <p className="text-base leading-6 text-gray-300 md:text-lg">
                  My work sits between technology and visual thinking. I enjoy
                  turning ideas into digital products that are useful,
                  responsive and visually clear.
                </p>

                <p className="text-base leading-6 text-gray-300 md:text-lg">
                  I work across frontend development, backend systems, APIs and
                  databases while keeping a strong focus on interface quality,
                  structure and consistency.
                </p>

                <p className="text-base leading-6 text-gray-300 md:text-lg">
                  I am especially interested in projects where development,
                  design and problem solving come together to create something
                  practical and distinctive.
                </p>

              </div>

              {/* WHAT I DO */}

              <div className="mt-14">

                <h3 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-white md:text-4xl">
                  What I do
                </h3>

                <div className="mt-7 space-y-5">

                  <p className="text-base leading-6 text-gray-300 md:text-lg">
                    <span className="font-bold text-[#a88541]">
                      Development,
                    </span>{" "}
                    building modern websites and applications with reusable
                    components and practical functionality.
                  </p>

                  <p className="text-base leading-6 text-gray-300 md:text-lg">
                    <span className="font-bold text-[#a88541]">
                      Full-Stack,
                    </span>{" "}
                    connecting interfaces with APIs, backend systems,
                    authentication and databases.
                  </p>

                  <p className="text-base leading-6 text-gray-300 md:text-lg">
                    <span className="font-bold text-[#a88541]">
                      Visual Thinking,
                    </span>{" "}
                    shaping interfaces through typography, layout, hierarchy
                    and consistent visual direction.
                  </p>

                </div>

              </div>

              {/* CURRENT FOCUS */}

              <div className="mt-10 border-l border-[#b89b63]/40 pl-5">

                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">
                  Current Focus
                </p>

                <p className="mt-3 text-sm text-white">
                  MERN Stack • React • TypeScript • Visual Design
                </p>

              </div>

            </div>

          </div>
        </div>

        {/* =====================================================
            PROFILE TABS
        ====================================================== */}

        <div className="mb-28 border-y border-white/10 py-10">

          <div className="mb-8 flex flex-wrap items-center justify-between gap-6">

            <div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400">
                Profile
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                How I work
              </h3>

            </div>

            <div className="flex flex-wrap gap-2">

              {(["overview", "approach", "stack"] as Tab[]).map((tab) => (

                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full border px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                    activeTab === tab
                      ? "border-[#b89b63] bg-[#b89b63] text-black shadow-lg shadow-[#b89b63]/10"
                      : "border-white/10 bg-white/[0.02] text-gray-500 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {tab}
                </button>

              ))}

            </div>

          </div>

          {/* =================================================
              PROFILE OVERVIEW
          ================================================== */}

          {activeTab === "overview" && (

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

              {profileOverview.map((item) => (

                <div
                  key={item.number}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080C12] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#b89b63]/40"
                >

                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#b89b63]/[0.035] blur-3xl transition-all duration-700 group-hover:bg-[#b89b63]/[0.08]" />

                  <div className="relative flex items-center justify-between">

                    <span className="font-mono text-[14px] tracking-[0.2em] text-[#b89b63]">
                      {item.number}
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
                      Profile
                    </span>

                  </div>

                  <div className="relative mt-7 h-px w-full bg-white/10">

                    <div className="h-px w-0 bg-[#b89b63] transition-all duration-700 group-hover:w-16" />

                  </div>

                  <h4 className="relative mt-10 max-w-xs text-2xl font-bold leading-tight tracking-[-0.04em] text-white md:text-[26px]">
                    {item.title}
                  </h4>

                  <p className="relative mt-5 min-h-[100px] text-sm leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                    {item.description}
                  </p>

                  <div className="relative mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6">

                    {item.tags.map((tag) => (

                      <span
                        key={tag}
                        className="font-mono text-[12px] uppercase tracking-[0.16em] text-gray-400 transition-colors duration-300 group-hover:text-[#b89b63]"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                  <div className="relative mt-10 flex items-center justify-between">

                    <span className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
                      JDN / 2026
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm text-gray-600 transition-all duration-300 group-hover:border-[#b89b63]/40 group-hover:text-[#b89b63]">
                      ↗
                    </span>

                  </div>

                </div>

              ))}

            </div>

          )}

          {/* =================================================
              APPROACH
          ================================================== */}

          {activeTab === "approach" && (

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-5">

              {workflow.map((item) => (

                <div
                  key={item.number}
                  className="bg-[#080C12] p-7 transition-colors duration-300 hover:bg-[#0A0F16]"
                >

                  <span className="font-mono text-[#b89b63]">
                    {item.number}
                  </span>

                  <h4 className="mt-12 text-lg font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-gray-300">
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

          )}

          {/* =================================================
              STACK
          ================================================== */}

          {activeTab === "stack" && (

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">

              {stack.map((group) => (

                <div
                  key={group.title}
                  className="rounded-2xl border border-white/10 bg-[#080C12] p-6"
                >

                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                    {group.title}
                  </h4>

                  <div className="mt-6 space-y-3">

                    {group.items.map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-gray-300"
                      >

                        <span className="h-1.5 w-1.5 rounded-full bg-[#b89b63]" />

                        {item}

                      </div>

                    ))}

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* =====================================================
            CORE CAPABILITIES
        ====================================================== */}

        <div className="mb-28">

          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">

            <div className="lg:col-span-7">

              <p className="font-mono font-bold text-[11px] uppercase tracking-[0.25em] text-[#a88541]">
                Capabilities
              </p>

              <h3 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white md:text-6xl">
                What I can
                <br />
                build for you.
              </h3>

            </div>

            <div className="flex items-end lg:col-span-5">

              <p className="max-w-lg text-sm leading-8 text-gray-400 md:text-base">
                From individual interfaces to complete web applications, I
                combine development and visual thinking to build digital
                products around real requirements.
              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">

            {capabilities.map((item) => (

              <div
                key={item.number}
                className="group bg-[#080C12] p-8 transition-all duration-500 hover:bg-[#0A0F16] md:p-10"
              >

                <div className="flex items-center justify-between">

                  <span className="font-mono text-[#b89b63]">
                    {item.number}
                  </span>

                  <span className="text-xl text-gray-700 transition-colors duration-300 group-hover:text-[#b89b63]">
                    ↗
                  </span>

                </div>

                <h4 className="mt-16 text-2xl font-bold text-white">
                  {item.title}
                </h4>

                <p className="mt-5 text-sm leading-8 text-gray-400">
                  {item.description}
                </p>

                <div className="mt-8 h-px w-full bg-white/10 transition-colors duration-500 group-hover:bg-[#b89b63]/40" />

                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">

                  {item.tags.map((tag) => (

                    <span
                      key={tag}
                      className="font-mono text-[12px] uppercase tracking-[0.15em] text-gray-300"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* =====================================================
            DEVELOPMENT PHILOSOPHY
        ====================================================== */}

        <div className="mb-28 grid grid-cols-1 gap-12 lg:grid-cols-12">

          <div className="lg:col-span-4">

            <p className="font-mono font-bold text-[12px] uppercase tracking-[0.25em] text-[#a88541]">
              Philosophy
            </p>

            <h3 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Simple ideas.
              <br />
              Thoughtful execution.
            </h3>

          </div>

          <div className="lg:col-span-8">

            <div className="space-y-10">

              <div className="border-l border-[#b89b63]/40 pl-6">

                <p className="text-xl font-medium leading-relaxed text-white md:text-2xl">
                  Good digital products should feel simple to use and
                  intentional in every detail.
                </p>

              </div>

              <p className="text-base leading-8 text-gray-400 md:text-lg">
                I believe design and development should not work as separate
                stages. The visual direction influences the technical
                implementation, while the technical limitations can shape the
                final experience.
              </p>

              <p className="text-base leading-8 text-gray-400 md:text-lg">
                That is why I like working across both sides of the process —
                from structure and functionality to visual hierarchy,
                typography and interaction.
              </p>

              <div className="grid grid-cols-1 gap-5 pt-4 md:grid-cols-3">

                <div className="border-t border-white/10 pt-5">

                  <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#b89b63]">
                    01
                  </span>

                  <p className="mt-3 font-medium text-white">
                    Clear Structure
                  </p>

                  <p className="mt-2 text-xs leading-6 text-gray-300">
                    Organised systems that are easy to understand and maintain.
                  </p>

                </div>

                <div className="border-t border-white/10 pt-5">

                  <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#b89b63]">
                    02
                  </span>

                  <p className="mt-3 font-medium text-white">
                    Visual Focus
                  </p>

                  <p className="mt-2 text-xs leading-6 text-gray-300">
                    Interfaces built around hierarchy, balance and clarity.
                  </p>

                </div>

                <div className="border-t border-white/10 pt-5">

                  <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#b89b63]">
                    03
                  </span>

                  <p className="mt-3 font-medium text-white">
                    Practical Code
                  </p>

                  <p className="mt-2 text-xs leading-6 text-gray-300">
                    Reusable and maintainable development focused on real use.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            FINAL STATS
        ====================================================== */}

        <div className="mb-28 border-y border-white/10 py-12">

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

            <div>

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Experience
              </p>

              <p className="mt-3 text-3xl font-bold text-[#a88541] md:text-4xl">
                2+
              </p>

              <p className="mt-1 text-xs text-gray-300">
                Years working with digital projects
              </p>

            </div>

            <div>

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Focus
              </p>

              <p className="mt-3 text-3xl font-bold text-[#a88541] md:text-4xl">
                MERN
              </p>

              <p className="mt-1 text-xs text-gray-300">
                Full-stack development
              </p>

            </div>

            <div>

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Approach
              </p>

              <p className="mt-3 text-3xl font-bold text-[#a88541] md:text-4xl">
                UI +
              </p>

              <p className="mt-1 text-xs text-gray-300">
                Development and visual thinking
              </p>

            </div>

            <div>

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Based
              </p>

              <p className="mt-3 text-3xl font-bold text-[#a88541] md:text-4xl">
                KL
              </p>

              <p className="mt-1 text-xs text-gray-300">
                Kerala, India
              </p>

            </div>

          </div>

        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#080C12] p-8 md:p-12 lg:p-16">

          <div className="pointer-events-none absolute right-[-10%] top-[-50%] h-[400px] w-[400px] rounded-full bg-[#b89b63]/[0.05] blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 items-end gap-10 lg:grid-cols-12">

            <div className="lg:col-span-8">

              <p className="font-mono font-bold text-[10px] uppercase tracking-[0.25em] text-[#a88541]">
                Let's build
              </p>

              <h3 className="mt-5 max-w-3xl text-4xl font-bold leading-[1] tracking-[-0.05em] text-white md:text-6xl">
                Have an idea?
                <br />
                Let's turn it into something real.
              </h3>

            </div>

            <div className="lg:col-span-4 lg:text-right">

              <a
                href="#contact"
                className="inline-flex items-center gap-4 rounded-full bg-[#a88541] px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-[#c4aa76] hover:shadow-xl hover:shadow-[#b89b63]/20"
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

