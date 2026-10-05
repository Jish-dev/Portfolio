"use client";

import { useEffect, useRef } from "react";

export default function Service() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // ============================================================
  // SERVICES
  // ============================================================

  const services = [
    {
      number: "01",
      title: "Web Development",
      shortTitle: "WEB",
      description:
        "Responsive and modern websites built with clean structure, strong visual hierarchy and a focus on usability.",
      technologies: ["HTML", "CSS", "TypeScript", "React", "Tailwind CSS"],
      features: [
        "Responsive Websites",
        "Landing Pages",
        "Business Websites",
        "Portfolio Websites",
      ],
    },
    {
      number: "02",
      title: "Full Stack Development",
      shortTitle: "FULL STACK",
      description:
        "Complete web applications connecting modern frontend interfaces with APIs, backend systems and databases.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "Next.js",
      ],
      features: [
        "Web Applications",
        "REST APIs",
        "Authentication",
        "Database Integration",
      ],
    },
    {
      number: "03",
      title: "ERP Development",
      shortTitle: "ERP",
      description:
        "Custom ERP solutions that connect business operations, data and workflows into one structured digital management system.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "Next.js",
      ],
      features: [
        "Admin Dashboard",
        "User Management",
        "Attendance & Records",
        "Reports & Analytics",
      ],
    },
    {
      number: "04",
      title: "Visual Design",
      shortTitle: "DESIGN",
      description:
        "Clean digital interfaces designed around visual hierarchy, usability, consistency and a strong brand identity.",
      technologies: [
        "Figma",
        "Wireframing",
        "Typography",
        "Layout",
        "Design Systems",
      ],
      features: [
        "Interface Design",
        "Wireframes",
        "Visual Systems",
        "Responsive Design",
      ],
    },
    {
      number: "05",
      title: "Business Websites",
      shortTitle: "BUSINESS",
      description:
        "Professional digital experiences for businesses that need a clear online presence, product presentation and customer-focused structure.",
      technologies: [
        "React",
        "Bootstrap",
        "Tailwind CSS",
        "JavaScript",
        "Responsive UI",
      ],
      features: [
        "Company Websites",
        "Product Showcases",
        "Service Websites",
        "Brand Presentation",
      ],
    },
    {
      number: "06",
      title: "Creativity",
      shortTitle: "CREATIVE",
      description:
        "Creative visual thinking that turns ideas into distinctive concepts, visual directions and memorable digital experiences.",
      technologies: [
        "Creative Direction",
        "Visual Thinking",
        "Concept Design",
        "Storytelling",
        "Branding",
      ],
      features: [
        "Creative Concepts",
        "Visual Direction",
        "Brand Ideas",
        "Content Concepts",
      ],
    },
    {
      number: "07",
      title: "Logo & Poster Designing",
      shortTitle: "BRANDING",
      description:
        "Eye-catching logos, posters and promotional graphics created to communicate your brand clearly across digital and print platforms.",
      technologies: [
        "Figma",
        "Typography",
        "Composition",
        "Branding",
        "Graphic Design",
      ],
      features: [
        "Logo Design",
        "Poster Design",
        "Social Graphics",
        "Brand Materials",
      ],
    },
    {
      number: "08",
      title: "Digital Art",
      shortTitle: "DIGITAL ART",
      description:
        "Original digital artwork and illustrations created with strong composition, visual detail and a distinctive creative direction.",
      technologies: [
        "Digital Illustration",
        "Composition",
        "Color Theory",
        "Illustration",
        "Visual Design",
      ],
      features: [
        "Digital Illustrations",
        "Artwork",
        "Character Concepts",
        "Creative Graphics",
      ],
    },
  ];

  // ============================================================
  // PROCESS
  // ============================================================

  const process = [
    {
      number: "01",
      title: "DISCOVER",
      description:
        "Understanding the idea, business requirements, users and project goals.",
      icon: "✦",
    },
    {
      number: "02",
      title: "DESIGN",
      description:
        "Creating the structure, visual direction and interface experience.",
      icon: "◇",
    },
    {
      number: "03",
      title: "DEVELOP",
      description:
        "Turning the approved direction into a responsive and functional product.",
      icon: "</>",
    },
    {
      number: "04",
      title: "DELIVER",
      description:
        "Testing, refining and preparing the final digital experience.",
      icon: "✓",
    },
  ];

  // ============================================================
  // SOLUTIONS
  // ============================================================

  const solutions = [
    {
      title: "Personal Portfolio",
      text: "Professional portfolio websites for developers, designers and creatives.",
    },
    {
      title: "Business Website",
      text: "Modern online presence for companies, services and local businesses.",
    },
    {
      title: "Landing Page",
      text: "Focused pages designed to present products, services or campaigns.",
    },
    {
      title: "Web Application",
      text: "Interactive applications with frontend, backend and database functionality.",
    },
    {
      title: "E-Commerce",
      text: "Product-focused digital experiences for online businesses and stores.",
    },
    {
      title: "ERP System",
      text: "Custom management platforms connecting business operations, users, records and reporting.",
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
      id="services"
      className="relative overflow-hidden bg-[#06090E] px-5 py-28 text-white sm:px-8 md:py-36 lg:px-12 xl:px-16"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute overflow-hidden">
        <div
          className="absolute  opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute left-[-10%] top-[8%] h-[500px] w-[500px] rounded-full bg-[#bc9851]/[0.045] blur-[150px]" />

        <div className="absolute right-[-12%] top-[38%] h-[550px] w-[550px] rounded-full bg-[#bc9851]/[0.03] blur-[160px]" />

        <div className="absolute bottom-[-10%] left-[20%] h-[500px] w-[500px] rounded-full bg-[#bc9851]/[0.025] blur-[150px]" />

        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.025]" />

        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.025]" />

        <div className="absolute right-[-120px] top-[-160px] h-[420px] w-[420px] rounded-full border border-[#bc9851]/10" />

        <div className="absolute right-[-70px] top-[-110px] h-[320px] w-[320px] rounded-full border border-[#bc9851]/10" />

        <div className="absolute right-[-25px] top-[-65px] h-[220px] w-[220px] rounded-full border border-[#bc9851]/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* ============================================================
            HEADER
        ============================================================ */}

        <div
          data-reveal
          className="reveal mb-24 grid grid-cols-1 gap-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-8">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#bc9851]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#bc9851] sm:text-xs">
                Services / What I Do
              </span>
            </div>

            <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-white md:text-7xl lg:text-8xl">
              Creating lasting
              <br />

              <span className="bg-gradient-to-r from-[#a88541] via-[#bc9851] to-[#d0b477] bg-clip-text text-transparent">
                experiences.
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:col-span-4">
            <div className="border-l border-white/10 pl-6">
              <div className="mb-5 font-mono text-[13px] uppercase tracking-[0.3em] text-gray-500">
                04 / Services
              </div>

              <p className="max-w-md text-sm leading-7 text-gray-400 md:text-base">
                I combine development, visual thinking and creative skills
                to create digital experiences, practical products and
                distinctive visual work.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================
            SERVICE INTRO
        ============================================================ */}

        <div
          data-reveal
          className="reveal mb-24 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              {
                value: "8",
                label: "Services",
                gold: true,
              },
              {
                value: "MERN",
                label: "Development",
                gold: false,
              },
              {
                value: "ERP",
                label: "Business Systems",
                gold: false,
              },
              {
                value: "ART",
                label: "Creative Design",
                gold: false,
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`p-7 md:p-8 ${index !== 3
                    ? "border-b border-white/10 md:border-b-0 md:border-r"
                    : ""
                  } ${index === 0 || index === 2
                    ? "border-r border-white/10"
                    : ""
                  }`}
              >
                <p
                  className={`text-3xl font-black tracking-[-0.05em] md:text-4xl ${item.gold ? "text-[#bc9851]" : "text-white"
                    }`}
                >
                  {item.value}
                </p>

                <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.3em] text-gray-500 sm:text-[10px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            SERVICES
        ============================================================ */}

        <div data-reveal className="reveal mb-32">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-[#bc9851] sm:text-xs">
                01 / Services
              </span>

              <h3 className="mt-4 text-4xl font-bold tracking-[-0.045em] md:text-6xl">
                What I Can Do
              </h3>
            </div>

            <div className="flex items-end lg:col-span-5">
              <p className="max-w-md text-sm leading-7 text-gray-500 md:text-base">
                From complete web applications to visual design, branding
                and creative work, each service is shaped around the
                goals and requirements of the project.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.015] transition-all duration-500 hover:border-[#bc9851]/35 hover:bg-[#bc9851]/[0.025]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">

                  {/* NUMBER */}

                  <div className="flex items-start justify-between border-b border-white/10 p-6 lg:col-span-1 lg:border-b-0 lg:border-r lg:p-7">
                    <span className="text-xl font-bold tracking-tight text-[#bc9851]">
                      {service.number}
                    </span>

                    <span className="text-gray-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#bc9851] lg:hidden">
                      ↗
                    </span>
                  </div>

                  {/* MAIN */}

                  <div className="border-b border-white/10 p-7 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-9">
                    <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-gray-400">
                      {service.shortTitle}
                    </div>

                    <h4 className="text-2xl font-bold tracking-[-0.035em] transition duration-300 group-hover:text-[#bc9851] md:text-3xl">
                      {service.title}
                    </h4>

                    <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500">
                      {service.description}
                    </p>
                  </div>

                  {/* FEATURES */}

                  <div className="border-b border-white/10 p-7 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-9">
                    <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#bc9851]">
                      Includes
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3"
                        >
                          <span className="h-1 w-1 rounded-full bg-[#bc9851]" />

                          <span className="text-sm text-gray-400">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* TECHNOLOGIES */}

                  <div className="relative p-7 lg:col-span-3 lg:p-9">
                    <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#bc9851]">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 font-mono text-[12px] uppercase tracking-[0.08em] text-gray-400 transition duration-300 group-hover:border-[#bc9851]/25 group-hover:text-gray-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-6 right-7 hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-700 transition-all duration-300 group-hover:border-[#bc9851]/50 group-hover:text-[#bc9851] lg:flex">
                      ↗
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            PROCESS
        ============================================================ */}

        <div data-reveal className="reveal mb-32">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-[#bc9851] sm:text-xs">
                02 / Process
              </span>

              <h3 className="mt-4 text-4xl font-bold tracking-[-0.045em] md:text-6xl">
                How I Work
              </h3>
            </div>

            <div className="flex items-end lg:col-span-5">
              <p className="max-w-md text-sm leading-7 text-gray-500 md:text-base">
                A clear process keeps the project focused, structured and
                moving from the initial idea toward a finished digital
                product.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="group relative min-h-[270px] overflow-hidden rounded-2xl border border-white/10 bg-[#080C12] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#bc9851]/40 hover:bg-[#bc9851]/[0.025]"
              >
                <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-[#bc9851]/[0.025] blur-2xl transition-all duration-500 group-hover:bg-[#bc9851]/[0.08]" />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bc9851]/25 font-mono text-[14px] text-[#bc9851]">
                    {step.number}
                  </span>

                  <span className="text-xl text-[#bc9851]/60">
                    {step.icon}
                  </span>
                </div>

                <div className="relative mt-14">
                  <h4 className="text-lg font-bold tracking-[0.02em]">
                    {step.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                    {step.description}
                  </p>
                </div>

                <div className="absolute bottom-7 left-7 h-px w-10 bg-[#bc9851]/40 transition-all duration-500 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            SOLUTIONS
        ============================================================ */}

        <div data-reveal className="reveal mb-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-[#bc9851] sm:text-xs">
                03 / Solutions
              </span>

              <h3 className="mt-5 text-4xl font-bold leading-[0.98] tracking-[-0.05em] md:text-6xl">
                Built Around
                <br />
                <span className="text-[#bc9851]">
                  Your Needs.
                </span>
              </h3>

              <p className="mt-7 max-w-lg text-sm leading-8 text-gray-500 md:text-base">
                Whether you need a simple website, business platform,
                ERP system or complete web application, the approach
                can be adapted around the scope and requirements of
                your project.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {solutions.map((item, index) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.015] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#bc9851]/35 hover:bg-[#bc9851]/[0.025]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[14px] text-[#bc9851]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-gray-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#bc9851]">
                        ↗
                      </span>
                    </div>

                    <h4 className="mt-10 text-lg font-bold tracking-tight">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {item.text}
                    </p>

                    <div className="absolute bottom-0 left-0 h-px w-0 bg-[#bc9851] transition-all duration-500 group-hover:w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            ERP FEATURED SERVICE
        ============================================================ */}

        <div data-reveal className="reveal mb-32">
          <div className="relative overflow-hidden rounded-2xl border border-[#bc9851]/25 bg-[#bc9851]/[0.025]">

            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full border border-[#bc9851]/10" />

            <div className="pointer-events-none absolute right-[-50px] top-[-50px] h-[250px] w-[250px] rounded-full border border-[#bc9851]/10" />

            <div className="grid grid-cols-1 lg:grid-cols-12">

              {/* CONTENT */}

              <div className="p-8 sm:p-10 lg:col-span-7 lg:p-14">

                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-[#bc9851]">
                    Featured Service
                  </span>

                  <span className="h-px w-10 bg-[#bc9851]/40" />
                </div>

                <h3 className="mt-8 text-4xl font-black tracking-[-0.06em] md:text-6xl">
                  ERP
                  <span className="text-[#bc9851]">
                    {" "}DEVELOPMENT.
                  </span>
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-8 text-gray-400 md:text-base">
                  Build a centralized digital system for managing
                  operations, users, records, workflows and reports
                  through a structured web platform.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
                  {[
                    "Admin Panel",
                    "User Roles",
                    "Attendance",
                    "Fees & Payments",
                    "Reports",
                    "Dashboards",
                    "Records",
                    "CSV / PDF",
                    "Authentication",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#bc9851]/30 text-[8px] text-[#bc9851]">
                        ✓
                      </span>

                      <span className="text-xs text-gray-400">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SYSTEM VISUAL */}

              <div className="relative flex min-h-[360px] items-center justify-center border-t border-white/10 p-8 lg:col-span-5 lg:border-l lg:border-t-0">

                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#bc9851]/[0.04]" />

                <div className="relative w-full max-w-sm rounded-xl border border-white/10 bg-[#06090E] p-5 shadow-2xl">

                  <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-300">
                      Admin Panel
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#bc9851] shadow-[0_0_15px_rgba(188,152,81,0.7)]" />
                  </div>

                  <div className="grid grid-cols-2 gap-2">

                    <div className="rounded-lg border border-white/10 bg-white/[0.015] p-4">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-gray-600">
                        Users
                      </span>

                      <p className="mt-3 text-2xl font-bold">
                        248
                      </p>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-white/[0.015] p-4">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-gray-600">
                        Records
                      </span>

                      <p className="mt-3 text-2xl font-bold">
                        1.8K
                      </p>
                    </div>

                    <div className="col-span-2 rounded-lg border border-white/10 bg-white/[0.015] p-4">

                      <div className="mb-4 flex justify-between">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-gray-600">
                          Activity
                        </span>

                        <span className="font-mono text-[9px] text-[#bc9851]">
                          LIVE
                        </span>
                      </div>

                      <div className="flex h-14 items-end gap-1">
                        {[
                          80,
                          45,
                          35,
                          60,
                          48,
                          72,
                          65,
                          85,
                          70,
                          92,
                          78,
                          100,
                        ].map((height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-sm bg-[#bc9851]/30 transition-all duration-300 hover:bg-[#bc9851]"
                            style={{
                              height: `${height}%`,
                            }}
                          />
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            APPROACH
        ============================================================ */}

        <div data-reveal className="reveal mb-32">

          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">

            <div className="lg:col-span-7">

              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-[#bc9851] sm:text-xs">
                05 / Approach
              </span>

              <h3 className="mt-5 text-4xl font-bold leading-[1] tracking-[-0.05em] md:text-6xl">
                More Than
                <br />
                <span className="text-[#bc9851]">
                  Just Code.
                </span>
              </h3>

            </div>

            <div className="flex items-end lg:col-span-5">
              <p className="max-w-md text-sm leading-7 text-gray-500 md:text-base">
                Development is only one part of the process. I also
                consider structure, visual communication, usability,
                creativity and the practical needs behind the product.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Design Thinking",
                text: "I consider structure, hierarchy and visual communication alongside functionality.",
                icon: "✦",
              },
              {
                number: "02",
                title: "Clean Development",
                text: "Projects are developed with reusable components, structured code and responsive layouts.",
                icon: "</>",
              },
              {
                number: "03",
                title: "Practical Solutions",
                text: "The goal is to build useful digital products rather than adding unnecessary complexity.",
                icon: "◈",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080C12] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#bc9851]/35"
              >

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[14px] text-[#bc9851]">
                    {item.number}
                  </span>

                  <span className="text-xl text-[#bc9851]/50 transition-all duration-300 group-hover:text-[#bc9851]">
                    {item.icon}
                  </span>
                </div>

                <h4 className="mt-12 text-xl font-bold tracking-tight">
                  {item.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                  {item.text}
                </p>

                <div className="mt-8 h-px w-10 bg-[#bc9851]/40 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}

          </div>
        </div>


        <div
          data-reveal
          className="reveal relative overflow-hidden border-t border-white/10 pt-20"
        >

          <div className="pointer-events-none absolute bottom-[-250px] right-[-100px] h-[500px] w-[800px] rounded-full bg-[#bc9851]/[0.05] blur-[120px]" />

          <div className="relative flex flex-col justify-between gap-12 md:flex-row md:items-end">

            <div>

              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gray-500 sm:text-xs">
                Have a project?
              </p>

              <h3 className="mt-6 max-w-5xl text-3xl font-black uppercase leading-[0.88] tracking-[-0.065em] sm:text-5xl md:text-7xl lg:text-50xl">

                Let's build

                <span className="text-[#bc9851]">
                  {" "}something.
                </span>



                <span className="text-gray-600">
                  {" "} Digital.
                </span>

              </h3>

            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-5 rounded-full bg-[#bc9851] px-5 py-4 text-[15px] font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-[#c9aa6c] hover:shadow-[0_0_35px_rgba(188,152,81,0.18)] sm:px-8 sm:py-5 sm:text-xs"
            >
              <span>Start a Project</span>
            </a>

          </div>
        </div>
      </div>

      {/* ============================================================
          REVEAL STYLES
      ============================================================ */}

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
      `}</style>
    </section>
  );
}