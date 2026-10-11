"use client";

import { useEffect, useRef, useState } from "react";

export default function Service() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeService, setActiveService] = useState(0);

  // ============================================================
  // SERVICES
  // ============================================================

  const services = [
    {
      number: "01",
      title: "Web Development",
      shortTitle: "WEB",
      image: "/services/web-dev.jpg",
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
      image: "/services/erp.png",
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
      image: "/services/service-04.jpg",
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
      image: "/services/service-05.jpg",
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
      image: "/services/service-06.jpg",
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
      image: "/services/service-07.jpg",
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
      image: "/services/service-08.jpg",
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
  // APPROACH
  // ============================================================

  const approach = [
    {
      number: "01",
      title: "Design Thinking",
      image:"/design.jpeg",
      text: "I consider structure, hierarchy and visual communication alongside functionality.",
      icon: "✦",
    },
    {
      number: "02",
      title: "Clean Development",
      image:"/Clean.png",
      text: "Projects are developed with reusable components, structured code and responsive layouts.",
      icon: "</>",
    },
    {
      number: "03",
      title: "Practical Solutions",
      image:"/practical.png",
      text: "The goal is to build useful digital products rather than adding unnecessary complexity.",
      icon: "◈",
    },
  ];

 // SCROLL TO TOP ON PAGE LOAD / REFRESH
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

  const selected = services[activeService];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="overflow-hidden bg-white py-25 text-[#171717]"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">

    <div data-reveal className="reveal py-10 mb-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#bc9851]/50" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#bc9851]">
                Services / What I Do
              </span>
            </div>

            <h2 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-7xl lg:text-7xl">
              Creating digital <br />
              <span className="text-[#bc9851]">experience.</span>
            </h2>
          </div>

          <div className="flex items-end lg:col-span-4">
            <div className="border-l-2 border-slate-200 pl-6">
              <p className="max-w-md text-base leading-relaxed text-slate-600">
                I combine development, visual thinking and creative skills
                to create digital experiences, practical products and
                distinctive visual work.
              </p>
            </div>
          </div>
        </div>

       


        <div
          data-reveal
          className="reveal py-24 lg:py-32"
        >
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#927234]">
                01 / Services
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.05em] md:text-6xl">
                Explore what I do.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#686863]">
              From development and business systems to visual design
              and creative work, each service is shaped around the
              requirements of the project.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[2rem] border border-[#deded9] bg-white lg:grid-cols-[0.85fr_1.15fr]">

            {/* SERVICE LIST */}

            <div className="border-b border-[#deded9] lg:border-b-0 lg:border-r">
              {services.map((service, index) => (
                <button
                  key={service.number}
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className={`group flex w-full items-center gap-5 border-b border-[#deded9] px-6 py-5 text-left transition-all last:border-b-0 sm:px-8 ${activeService === index
                      ? "bg-[#f7f7f5]"
                      : "hover:bg-[#fafaf8]"
                    }`}
                >
                  <span
                    className={`font-mono text-[10px] ${activeService === index
                        ? "text-[#bc9851]"
                        : "text-[#a0a09a]"
                      }`}
                  >
                    {service.number}
                  </span>

                  <span
                    className={`flex-1 text-sm font-semibold sm:text-base ${activeService === index
                        ? "text-[#171717]"
                        : "text-[#696963]"
                      }`}
                  >
                    {service.title}
                  </span>

                  <span
                    className={`text-sm transition-all ${activeService === index
                        ? "translate-x-0 text-[#bc9851] opacity-100"
                        : "-translate-x-2 text-[#aaa9a2] opacity-0"
                      }`}
                  >
                    ↗
                  </span>
                </button>
              ))}
            </div>


            <div className="relative min-h-[420px] overflow-hidden bg-[#f2f1ed]">

              <div className="relative flex min-h-[420px] flex-col justify-between p-7 sm:p-10 lg:p-12">

                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-[#bc9851]">
                    {selected.number}
                  </span>

                  <span className="rounded-full border border-[#bc9851]/30 bg-white/40 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#927234]">
                    {selected.shortTitle}
                  </span>
                </div>

                <div>
                  <h3
                    key={selected.title}
                    className="service-title max-w-2xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl"
                  >
                    {selected.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-[#5f5f5a] md:text-base">
                    {selected.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {selected.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-[#d8d5cd] bg-white/70 px-3 py-2 text-[10px] text-[#686863]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-[#d8d5cd] pt-6">
                    <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.25em] text-[#927234]">
                      Technologies / Tools
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      {selected.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-xs text-[#686863]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-reveal
          className="reveal py-15 lg:py-32"
        >
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#927234]">
                02 / Process
              </span>

              <h2 className="mt-4 text-5xl font-bold leading-[0.9] tracking-[-0.055em] md:text-6xl">
                From idea to
                <br />
                <span className="text-[#bc9851]">
                reality.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#686863]">
              A clear process keeps the project focused, structured and
              moving from the initial idea toward a finished digital
              product.
            </p>
          </div>

          <div className="grid border-t border-[#deded9] md:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.number}
                className={`group min-h-[260px] border-b border-[#deded9] py-8 pr-7 ${index !== 0
                    ? "md:border-l md:pl-7"
                    : ""
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#bc9851]">
                    {step.number}
                  </span>

                  <span className="text-lg text-[#bc9851] transition-transform duration-300 group-hover:rotate-12">
                    {step.icon}
                  </span>
                </div>

                <h3 className="mt-16 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-7 text-[#686863]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>


        <div
          data-reveal
          className="reveal border-t border-[#deded9] py-24 lg:py-32"
        >
          <div className="mb-14">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#927234]">
              03 / Solutions
            </span>

            <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h2 className="text-5xl font-bold leading-[0.9] tracking-[-0.055em] md:text-6xl">
                Built around
                <br />
                <span className="text-[#bc9851]">
                  your needs.
                </span>
              </h2>

              <p className="max-w-md text-sm leading-7 text-[#686863]">
                Whether you need a simple website, business platform,
                ERP system or complete web application, the approach
                can be adapted around the scope and requirements of
                your project.
              </p>
            </div>
          </div>

          <div className="grid gap-x-12 lg:grid-cols-2">
            {solutions.map((item, index) => (
              <div
                key={item.title}
                className="group flex gap-6 border-t border-[#deded9] py-8"
              >
                <span className="font-mono text-[10px] text-[#bc9851]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-5">
                    <h3 className="text-lg font-bold transition-colors">
                      {item.title}
                    </h3>

                    <span className="text-[#aaa9a2] transition-transform duration-300 group-hover:translate-x-1">
                    </span>
                  </div>

                  <p className="mt-3 max-w-md text-sm leading-6 text-[#686863]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

       

        <div
          data-reveal
          className="reveal border-t border-[#deded9] py-24 lg:py-32"
        >
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#927234]">
                04 / Approach
              </span>

              <h2 className="mt-4 text-5xl font-bold leading-[0.9] tracking-[-0.055em] md:text-6xl">
                More than just
                <br />
                <span className="text-[#bc9851]">
                code.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#686863]">
              Development is only one part of the process. I also
              consider structure, visual communication, usability,
              creativity and the practical needs behind the product.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {approach.map((item) => (
              <div
                key={item.number}
                className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-[#deded9] bg-white p-8 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white md:col-span-3">
                  <img
                    src={item.image}
                    alt={`${item.title} preview`}
                    className="h-32 w-full object-cover transition-transform duration-500  sm:h-40"
                    loading="lazy"
                  />
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#bc9851] transition-all duration-500 " />

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#686863]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="reveal rounded-3xl bg-slate-900 p-20 md:p-16 shadow-2xl">
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

      {/* ========================================================
          ANIMATIONS
      ========================================================= */}

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 800ms ease,
            transform 800ms ease;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .service-title {
          animation: serviceFade 500ms ease;
        }

        @keyframes serviceFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-35%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }

          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .service-title {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}