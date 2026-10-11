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
      description: "Semantic, accessible and well-structured markup for modern web experiences.",
    },
    {
      name: "CSS",
      level: "Advanced",
      percentage: 90,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      description: "Responsive layouts, animations, visual styling and modern CSS techniques.",
    },
    {
      name: "JavaScript",
      level: "Advanced",
      percentage: 85,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      description: "Interactive interfaces, application logic and dynamic web functionality.",
    },
    {
      name: "React",
      level: "Intermediate",
      percentage: 80,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "Reusable components, state management, routing and scalable structure.",
    },
    {
      name: "TypeScript",
      level: "Intermediate",
      percentage: 85,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      description: "Type-safe and maintainable applications with predictable code.",
    },
    {
      name: "Tailwind CSS",
      level: "Intermediate",
      percentage: 80,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      description: "Building consistent, responsive interfaces with utility-first styling.",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      level: "Intermediate",
      percentage: 85,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description: "Server-side applications and backend functionality using JavaScript.",
    },
    {
      name: "Express.js",
      level: "Intermediate",
      percentage: 80,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      description: "REST APIs, routing, middleware and scalable backend architecture.",
    },
    {
      name: "MongoDB",
      level: "Intermediate",
      percentage: 75,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      description: "Working with collections, documents and application data using NoSQL.",
    },
    {
      name: "REST API",
      level: "Intermediate",
      percentage: 75,
      description: "Designing and integrating APIs for reliable frontend and backend communication.",
    },
  ];

  const technologies = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Wordpress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ];

  const designSkills = [
    {
      name: "Visual Design",
      image: "/visual.jpeg"
    },
    {
      name: "Interface Design",
      image: "/inter.jpeg"
    },
    {
      name: "Responsive Design",
      image: "/resp.jpeg"
    },
    {
      name: "Wireframing",
      image: "/wire.jpeg"
    },
    {
      name: "Typography",
      image: "/vsld.jpeg"
    },
    {
      name: "Layout Systems",
      image: "/layout.jpeg"
    },
    {
      name: "Color Systems",
      image: "/color.jpeg"
    },
    {
      name: "Creative Direction",
      image: "/vsld.jpeg"
    },
  ];

  // ============================================================
  // ARTWORKS
  // ============================================================
  const artworks = [
    { number: "01", title: "Sree Krishna", category: "Drawing", image: "/Artworks/sk.jpeg" },
    { number: "02", title: "Character Study", category: "Pencil Portrait", image: "/Artworks/vj.draw.jpg" },
    { number: "03", title: "Portrait Illustation", category: "Illustration", image: "/Artworks/lege.jpg" },
    { number: "04", title: "Portrait", category: "Penicl drawing", image: "/Artworks/srk.jpg" },
    { number: "05", title: "Dancer", category: "Drawing", image: "/Artworks/dance.jpeg" },
    { number: "06", title: "Culture", category: "Pencil art", image: "/Artworks/arts.jpeg" },
  ];


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
      { threshold: 0.08 }
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
      className="relative overflow-hidden bg-slate-50 px-5 py-24 text-slate-900 sm:px-8 md:py-32 lg:px-12 xl:px-16"
    >

      <div className="relative z-10 mx-auto max-w-[1200px]">

     
        <div data-reveal className="reveal mb-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-amber-700/50" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#bc9851]">
                Skills / Expertise
              </span>
            </div>

            <h2 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-7xl lg:text-7xl">
              Designing with <br />
              <span className="text-[#bc9851]">purpose.</span>
            </h2>
          </div>

          <div className="flex items-end lg:col-span-4">
            <div className="border-l-2 border-slate-200 pl-6">
              <p className="max-w-md text-base leading-relaxed text-slate-600">
                A practical combination of full-stack development, modern
                technologies, and visual design focused on building reliable
                digital products.
              </p>
            </div>
          </div>
        </div>

  
        <div data-reveal className="reveal mb-32">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#bc9851]">
                Technology Stack
              </span>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Tools I Work With
              </h3>
            </div>
          </div>

          <div className="relative overflow-hidden border-y border-slate-200 py-7 bg-white/50">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent" />

            <div className="tech-marquee flex w-max">
              {[...technologies, ...technologies].map((technology, index) => (
                <div
                  key={`${technology.name}-${index}`}
                  className="group mx-3 flex min-w-[150px] items-center gap-4 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm transition duration-300 hover:border-[#bc9851]/30 hover:shadow-md"
                >
                  <div className="flex h-7 w-7 items-center justify-center">
                    <img
                      src={technology.logo}
                      alt={`${technology.name} logo`}
                      className="h-6 w-6 object-contain transition duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.08em] text-slate-700 transition duration-300 group-hover:text-[#bc9851]">
                    {technology.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div data-reveal className="reveal mb-24">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#bc9851]">
                01 / Frontend Engineering
              </span>
              <h3 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Interface Development
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-600">
              Developing responsive interfaces with reusable components,
              structured code, and modern frontend technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {frontendSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} number={index + 1} />
            ))}
          </div>
        </div>

      
        <div data-reveal className="reveal mb-32">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end border-t border-slate-200 pt-16">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#bc9851]">
                02 / Backend Engineering
              </span>
              <h3 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Application Systems
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-600">
              Building APIs, database-driven applications, and server-side
              systems that support scalable digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {backendSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} number={index + 1} />
            ))}
          </div>
        </div>

        <div data-reveal className="reveal mb-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 border-t border-slate-200 pt-16">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#bc9851]">
                03 / Visual Design
              </span>
              <h3 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Design & <br /> Visual Systems
              </h3>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600">
                Combining development with visual thinking to create digital
                products that communicate clearly and maintain a consistent
                visual identity.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {designSkills.map((item) => (
                  <div
                    key={item.name}
                    className="group rounded-2xl bg-white border border-slate-100 p-3 shadow-sm transition-all duration-300 hover:border-[#bc9851]/30 hover:shadow-md flex flex-col justify-between min-h-[140px]"
                  >
                    
                      <img
                        src={item.image}
                        alt={`${item.name} preview`}
                        className="h-32 w-full  sm:h-25 rounded-2xl"
                        loading="lazy"
                      />
                    <p className="mt-4 text-sm font-bold  text-slate-800">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      
        <div data-reveal className="reveal mb-32 border-y border-slate-200 py-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <div className="mb-3 flex items-center gap-4">
                <span className="h-px w-10 bg-[#bc9851]" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#bc9851]">
                  Beyond Development
                </span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Art & Visual Work
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
                A selection of personal artwork, sketches, and visual studies
                that influence the way I approach digital design.
              </p>
            </div>

            <button
              type="button"
              onClick={handleShowArtworks}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#bc9851]"
            >
              <span>{showArtworks ? "Hide Artworks" : "Explore Artworks"}</span>
            </button>
          </div>
        </div>


        {showArtworks && (
          <div
            id="artworks"
            data-reveal
            className="reveal is-visible mb-32 scroll-mt-24"
          >
            <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h3 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Art that shapes <br />
                  <span className="text-[#bc9851]">the way I design.</span>
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {artworks.map((artwork) => (
                <div
                  key={artwork.number}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out "
                    />
                    {/* Gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                    <span className="absolute left-6 top-6 z-10 font-mono text-xs font-bold tracking-[0.2em] text-white/60">
                      {artwork.number}
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#b59047]">
                        {artwork.category}
                      </span>
                      <h4 className="mt-2 text-xl font-bold tracking-tight text-white">
                        {artwork.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-end">
              <button
                type="button"
                onClick={handleShowArtworks}
                className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-500 transition duration-300 hover:text-[#bc9851]"
              >
                Close Gallery ↗
              </button>
            </div>
          </div>
        )}

      
        <div data-reveal className="reveal rounded-3xl bg-slate-900 p-10 md:p-16 shadow-2xl">
          <div className="flex flex-col justify-between gap-12 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#9a711f]">
                Development Philosophy
              </p>
              <h3 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Build with <span className="text-[#9a711f]">purpose.</span>
                <br />
                Design with <span className="text-slate-400">clarity.</span>
              </h3>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-amber-50"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>

      
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 800ms ease, transform 800ms ease;
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .tech-marquee {
          animation: techScroll 35s linear infinite;
        }
        .tech-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes techScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-marquee { animation: none; }
          .reveal { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}


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
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:border-[#bc9851]/30 hover:shadow-md">

      {/* Top Row */}
      <div className="flex items-start justify-between">
        <span className="font-mono text-sm font-bold text-slate-300 group-hover:text-[#bc9851]/50 transition-colors">
          {String(number).padStart(2, "0")}
        </span>
        {skill.logo && (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 transition-colors duration-300 group-hover:bg-amber-50">
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mt-6">
        <div className="flex items-center justify-between gap-4">
          <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#bc9851] transition-colors">
            {skill.name}
          </h4>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
            {skill.level}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 min-h-[60px]">
          {skill.description}
        </p>
      </div>

      
      <div className="mt-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
            Proficiency
          </span>
          <span className="font-mono text-xs font-bold text-slate-800">
            {skill.percentage}%
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-[#bc9851] transition-all duration-1000 ease-out group-hover:[#bc9851]"
            style={{ width: `${skill.percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}