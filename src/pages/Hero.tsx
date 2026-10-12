"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [pageLoaded, setPageLoaded] = useState(false);

  // AUTO SCROLL TO TOP ON PAGE LOAD

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

  const socialLinks = [

    {

      name: "Instagram",

      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/instagram.svg",

      href: "https\://www.instagram.com/jish_dev",

    },

    {

      name: "GitHub",

      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",

      href: "https\://github.com/Jish-dev",

    },

    {

      name: "LinkedIn",

      icon: "https://cdn.jsdelivr.net/npm/social-media-icons@0.3.1/icons/linkedin.svg",

      href: "https\://www.linkedin.com/in/jishnu-dev-43882028b",

    },

  ];

  const projects = [

    {

      num: "01",

      title: "OpenWallet PWA",

      category: "Progressive Web Application",

      image: "/openwallet.png",

      desc: "An offline-first personal finance tracking application featuring local persistence, interactive visualizers and a clean light interface.",

      tech: ["HTML", "CSS", "JavaScript", "Local Storage"],

    },

    {

      num: "02",

      title: "DriveX",

      category: "Car Rental Platform",
      image: "/Drivex.png",
      desc: "A commercial platform and brand website concept for a modern car rental and mobility business.",

      tech: ["HTML", "CSS", "JavaScript", "Design"],

    },

  ];

  const services = [

    {

      num: "01",

      title: "Web Engineering",

      desc: "Building fast, modern and responsive web interfaces and applications using clean code architecture.",

    },

    {

      num: "02",

      title: "Visual Design",

      desc: "Designing clear interfaces, wireframes, prototypes and visual systems with attention to usability.",

    },

    {

      num: "03",

      title: "Digital Solutions",

      desc: "Creating practical digital experiences for businesses, products and personal brands.",

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

    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 font-sans text-slate-900 antialiased selection:bg-[#bc9851] selection:text-white">

      {/* =====================================================

          HERO

      ====================================================== */}

      <section
        id="home"
        className="relative min-h-[720px] w-full overflow-hidden bg-[#faf9f6] text-[#17202d] sm:min-h-screen"
      >
        {/* Soft editorial background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,rgba(194,157,95,0.10),transparent_42%)]" />
          <div className="absolute right-[50px] top-24 h-[420px] w-[420px] rounded-full bg-[#eadfc9]/70 blur-[8px] sm:h-[700px] sm:w-[700px]" />
          <div className="absolute right-[12%] top-[22%] h-[390px] w-[390px] rounded-full border border-[#bd914a]/70 sm:h-[520px] sm:w-[520px]" />
          <div className="absolute right-[10%] top-[25%] h-[390px] w-[390px] rounded-full border border-[#bd914a]/25 sm:h-[470px] sm:w-[470px]" />

          <div className="absolute bottom-0 right-0 h-44 w-64 bg-[radial-gradient(ellipse,rgba(109,119,74,0.18),transparent_68%)] blur-2xl" />
        </div>

        {/* Desktop portrait */}
        <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
          <img
            src="/hero.png"
            alt="Jishnu Dev"
            className="absolute right-[1%] top-[58%] h-[68vh] max-h-[690px] w-auto max-w-none -translate-y-1/2 object-contain object-bottom opacity-100 xl:right-[2%] xl:h-[74vh] 2xl:right-[-2%] 2xl:h-[85vh]"
          />

          <div className="absolute bottom-0 right-0 z-20 h-36 w-[62%] bg-gradient-to-t from-[#faf9f6] via-[#faf9f6]/70 to-transparent" />

          <div className="absolute bottom-0 right-0 z-20 h-full w-[10%] bg-gradient-to-l from-[#faf9f6]/45 to-transparent" />
        </div>

        {/* Mobile portrait */}
        <div className="pointer-events-none absolute inset-0 z-10 lg:hidden">
          <img
            src="/hero.png"
            alt=""
            className="absolute right-[-22%] top-[32%] h-[45vh] w-auto max-w-none object-contain opacity-20 sm:right-[-8%] sm:top-[36%] sm:h-[54vh] sm:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/95 to-[#faf9f6]/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#faf9f6] to-transparent" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-30 mx-auto flex min-h-[720px] w-full max-w-[1600px] items-center px-5 py-20 sm:min-h-screen sm:px-8 md:px-10 lg:px-14 xl:px-20">
          <div
            className={`relative z-30 w-full max-w-[700px] hero-text ${pageLoaded ? "hero-text-loaded" : ""
              }`}
          >
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-8 bg-[#b68b45] sm:w-12" />
              <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#9c7438] sm:text-[10px] sm:tracking-[0.45em]">
                Creative Developer
              </span>
            </div>

            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-[#273244] sm:text-xs sm:tracking-[0.4em]">
              HELLO, I'M A
            </p>

            <div className="relative">
              <div className="relative mt-3 inline-block sm:mt-4">
                <span className="block whitespace-nowrap font-['Manrope'] text-[clamp(3rem,12vw,8rem)] font-extrabold leading-[0.9] tracking-[-0.075em]">
                  <span className=" font-bold italic text-[#b58b48]">
                    'DEV'
                  </span>
                  <span className="text-[#17202d]">eloper.</span>
                </span>

                <h2 className="mt-1 whitespace-nowrap font-['Manrope'] text-[clamp(2.7rem,11vw,9rem)] font-extrabold leading-[0.85] tracking-[-0.07em] text-[#17202d] sm:mt-0">
                  & Designer.
                </h2>
              </div>
            </div>
          

            <p className="mt-8 max-w-[520px] text-xs leading-6 text-[#737f91] sm:mt-10 sm:text-sm sm:leading-7 md:mt-12 md:text-base">
              Turning ideas into real digital experiences through{" "}
              <span className="font-medium text-[#17202d]">design</span>,{" "}
              <span className="font-medium text-[#17202d]">code</span> and{" "}
              <span className="font-medium text-[#a67d3d]">creativity.</span>
            </p>

            <div className="mt-7 flex flex-col items-stretch gap-3 xs:flex-row xs:items-center sm:mt-9 sm:flex-row sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#c4a064] to-[#ad8240] px-6 py-3 text-xs font-semibold text-white shadow-[0_8px_22px_rgba(173,130,64,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#c4a064]/25 sm:px-7 sm:py-3.5 sm:text-sm"
              >
                Selected Works
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-[#b99150] bg-white/60 px-6 py-3 text-xs font-medium text-[#273244] transition-all duration-300 hover:bg-[#f1e8d8] sm:px-7 sm:py-3.5 sm:text-sm"
              >
                Let's Talk
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-8 flex items-center gap-2 sm:mt-12 sm:gap-3">
              {socialLinks.map(({ icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d6d9dd] bg-white/75 text-[#273244] transition-all duration-300 hover:border-[#b99150] hover:bg-[#f4ead7] hover:text-[#9c7438] sm:h-10 sm:w-10"
                >
                  <img
                    src={icon}
                    alt={`${name} icon`}
                    className="h- w-5 object-contain"
                  />
                </a>
              ))}
              <div className="ml-2 h-px w-10 bg-[#d7dbe0] sm:ml-3 sm:w-16" />
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#7c8797] sm:text-[9px] sm:tracking-[0.25em]">
                Available
              </span>
            </div>
          </div>

          {/* SIDE META */}
          <div className="absolute right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:right-8">
            <div className="flex flex-col items-end gap-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#7d8795]">
                  DIGITAL
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#b99150]" />
              </div>
              <div className="h-20 w-px bg-gradient-to-b from-[#b99150]/70 to-transparent xl:h-24" />
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#7d8795] [writing-mode:vertical-rl]">
                DESIGN • CODE • CREATIVITY
              </span>
            </div>
          </div>

          {/* SCROLL INDICATOR */}
          <div className="absolute bottom-7 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-3 sm:flex">
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#8b929c]">
              Scroll to explore
            </span>
            <span className="h-8 w-px bg-gradient-to-b from-[#b99150] to-transparent" />
          </div>

          {/* AVAILABILITY CARD */}
          <a
            href="#contact"
            className="absolute bottom-5 right-[5%] z-40 hidden items-center gap-4 rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-[0_12px_40px_rgba(38,43,52,0.12)] backdrop-blur-md transition-transform hover:-translate-y-1 lg:flex xl:right-[5%]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b99150] text-lg text-white">{"</>"}</span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-[#263142]">Available</span>
              <span className="mt-0.5 text-xs text-[#8992a0]">For projects & collaborations</span>
            </span>
            <span className="ml-5 text-xl text-[#b99150]">→</span>
          </a>


        </div>
      </section>

      {/* =====================================================

          MARQUEE

      ====================================================== */}

      <section className="relative overflow-hidden border-y border-slate-200 bg-white py-3">

        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />

        <div className="overflow-hidden">

          <div className="creative-track">

            {[...marqueeWords, ...marqueeWords].map((word, index) => (

              <div key={`${word}-${index}`} className="creative-item">

                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-slate-500 sm:text-sm sm:tracking-[0.35em]">

                  {word}

                </span>

                <span className="mx-5 text-[#bc9851] sm:mx-8">•</span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================

          ABOUT — UPDATED CONTENT

      ====================================================== */}

      <section

        id="about"

        className="border-b border-slate-200 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 md:py-32"

      >

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 sm:gap-16 md:grid-cols-12 md:gap-16">

          <div className="relative md:col-span-5">

            <div className="mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/80">

              <img

                src="/Abt-ph.png"

                alt="Jishnu Dev"

                className="h-full w-full rounded-2xl object-cover grayscale transition-all duration-500 hover:grayscale-0"

              />

            </div>

          </div>

          <div className="space-y-6 md:col-span-7 md:space-y-8">

            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#bc9851]">

              01 / ABOUT ME

            </div>

            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">

              More Than Just{" "}

              <span className="text-[#bc9851]">Code.</span>

            </h2>

            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">

              I'm Jishnu Dev, a developer who enjoys understanding how

              things work, solving problems, and turning complex

              requirements into practical solutions. I value thoughtful

              decisions, structured thinking, and building software with

              a clear purpose.

            </p>

            <p className="text-sm leading-relaxed text-slate-500">

              My interests extend beyond writing code. I explore

              application architecture, data management, performance,

              and the decisions that make software reliable and

              maintainable. I'm continuously learning, experimenting

              with new technologies, and improving how I approach

              each project.

            </p>

            <div className="grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 font-mono text-xs sm:grid-cols-3 sm:gap-4">

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

                <span className="mb-1 block text-[10px] uppercase tracking-wider text-slate-400">

                  Location

                </span>

                <span className="font-bold text-slate-900">

                  Kerala, India

                </span>

              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

                <span className="mb-1 block text-[10px] uppercase tracking-wider text-slate-400">

                  Core Interest

                </span>

                <span className="font-bold text-slate-900">

                  Software Engineering

                </span>

              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

                <span className="mb-1 block text-[10px] uppercase tracking-wider text-slate-400">

                  Availability

                </span>

                <span className="flex items-center gap-1.5 font-bold text-green-600">

                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-600" />

                  Open for Projects

                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================

          SERVICES

      ====================================================== */}

      <section

        id="services"

        className="border-b border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24 md:py-32"

      >

        <div className="mx-auto max-w-7xl space-y-12 sm:space-y-16">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#bc9851]">

                02 / WHAT I DO

              </span>

              <h2 className="mt-2 text-3xl font-black uppercase text-slate-900 sm:text-4xl md:text-5xl">

                Services & Process

              </h2>

            </div>

            <p className="max-w-sm text-sm text-slate-600">

              Comprehensive digital services engineered for performance,

              clarity, and real-world impact.

            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

            {services.map((service) => (

              <div

                key={service.num}

                className="group space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:border-[#bc9851]/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"

              >

                <div className="flex items-center justify-between">

                  <span className="font-mono text-lg font-bold text-[#bc9851]">

                    {service.num}

                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-xs text-[#bc9851] transition-colors group-hover:bg-[#bc9851] group-hover:text-white">

                    ↗

                  </span>

                </div>

                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-[#bc9851]">

                  {service.title}

                </h3>

                <p className="text-sm leading-relaxed text-slate-600">

                  {service.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section
        id="projects"
        className="border-b border-slate-200 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl space-y-12 sm:space-y-16">

          {/* Section Header */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#bc9851]">
                03 / PORTFOLIO
              </span>

              <h2 className="mt-2 text-3xl font-black uppercase text-slate-900 sm:text-4xl md:text-5xl">
                Selected <span className="text-[#bc9851]">Works</span>
              </h2>
            </div>
            <a href="/projects" className="hover:text-[#bc9851]" >Explore All Works →</a>
          </div>

          {/* Vertical Project List */}
          <div className="border-t border-slate-200">
            {projects.map((work) => (
              <article
                key={work.num}
                className="group grid grid-cols-1 gap-6 border-b border-slate-200 py-8 transition-colors duration-300 hover:bg-white/60 sm:py-10 md:grid-cols-12 md:gap-8 md:py-12"
              >
                {/* Project Number */}
                <div className="flex items-start justify-between md:col-span-2 md:flex-col md:justify-start md:gap-4">
                  <span className="text-sm font-bold text-[#bc9851]">
                    {work.num}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-600 md:text-center">
                    {work.category}
                  </span>
                </div>

                {/* Project Information */}
                <div className="md:col-span-7">
                  <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#bc9851] sm:text-3xl">
                    {work.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                    {work.desc}
                  </p>

                  <div className="flex flex-col gap-5 md:col-span-3 py-5">
                    <div className="flex flex-wrap gap-2 md:">
                      {work.tech.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-bold text-xs text-slate-700 transition-colors duration-300 group-hover:border-[#bc9851]/30"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Image */}
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white md:col-span-3">
                  <img
                    src={work.image}
                    alt={`${work.title} preview`}
                    className="h-32 w-full object-cover transition-transform duration-500  sm:h-40"
                    loading="lazy"
                  />
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>


      <section

        id="skills"

        className="border-b border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24 md:py-32"

      >

        <div className="mx-auto max-w-7xl space-y-12">

          <div>

            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#bc9851]">

              04 / COMPETENCIES

            </span>

            <h2 className="mt-2 text-3xl font-black uppercase text-slate-900 sm:text-4xl md:text-5xl">

              Tech Matrix

            </h2>

          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

            {skillGroups.map((group) => (

              <div

                key={group.category}

                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all hover:border-[#bc9851]/40"

              >

                <h3 className="mb-4 font-mono text-sm font-bold uppercase tracking-wider text-[#bc9851]">

                  {group.category}

                </h3>

                <div className="flex flex-wrap gap-2">

                  {group.tools.map((tool) => (

                    <span

                      key={tool}

                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-slate-700 shadow-sm"

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



      <section

        id="contact"

        className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 md:py-32"

      >

        <div className="mx-auto max-w-7xl space-y-12">

          <div className="space-y-3 text-center">

            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#bc9851]">

              05 / GET IN TOUCH

            </span>

            <h2 className="text-3xl font-black uppercase text-slate-900 sm:text-4xl md:text-5xl">

              Let's Connect

            </h2>

            <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600">

              Open for freelance opportunities, full-stack projects and

              creative engineering collaborations.

            </p>

          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">

            <a

              href="mailto:jishnudevna@gmail.com"

              className="space-y-2 rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all hover:border-[#bc9851]/40"

            >

              <span className="block font-mono text-xs uppercase tracking-wider text-slate-400">

                Direct Email

              </span>

              <p className="break-all font-mono text-sm font-bold text-[#bc9851]">

                jishnudevna@gmail.com

              </p>

            </a>

            <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all hover:border-[#bc9851]/40">

              <span className="block font-mono text-xs uppercase tracking-wider text-slate-400">

                Location

              </span>

              <p className="font-mono text-sm font-bold text-slate-900">

                Kerala, India

              </p>

            </div>

            <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all hover:border-[#bc9851]/40">

              <span className="block font-mono text-xs uppercase tracking-wider text-slate-400">

                Current Status

              </span>

              <div className="flex items-center justify-center gap-2">

                <span className="h-2 w-2 animate-pulse rounded-full bg-[#bc9851]" />

                <p className="font-mono text-sm font-bold text-[#bc9851]">

                  Available for Projects

                </p>

              </div>

            </div>

          </div>

          <div className="mx-auto max-w-2xl border-t border-slate-200 pt-10">

            <p className="mb-6 text-center font-mono text-xs font-semibold uppercase tracking-widest text-slate-500">

              Connect Across Social Media

            </p>

            <div className="grid grid-cols-3 gap-4">

              {socialLinks.map(({ name, icon, href }) => (

                <a

                  key={name}

                  href={href}

                  target="_blank"

                  rel="noopener noreferrer"

                  aria-label={name}

                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white p-4 font-mono text-xs font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-[#bc9851] hover:bg-amber-50 hover:text-[#bc9851]"

                >

                  <img
                    src={icon}
                    alt={`${name} icon`}
                    className="h- w-5 object-contain"
                  />

                  <span>{name}</span>

                </a>

              ))}

            </div>

          </div>

        </div>

      </section>


      <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center font-mono text-xs text-slate-500 sm:px-8">

        <p>

          © {new Date().getFullYear()} Jishnu Dev. All Rights Reserved.

        </p>

      </footer>

      {/* =====================================================

          ANIMATIONS

      ====================================================== */}

      <style jsx>{`

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

          color: rgb(180, 83, 9);

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
