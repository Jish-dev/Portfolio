"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pageLoaded, setPageLoaded] = useState(false);

  // ============================================================
  // AUTO SCROLL TO TOP ON REFRESH / PAGE LOAD
  // ============================================================

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      window.history.scrollRestoration = "auto";
    };
  }, []);

  const marqueeWords = [
    "CODE",
    "DESIGN",
    "BUILD",
    "CREATE",
    "DEVELOP",
    "INNOVATE",
    "EXPLORE",
    "ENGINEER",
    "EXPERIENCE",
    "TECHNOLOGY",
  ];

  const projects = [
    {
      num: "01",
      title: "OpenWallet PWA",
      category: "Progressive Web Application",
      desc:
        "An offline-first personal finance tracking application featuring local persistence, interactive visualizers and a dark interface.",
      highlights: [
        "Service Worker Offline Caching",
        "Local Data Persistence",
        "Responsive Mobile-First UI",
      ],
      tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
    },
    {
      num: "02",
      title: "DriveX",
      category: "Car Rental Platform",
      desc:
        "A commercial platform and brand website concept for a modern car rental and mobility business.",
      highlights: [
        "Multi-page Catalog UI",
        "Commercial Dashboard",
        "Brand Design System",
      ],
      tech: ["HTML", "CSS", "JavaScript", "Design"],
    },
  ];

  const services = [
    {
      num: "01",
      title: "Web Engineering",
      desc:
        "Building fast, modern and responsive web interfaces and applications using clean code architecture.",
    },
    {
      num: "02",
      title: "Visual Design",
      desc:
        "Designing clear interfaces, wireframes, prototypes and visual systems with attention to usability.",
    },
    {
      num: "03",
      title: "Digital Solutions",
      desc:
        "Creating practical digital experiences for businesses, products and personal brands.",
    },
  ];

  const skillGroups = [
    {
      category: "Frontend",
      tools: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5 / CSS3",
      ],
    },
    {
      category: "Backend & Systems",
      tools: [
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs",
        "Git / GitHub",
      ],
    },
    {
      category: "Design",
      tools: [
        "Figma",
        "Wireframing",
        "Visual Design",
        "Responsive Design",
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#06090E] font-sans text-white antialiased selection:bg-[#bc9851] selection:text-black">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        id="home"
        className="relative min-h-[720px] w-full overflow-hidden bg-[#020408] sm:min-h-screen"
      >
        {/* HERO IMAGE */}

        <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
          <img
            src="/hero2.png"
            alt="Jishnu Dev"
            className="
              absolute
              right-[3%]
              top-100
              h-[82vh]
              max-h-[700px]
              w-auto
              max-w-none
              -translate-y-1/2
              object-contain
              opacity-75
              xl:right-[0%]
              xl:h-[88vh]
              2xl:right-[3%]
              2xl:h-[92vh]
            "
          />

          {/* LEFT FADE */}

          <div
            className="
              absolute
              inset-y-0
              left-0
              z-20
              w-[75%]
              bg-gradient-to-r
              from-[#020408]
              via-[#020408]/95
              to-transparent
            "
          />

          {/* TOP FADE */}

          <div
            className="
              absolute
              inset-x-0
              top-0
              z-20
              h-40
              bg-gradient-to-b
              from-[#020408]
              to-transparent
              xl:h-52
            "
          />

          {/* BOTTOM FADE */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              z-20
              h-32
              bg-gradient-to-t
              from-[#020408]
              to-transparent
              xl:h-44
            "
          />

          {/* RIGHT FADE */}

          <div
            className="
              absolute
              inset-y-0
              right-0
              z-20
              w-20
              bg-gradient-to-l
              from-[#020408]/60
              to-transparent
            "
          />
        </div>

        {/* MOBILE HERO IMAGE */}

        <div className="pointer-events-none absolute inset-0 z-10 lg:hidden">
          <img
            src="/hero.png"
            alt=""
            className="
              absolute
              right-[-25%]
              top-[45%]
              h-[58vh]
              w-auto
              max-w-none
              -translate-y-1/2
              object-contain
              opacity-20
              sm:right-[-10%]
              sm:h-[65vh]
              sm:opacity-25
            "
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#020408] via-[#020408]/90 to-[#020408]/50" />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#020408] to-transparent" />
        </div>

        {/* HERO CONTENT */}

        <div className="relative z-30 mx-auto flex min-h-[720px] w-full max-w-[1600px] items-center px-5 py-20 sm:min-h-screen sm:px-8 md:px-10 lg:px-14 xl:px-20">
          <div
            className={`relative z-30 w-full max-w-[680px] hero-text ${
              pageLoaded ? "hero-text-loaded" : ""
            }`}
          >
            {/* LABEL */}

            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-8 bg-[#a88541] shadow-[0_0_12px_rgba(52,211,153,0.8)] sm:w-12" />

              <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#a88541] sm:text-[10px] sm:tracking-[0.45em]">
                Creative Developer
              </span>
            </div>

            {/* INTRO */}

            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-gray-200 sm:text-xs sm:tracking-[0.4em]">
              HELLO, I'M A
            </p>

            {/* TITLE */}

            <div className="relative">
              <div className="relative mt-3 inline-block sm:mt-4">
                <span
                  className="
                    block
                    whitespace-nowrap
                    text-[clamp(3.1rem,12vw,6rem)]
                    font-black
                    leading-[0.9]
                    tracking-[-0.07em]
                  "
                >
                  <span className="font-serif italic text-[#f0aa1f]">
                    'DEV'
                  </span>

                  <span className="text-white">eloper.</span>
                </span>

                <h2
                  className="
                    mt-1
                    whitespace-nowrap
                    text-[clamp(2.7rem,11vw,7rem)]
                    font-black
                    leading-[0.78]
                    tracking-[-0.06em]
                    sm:mt-0
                  "
                >
                  &amp; Designer.
                </h2>
              </div>
            </div>

            {/* DESCRIPTION */}

            <p className="mt-8 max-w-[520px] text-xs leading-6 text-gray-400 sm:mt-10 sm:text-sm sm:leading-7 md:mt-12 md:text-base">
              Turning ideas into real digital experiences through{" "}
              <span className="text-white">design</span>,{" "}
              <span className="text-white">code</span> and{" "}
              <span className="text-[#cfa44d]">creativity.</span>
            </p>

            {/* BUTTONS */}

            <div className="mt-7 flex flex-col items-stretch gap-3 xs:flex-row xs:items-center sm:mt-9 sm:flex-row sm:gap-4">
              <a
                href="#projects"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#cfa44d]
                  px-6
                  py-3
                  text-xs
                  font-semibold
                  text-black
                  shadow-[0_0_30px_rgba(52,211,153,0.12)]
                  transition-all
                  duration-300
                  hover:bg-[#b3872f]
                  hover:shadow-xl
                  hover:shadow-[#cfa44f]/20
                  sm:px-7
                  sm:py-3.5
                  sm:text-sm
                "
              >
                Selected Works
              </a>

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.02]
                  px-6
                  py-3
                  text-xs
                  font-medium
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-[#cfa44d]/50
                  hover:bg-white/5
                  sm:px-7
                  sm:py-3.5
                  sm:text-sm
                "
              >
                Let's Talk
              </a>
            </div>

            {/* SOCIAL */}

            <div className="mt-8 flex items-center gap-2 sm:mt-12 sm:gap-3">
              {[
                ["IG", "https://www.instagram.com/jish_dev?igsh=MW9zMGE1NDVuazBk"],
                ["GH", "https://github.com/Jish-dev"],
                ["IN", "https://www.linkedin.com/in/jishnu-dev-43882028b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"],
              ].map(([icon, href]) => (
                <a
                  key={icon}
                  href={href}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.02]
                    text-gray-500
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-[#cfa44d]
                    hover:bg-emerald-400/10
                    hover:text-[#cfa44d]
                    sm:h-10
                    sm:w-10
                  "
                >
                  <span className="text-[10px] sm:text-xs">{icon}</span>
                </a>
              ))}

              <div className="ml-2 h-px w-10 bg-white/10 sm:ml-3 sm:w-16" />

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-gray-600 sm:text-[9px] sm:tracking-[0.25em]">
                Available
              </span>
            </div>
          </div>

          {/* SIDE META */}

          <div className="absolute right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:right-8">
            <div className="flex flex-col items-end gap-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-600">
                  DIGITAL
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#cfa44d] shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              </div>

              <div className="h-20 w-px bg-gradient-to-b from-[#cfa44d]/60 to-transparent xl:h-24" />

              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-600 [writing-mode:vertical-rl]">
                DESIGN • CODE • CREATIVITY
              </span>
            </div>
          </div>

          {/* SCROLL */}

          <div className="absolute bottom-7 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-3 sm:flex">
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-gray-600">
              Scroll to explore
            </span>

            <span className="h-8 w-px bg-gradient-to-b from-[#cfa44d] to-transparent" />
          </div>
        </div>
      </section>

      {/* =====================================================
          MARQUEE
      ====================================================== */}

      <section className="relative overflow-hidden border-y border-white/10 py-2">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#000000] to-transparent sm:w-32" />

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#000000] to-transparent sm:w-32" />

        <div className="overflow-hidden">
          <div className="creative-track">
            {marqueeWords.map((word) => (
              <div key={word} className="creative-item">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-gray-500 sm:text-sm sm:tracking-[0.35em]">
                  {word}
                </span>

                <span className="mx-5 text-[#cfa44d] sm:mx-8">•</span>
              </div>
            ))}

            {marqueeWords.map((word, index) => (
              <div
                key={`duplicate-${word}-${index}`}
                className="creative-item"
              >
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-gray-500 sm:text-sm sm:tracking-[0.35em]">
                  {word}
                </span>

                <span className="mx-5 text-[#bc9851] sm:mx-8">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
        className="border-b border-white/10 bg-[#06090E] px-5 py-16 sm:px-8 sm:py-20 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-12 md:gap-12">
          <div className="relative md:col-span-5">
            <div className="mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/50 bg-white/5 p-1.5 shadow-2xl">
              <img
                src="/Abt-ph.png"
                alt="Jishnu Dev"
                className="h-full w-full rounded-xl object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </div>

          <div className="space-y-5 md:col-span-7 md:space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#bc9851]">
              01 / ABOUT ME
            </span>

            <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl md:text-4xl">
              Bridging <span className="text-[#bc9851]">Design</span> and
              Software Architecture.
            </h2>

            <p className="text-sm leading-7 text-gray-300 sm:text-base">
              I am Jishnu Dev, a Software Developer and Visual Designer
              dedicated to crafting modern web applications, progressive web
              apps and performant user interfaces.
            </p>

            <p className="text-xs leading-6 text-gray-400 sm:text-sm">
              From conceptual wireframing in Figma to engineering responsive
              React and Next.js systems, my approach combines clean code
              structure with sleek visual design.
            </p>

            <div className="grid grid-cols-1 gap-5 border-t border-white/10 pt-5 font-mono text-xs sm:grid-cols-3 sm:gap-4">
              <div>
                <span className="block text-[10px] uppercase text-gray-500">
                  Location
                </span>

                <span className="text-gray-200">Kerala, India</span>
              </div>

              <div>
                <span className="block text-[10px] uppercase text-gray-500">
                  Specialization
                </span>

                <span className="text-gray-200">Web Development</span>
              </div>

              <div>
                <span className="block text-[10px] uppercase text-gray-500">
                  Availability
                </span>

                <span className="text-[#bc9851]">Open for Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projects"
        className="border-b border-white/10 bg-[#04070B] px-5 py-16 sm:px-8 sm:py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl space-y-10 sm:space-y-12 md:space-y-16">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#bc9851]">
                02 / PORTFOLIO
              </span>

              <h2 className="mt-1 text-2xl font-black uppercase sm:text-3xl md:text-4xl">
                Selected <span className="text-[#bc9851]">Works</span>
              </h2>
            </div>

            <p className="font-mono text-[10px] text-gray-500 sm:text-xs">
              A curation of web platforms and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
            {projects.map((work) => (
              <div
                key={work.num}
                className="
                  group
                  flex
                  flex-col
                  justify-between
                  space-y-6
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-5
                  transition-all
                  duration-300
                  hover:border-[#bc9851]/50
                  sm:p-7
                  md:p-8
                "
              >
                <div className="space-y-4">
                  <div className="flex flex-col gap-2 font-mono text-xs sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-bold [#bc9851]">
                      {work.num}
                    </span>

                    <span className="uppercase tracking-wider text-gray-400">
                      {work.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold transition-colors group-hover:text-[#bc9851] sm:text-2xl">
                    {work.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
                    {work.desc}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {work.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 font-mono text-[10px] text-gray-300 sm:text-[11px]"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#bc9851]" />

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 border-t border-white/5 pt-5 pt-6">
                  {work.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-gray-300 sm:text-[11px]"
                    >
                      #{technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        id="services"
        className="border-b border-white/10 bg-[#06090E] px-5 py-16 sm:px-8 sm:py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl space-y-10 sm:space-y-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#bc9851]">
              03 / WHAT I DO
            </span>

            <h2 className="mt-1 text-2xl font-black uppercase sm:text-3xl">
              Services &amp; Process
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.num}
                className="
                  space-y-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-5
                  transition-all
                  hover:border-[#bc9851]/50
                  sm:p-6
                "
              >
                <span className="font-mono font-bold text-[#bc9851]">
                  {service.num}
                </span>

                <h3 className="text-lg font-bold">{service.title}</h3>

                <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ====================================================== */}

      <section
        id="skills"
        className="border-b border-white/10 bg-[#04070B] px-5 py-16 sm:px-8 sm:py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl space-y-10 sm:space-y-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#bc9851]">
              04 / COMPETENCIES
            </span>

            <h2 className="mt-1 text-2xl font-black uppercase sm:text-3xl">
              Tech Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"
              >
                <h3 className="mb-3 font-mono font-bold uppercase text-[#bc9851]">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-gray-300 sm:text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact"
        className="bg-[#06090E] px-5 py-16 sm:px-8 sm:py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl space-y-10 sm:space-y-12">
          <div className="space-y-2 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[#bc9851]">
              05 / GET IN TOUCH
            </span>

            <h2 className="text-2xl font-black uppercase sm:text-4xl md:text-5xl">
              Let's Connect
            </h2>

            <p className="mx-auto max-w-md text-xs leading-6 text-gray-300 sm:text-sm">
              Open for freelance opportunities, full-stack projects and
              creative engineering collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="space-y-2 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center transition-all hover:border-[#bc9851]/40 sm:p-6">
              <span className="block font-mono text-xs uppercase text-gray-300">
                Direct Email
              </span>

              <p className="select-all break-all font-mono text-xs font-semibold text-[#bc9851] sm:text-sm">
                jishnudevna@gmail.com
              </p>
            </div>

            <div className="space-y-2 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center transition-all hover:border-[#bc9851]/40 sm:p-6">
              <span className="block font-mono text-xs uppercase text-gray-300">
                Location
              </span>

              <p className="font-mono text-sm font-semibold text-white">
                Kerala, India
              </p>
            </div>

            <div className="space-y-2 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center transition-all hover:border-[#bc9851]/40 sm:p-6">
              <span className="block font-mono text-xs uppercase text-gray-300">
                Current Status
              </span>

              <div className="flex items-center justify-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#bc9851]" />

                <p className="font-mono text-xs font-semibold text-[#bc9851] sm:text-sm">
                  Available for Projects
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-2xl border-t border-white/5 pt-8">
            <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-gray-400">
              Connect Across Social Media
            </p>

            <div className="grid grid-cols-4 gap-3 sm:grid-cols-3 sm:gap-4">
              {[
                ["GitHub", "GH",],
                ["LinkedIn", "IN"],
                ["Instagram", "IG"]
              ].map(([name, icon,]) => (
                <a
                  key={name}
                  href="https://www.instagram.com/jish_dev?igsh=MW9zMGE1NDVuazBk"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-3
                    text-[#bc9851]
                    transition-all
                    duration-300
                    hover:border-[#bc9851]
                    hover:bg-[#bc9851]/10
                    hover:text-white
                    sm:p-4
                  "
                >
                  <span className="font-mono text-[10px] sm:text-xs">
                    {icon}
                  </span>

                  <span className="font-mono text-[10px] sm:text-xs">
                    {name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-white/5 px-5 py-6 text-center font-mono text-[10px] text-gray-400 sm:px-8 sm:text-[11px]">
        <p>© {new Date().getFullYear()} Jishnu Dev. All Rights Reserved.</p>
      </footer>

      {/* =====================================================
          STYLES
      ====================================================== */}

      <style jsx>{`
        /* ============================================================
           HERO TEXT ANIMATION
        ============================================================ */

        .hero-text {
          opacity: 0;
          transform: translateY(28px);
        }

        .hero-text-loaded {
          animation: heroTextIn 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes heroTextIn {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ============================================================
           MARQUEE
        ============================================================ */

        .creative-track {
          display: flex;
          width: max-content;
          align-items: center;
          animation: creativeScroll 28s linear infinite;
          will-change: transform;
        }

        .creative-item {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          white-space: nowrap;
        }

        .creative-item span:first-child {
          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .creative-item:hover span:first-child {
          color: rgb(52, 211, 153);
          transform: translateY(-2px);
        }

        .creative-track:hover {
          animation-play-state: paused;
        }

        @keyframes creativeScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .creative-track {
            animation-duration: 22s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-text {
            opacity: 1;
            transform: none;
            animation: none;
          }

          .creative-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}