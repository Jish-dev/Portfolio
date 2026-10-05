"use client";

import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [showArtworks, setShowArtworks] = useState(false);

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
  // SKILLS DATA
  // ============================================================

  const frontendSkills = [
    {
      name: "HTML",
      level: "Advanced",
      percentage: 95,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      description:
        "Semantic, accessible and well-structured markup for modern web experiences.",
    },
    {
      name: "CSS",
      level: "Advanced",
      percentage: 90,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      description:
        "Responsive layouts, animations, visual styling and modern CSS techniques.",
    },
    {
      name: "JavaScript",
      level: "Advanced",
      percentage: 85,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      description:
        "Interactive interfaces, application logic and dynamic web functionality.",
    },
    {
      name: "React",
      level: "Intermediate",
      percentage: 80,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description:
        "Reusable components, state management, routing and scalable application structure.",
    },
    {
      name: "TypeScript",
      level: "Intermediate",
      percentage: 85,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      description:
        "Type-safe and maintainable applications with structured and predictable code.",
    },
    {
      name: "Tailwind CSS",
      level: "Intermediate",
      percentage: 80,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      description:
        "Building consistent, responsive and modern interfaces with utility-first styling.",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      level: "Intermediate",
      percentage: 85,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description:
        "Server-side applications and backend functionality using JavaScript.",
    },
    {
      name: "Express.js",
      level: "Intermediate",
      percentage: 80,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      description:
        "REST APIs, routing, middleware and scalable backend application architecture.",
    },
    {
      name: "MongoDB",
      level: "Intermediate",
      percentage: 75,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      description:
        "Working with collections, documents and application data using NoSQL.",
    },
    {
      name: "REST API",
      level: "Intermediate",
      percentage: 75,
      description:
        "Designing and integrating APIs for reliable frontend and backend communication.",
    },
  ];

  const technologies = [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Wordpress",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Canva",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    },
    {
      name: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ];

  const designSkills = [
    "Visual Design",
    "Interface Design",
    "Responsive Design",
    "Wireframing",
    "Typography",
    "Layout Systems",
    "Color Systems",
    "Creative Direction",
  ];

  // ============================================================
  // ARTWORKS
  // ============================================================

  const artworks = [
    {
      number: "01",
      title: "Sree Krishna",
      category: "Drawing",
      image: "/Artworks/sk.jpeg",
    },
    {
      number: "02",
      title: "Character Study",
      category: "Pencil Portrait",
      image: "/Artworks/vj.draw.jpg",
    },
    {
      number: "03",
      title: "Portrait Illustation ",
      category: "Illustration",
      image: "/Artworks/lege.jpg",
    },
    {
      number: "04",
      title: "Portrait",
      category: "Penicl drawing",
      image: "/Artworks/srk.jpg",
    },
    {
      number: "05",
      title: "Dancer",
      category: "Drawing",
      image: "/Artworks/dance.jpeg",
    },
    {
      number: "06",
      title: "Culture",
      category: "Pencil art",
      image: "/Artworks/arts.jpeg",
    },
  ];

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
  }, [showArtworks]);

  // ============================================================
  // SHOW ARTWORKS
  // ============================================================

  const handleShowArtworks = () => {
    setShowArtworks((prev) => !prev);

    setTimeout(() => {
      const artworkSection = document.getElementById("artworks");

      if (!showArtworks && artworkSection) {
        artworkSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden bg-[#06090E] px-5 py-28 text-white sm:px-8 md:py-36 lg:px-12 xl:px-16"
    >
      {/* ========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute">
        <div className="absolute left-[5%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#bc9851]/[0.045] blur-[150px]" />

        <div className="absolute bottom-[15%] right-0 h-[500px] w-[500px] rounded-full bg-[#bc9851]/[0.025] blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.035]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.035]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ========================================================
            HEADER
        ========================================================= */}

        <div
          data-reveal
          className="reveal mb-20 grid grid-cols-1 gap-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-8">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#b89b63]" />

              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#b89b63]">
                Skills / Expertise
              </span>
            </div>

            <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-white md:text-7xl lg:text-8xl">
              Designing with
              <br />
              <span className="text-[#bc9851]">purpose.</span>
            </h2>
          </div>

          <div className="flex items-end lg:col-span-4">
            <div>
              <div className="mb-5 text-xs uppercase tracking-[0.3em] text-gray-500">
                02 / Expertise
              </div>

              <p className="max-w-md text-base leading-7 text-gray-400">
                A practical combination of full-stack development, modern
                technologies and visual design focused on building reliable
                digital products.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            TECHNOLOGY AUTO SCROLL
        ========================================================= */}

        <div data-reveal className="reveal mb-28">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#bc9851]">
                Technology Stack
              </span>

              <h3 className="mt-4 text-3xl font-bold tracking-[-0.04em] md:text-4xl">
                Tools I Work With
              </h3>
            </div>

            <span className="hidden text-xs uppercase tracking-[0.25em] text-gray-500 md:block">
              Full Stack / Design
            </span>
          </div>

          <div className="relative overflow-hidden border-y border-white/10 py-7">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#06090E] to-transparent" />

            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#06090E] to-transparent" />

            <div className="tech-marquee flex w-max">
              {[...technologies, ...technologies].map(
                (technology, index) => (
                  <div
                    key={`${technology.name}-${index}`}
                    className="group mx-3 flex min-w-[150px] items-center gap-4 border border-white/[0.08] bg-white/[0.2] px-5 py-2 transition duration-300 hover:border-[#bc9851]/50 hover:bg-white/80"
                  >
                    <div className="flex h-9 w-9 items-center justify-center">
                      <img
                        src={technology.logo}
                        alt={`${technology.name} logo`}
                        className="h-8 w-8 object-contain opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                    </div>

                    <span className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.08em] text-gray-200 transition duration-300 group-hover:text-black">
                      {technology.name}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* ========================================================
            OVERVIEW
        ========================================================= */}

        <div
          data-reveal
          className="reveal mb-28 grid grid-cols-1 overflow-hidden border border-white/10 bg-white/[0.025] md:grid-cols-3"
        >
          {/* Frontend */}

          <div className="group border-b border-white/10 p-7 transition duration-500 hover:bg-[#bc9851]/[0.035] md:border-b-0 md:border-r">
            <div className="flex items-start justify-between">
              <span className="text-4xl font-black tracking-tight">01</span>

              <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Frontend
              </span>
            </div>

            <h3 className="mt-10 text-2xl font-bold">
              Interface Development
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Responsive and interactive interfaces built with reusable
              components and structured frontend architecture.
            </p>
          </div>

          {/* Backend */}

          <div className="group border-b border-white/10 p-7 transition duration-500 hover:bg-[#bc9851]/[0.035] md:border-b-0 md:border-r">
            <div className="flex items-start justify-between">
              <span className="text-4xl font-black tracking-tight text-gray-300">
                02
              </span>

              <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Backend
              </span>
            </div>

            <h3 className="mt-10 text-2xl font-bold">
              Application Systems
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              APIs, databases and server-side functionality that power modern
              web applications.
            </p>
          </div>

          {/* Design */}

          <div className="group p-7 transition duration-500 hover:bg-[#bc9851]/[0.035]">
            <div className="flex items-start justify-between">
              <span className="text-4xl font-black tracking-tight text-gray-300">
                03
              </span>

              <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Design
              </span>
            </div>

            <h3 className="mt-10 text-2xl font-bold">Visual Direction</h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Visual systems focused on hierarchy, usability, consistency and
              digital presentation.
            </p>
          </div>
        </div>

        {/* ========================================================
            FRONTEND
        ========================================================= */}

        <div data-reveal className="reveal mb-32">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#bc9851]">
                01 / Frontend Engineering
              </span>

              <h3 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-5xl">
                Interface Development
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-400">
              Developing responsive interfaces with reusable components,
              structured code and modern frontend technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
            {frontendSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                number={index + 1}
              />
            ))}
          </div>
        </div>

        {/* ========================================================
            BACKEND
        ========================================================= */}

        <div data-reveal className="reveal mb-32">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#bc9851]">
                02 / Backend Engineering
              </span>

              <h3 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-5xl">
                Application Development
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-400">
              Building APIs, database-driven applications and server-side
              systems that support scalable digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {backendSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                number={index + 1}
              />
            ))}
          </div>
        </div>

        {/* ========================================================
            DEVELOPMENT STACK
        ========================================================= */}

        <div data-reveal className="reveal mb-32">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#bc9851]">
              03 / Architecture
            </span>

            <h3 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-5xl">
              Development Architecture
            </h3>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">
              A full-stack workflow covering interface development, backend
              services, authentication, APIs and data management.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            <StackCard
              number="01"
              title="Frontend"
              items={[
                ["React", "Interface"],
                ["TypeScript", "Logic"],
                ["Tailwind CSS", "Styling"],
                ["JavaScript", "Interaction"],
              ]}
            />

            <StackCard
              number="02"
              title="Backend"
              items={[
                ["Node.js", "Runtime"],
                ["Express.js", "API"],
                ["REST API", "Services"],
                ["JWT", "Authentication"],
              ]}
            />

            <StackCard
              number="03"
              title="Data Layer"
              items={[
                ["MongoDB", "Database"],
                ["Mongoose", "ODM"],
                ["Local Storage", "Client"],
                ["CRUD", "Operations"],
              ]}
            />
          </div>
        </div>

        {/* ========================================================
            DESIGN
        ========================================================= */}

        <div data-reveal className="reveal mb-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#bc9851]">
                04 / Visual Design
              </span>

              <h3 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-5xl">
                Design &
                <br />
                Visual Systems
              </h3>

              <p className="mt-7 max-w-lg text-base leading-8 text-gray-400">
                Combining development with visual thinking to create digital
                products that communicate clearly and maintain a consistent
                visual identity.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-10 bg-[#bc9851]" />

                <span className="text-xs uppercase tracking-[0.22em] text-gray-500">
                  Visual Thinking
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
                {designSkills.map((skill, index) => (
                  <div
                    key={skill}
                    className="group min-h-[150px] bg-[#080C12] p-5 transition duration-500 hover:bg-[#bc9851]"
                  >
                    <span className="text-[12px] text-gray-500 transition group-hover:text-black/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-10 text-sm font-semibold text-gray-100 transition group-hover:text-black">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            CAPABILITIES
        ========================================================= */}

        <div data-reveal className="reveal mb-32">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#bc9851]">
              05 / Capabilities
            </span>

            <h3 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-5xl">
              Digital Solutions
            </h3>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">
              From responsive websites to complete web applications, I focus
              on building practical digital solutions from concept to
              implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Websites",
                text: "Responsive websites focused on structure, performance and visual quality.",
              },
              {
                number: "02",
                title: "Web Applications",
                text: "Interactive applications with frontend, backend and database integration.",
              },
              {
                number: "03",
                title: "API Systems",
                text: "REST APIs connecting interfaces, services and databases through structured architecture.",
              },
              {
                number: "04",
                title: "Digital Interfaces",
                text: "Clean interfaces designed around usability, hierarchy and consistent visual systems.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#bc9851]/30"
              >
                <span className="text-sm text-[#bc9851]">
                  {item.number}
                </span>

                <h4 className="mt-12 text-xl font-bold">{item.title}</h4>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {item.text}
                </p>

                <div className="mt-8 h-px w-8 bg-white/20 transition-all duration-500 group-hover:w-full group-hover:bg-[#bc9851]" />
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            ARTWORK HIGHLIGHT BUTTON
        ========================================================= */}

        <div
          data-reveal
          className="reveal mb-32 border-y border-white/10 py-14"
        >
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="h-px w-10 bg-[#bc9851]" />

                <span className="text-xs uppercase tracking-[0.3em] text-[#bc9851]">
                  Beyond Development
                </span>
              </div>

              <h3 className="text-3xl font-bold tracking-[-0.04em] md:text-5xl">
                Art & Visual Work
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500">
                A selection of personal artwork, sketches and visual studies
                that influence the way I approach digital design.
              </p>
            </div>

            <button
              type="button"
              onClick={handleShowArtworks}
              className="group relative inline-flex shrink-0 items-center gap-5 overflow-hidden rounded-full border border-[#bc9851]/50 bg-[#bc9851] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black transition duration-500 hover:bg-[#c9a963]"
            >
              <span>
                {showArtworks ? "HIDE ARTWORKS" : "Explore ARTWORKS"}
              </span>
            </button>
          </div>
        </div>

        {/* ========================================================
            ARTWORKS
        ======================================================== */}

        {showArtworks && (
          <div
            id="artworks"
            data-reveal
            className="reveal is-visible mb-32 scroll-mt-24"
          >
            {/* ========================================================
                ARTWORK HEADER
            ======================================================== */}

            <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#bc9851]">
                  Selected Works
                </span>

                <h3 className="mt-4 text-4xl font-bold tracking-[-0.05em] md:text-6xl">
                  Art that shapes
                  <br />
                  <span className="text-[#bc9851]">
                    the way I design.
                  </span>
                </h3>
              </div>

              <div className="flex items-end lg:col-span-5">
                <p className="max-w-md text-sm leading-7 text-gray-400">
                  Personal drawings and visual explorations developed outside
                  of code. These works reflect my interest in composition,
                  proportion, detail and visual storytelling.
                </p>
              </div>
            </div>

            {/* ========================================================
                ARTWORK GRID
            ======================================================== */}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {artworks.map((artwork) => (
                <div
                  key={artwork.number}
                  className="group relative overflow-hidden border border-white/10 bg-[#080C12]"
                >
                  {/* Image Container */}

                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="absolute inset-0 h-full w-full object-cover grayscale-[20%] transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    />

                    {/* Dark Gradient */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

                    {/* Number */}

                    <span className="absolute left-5 top-5 z-10 text-xs font-medium tracking-[0.2em] text-white/60">
                      {artwork.number}
                    </span>

                    {/* Content */}

                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#bc9851]">
                        {artwork.category}
                      </span>

                      <h4 className="mt-2 text-xl font-bold tracking-tight text-white">
                        {artwork.title}
                      </h4>
                    </div>

                    {/* Bottom Accent */}

                    <div className="absolute bottom-0 left-0 z-20 h-[2px] w-0 bg-[#bc9851] transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              ))}
            </div>

            {/* ========================================================
                ARTWORK FOOTER
            ======================================================== */}

            <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
              <p className="text-xs uppercase tracking-[0.22em] text-gray-600">
                Personal Work / Drawing / Visual Exploration
              </p>

              <button
                type="button"
                onClick={handleShowArtworks}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 transition duration-300 hover:text-[#bc9851]"
              >
                Close Gallery
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            FINAL STATEMENT
        ========================================================= */}

        <div
          data-reveal
          className="reveal border-t border-white/10 pt-20"
        >
          <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                Development Philosophy
              </p>

              <h3 className="mt-6 max-w-4xl text-4xl font-black uppercase leading-[0.88] tracking-[-0.06em] sm:text-5xl md:text-6xl lg:text-7xl">
                Build with
                <span className="text-[#bc9851]"> purpose.</span>
                <br />
                Design with
                <span className="text-gray-500"> clarity.</span>
              </h3>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-5 rounded-4xl border border-[#bc9851]/40 bg-[#bc9851] px-7 py-4 text-sm font-bold text-black transition duration-300 hover:bg-[#c9a963]"
            >
              <span>WORK WITH ME</span>
            </a>
          </div>
        </div>
      </div>

      {/* ==========================================================
          ANIMATION STYLES
      =========================================================== */}

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 800ms ease,
            transform 800ms ease;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .tech-marquee {
          animation: techScroll 38s linear infinite;
        }

        .tech-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes techScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-marquee {
            animation: none;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}

/* ================================================================
   SKILL CARD
================================================================ */

function SkillCard({
  skill,
  number,
}: {
  skill: {
    name: string;
    level: string;
    percentage: number;
    description: string;
    logo?: string;
  };
  number: number;
}) {
  return (
    <div className="group relative bg-[#080C12] p-7 transition duration-500 hover:bg-[#0C1219] sm:p-8">
      {/* ============================================================
          TOP ROW
      ============================================================ */}

      <div className="flex items-start justify-between">
        {/* Number */}

        <span className="text-xs text-gray-700">
          {String(number).padStart(2, "0")}
        </span>

        {/* Logo */}

        {skill.logo && (
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] transition-all duration-500 group-hover:border-[#bc9851]/40 group-hover:bg-[#bc9851]/[0.08]">
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="h-7 w-7 object-contain opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
            />
          </div>
        )}
      </div>

      {/* ============================================================
          TITLE + LEVEL
      ============================================================ */}

      <div className="mt-8 flex items-center justify-between gap-4">
        <h4 className="text-2xl font-bold tracking-tight transition duration-300 group-hover:text-[#bc9851]">
          {skill.name}
        </h4>

        <span className="shrink-0 text-[10px] uppercase tracking-[0.18em] text-gray-600">
          {skill.level}
        </span>
      </div>

      {/* ============================================================
          DESCRIPTION
      ============================================================ */}

      <p className="mt-4 min-h-[72px] text-sm leading-7 text-gray-500">
        {skill.description}
      </p>

      {/* ============================================================
          PROFICIENCY
      ============================================================ */}

      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.2em] text-gray-700">
            Proficiency
          </span>

          <span className="text-xs font-medium text-gray-500">
            {skill.percentage}%
          </span>
        </div>

        <div className="h-[3px] w-full overflow-hidden bg-white/[0.08]">
          <div
            className="h-full bg-[#bc9851] transition-all duration-1000 group-hover:bg-[#c9a963]"
            style={{
              width: `${skill.percentage}%`,
            }}
          />
        </div>
      </div>

      {/* ============================================================
          HOVER ACCENT
      ============================================================ */}

      <div className="absolute bottom-0 left-0 h-px w-0 bg-[#bc9851] transition-all duration-700 group-hover:w-full" />
    </div>
  );
}

/* ================================================================
   STACK CARD
================================================================ */

function StackCard({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: [string, string][];
}) {
  return (
    <div className="group bg-[#080C12] p-7 transition duration-500 hover:bg-[#0C1219] sm:p-8">
      <div className="flex items-center justify-between">
        <span className="text-[#bc9851]">{number}</span>

        <span className="h-px w-10 bg-white/10 transition-all duration-500 group-hover:w-16 group-hover:bg-[#bc9851]" />
      </div>

      <h4 className="mt-8 text-2xl font-bold">{title}</h4>

      <div className="mt-8 space-y-0">
        {items.map(([name, type]) => (
          <div
            key={name}
            className="flex items-center justify-between border-b border-white/[0.06] py-4"
          >
            <span className="text-sm text-gray-300">{name}</span>

            <span className="text-[11px] uppercase tracking-[0.15em] text-gray-500">
              {type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}