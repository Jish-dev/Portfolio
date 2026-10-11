
"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [projectType, setProjectType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    { number: "01", title: "Website", description: "Business, portfolio or landing page" },
    { number: "02", title: "Web Application", description: "Interactive full-stack application" },
    { number: "03", title: "ERP System", description: "Business management platform" },
    { number: "04", title: "E-Commerce", description: "Online store or product platform" },
    { number: "05", title: "UI / Visual Design", description: "Interface and visual design" },
    { number: "06", title: "Other", description: "Something different" },
  ];

  const contactInfo = [
    {
      number: "01",
      label: "EMAIL",
      value: "jishnudevna@gmail.com",
      href: "mailto:jishnudevna@gmail.com",
    },
    {
      number: "02",
      label: "LOCATION",
      value: "Kerala, India",
      href: undefined,
    },
    {
      number: "03",
      label: "AVAILABILITY",
      value: "Available for freelance projects",
      href: undefined,
    },
  ];

  const socials = [
    {
      number: "01",
      name: "LinkedIn",
      handle: "Professional network",
      href: "https://www.linkedin.com/in/jishnu-dev-43882028b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: "https://cdn.jsdelivr.net/npm/social-media-icons@0.3.1/icons/linkedin.svg",
    },
    {
      number: "02",
      name: "GitHub",
      handle: "Code & projects",
      href: "https://github.com/Jish-dev",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      number: "03",
      name: "Instagram",
      handle: "Creative work",
      href: "https://www.instagram.com/jish_dev?igsh=MW9zMGE1NDVuazBk",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/instagram.svg",
    },
  ];

  const selectedProject = projectTypes.find(
    (project) => project.title === projectType
  );

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


  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const subject = encodeURIComponent(`Project Inquiry: ${projectType}`);
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\n` +
      `Email: ${formData.get("email")}\n` +
      `Project Type: ${projectType}\n\n` +
      `Message:\n${formData.get("message")}`
    );

    window.location.href =
      `mailto:jishnudevna@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-white px-5 py-20 text-[#20211F] sm:px-8 md:py-28 lg:px-12 xl:px-16"
    >
      
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div data-reveal className="reveal mb-14 max-w-5xl md:mb-16">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-[#bc9851]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#a88541]">
              Contact / Connect
            </span>

          </div>

          <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-[#20211F] md:text-7xl lg:text-7xl">
            Let’s connect
            <br />
            <span className="bg-gradient-to-r from-[#bc9851] via-[#d0b071] to-[#bc9851] bg-clip-text text-transparent">
              and create.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-[#777871] sm:text-lg">
            Have an idea, project or digital experience in mind?
            Let's turn it into something useful, thoughtful and
            well-built.
          </p>
        </div>

        {/* Contact + Form */}
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          {/* Contact Information */}
          <div
            data-reveal
            className="reveal rounded-3xl border border-[#E5E3DC] bg-white p-7 shadow-sm sm:p-9"
          >
            <div className="mb-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#bc9851]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a88541]">
                  Get In Touch
                </span>
              </div>

              <h3 className="max-w-sm text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#20211F] sm:text-4xl">
                HAVE A PROJECT
                <br />
                <span className="text-[#a88541]">IN MIND?</span>
              </h3>

              <p className="mt-6 max-w-md text-sm leading-6 text-[#777871]">
                Tell me what you are building, what you need, and where
                you want to take it. I'll get back to you with the
                next step.
              </p>
            </div>

            <div className="space-y-2">
              {contactInfo.map((item) => {
                const content = (
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#a88541]">
                          {item.number}
                        </span>

                        <span className="text-[9px] font-bold tracking-[0.2em] text-[#85857D]">
                          {item.label}
                        </span>
                      </div>

                      <p className="break-words text-sm font-medium text-[#44453F] transition group-hover:text-[#a88541]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <div
                    key={item.number}
                    className="rounded-2xl border border-[#EAE9E3] bg-[#FAFAF8] p-5 transition duration-300 hover:border-[#bc9851]/40 hover:bg-[#bc9851]/[0.035]"
                  >
                    {item.href ? (
                      <a href={item.href} className="group block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-green-500/25 bg-green-400/[0.07] p-5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/40" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500">
                  Currently Available
                </span>
              </div>

              <p className="mt-3 text-xs leading-5 text-[#777871]">
                Open to selected freelance projects, collaborations and
                digital product opportunities.
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            data-reveal
            className="reveal rounded-3xl border border-[#E5E3DC] bg-white p-7 shadow-sm sm:p-9"
          >
            <div className="mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a88541]">
                Project Inquiry
              </span>

              <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.03em] text-[#20211F] sm:text-3xl">
                TELL ME ABOUT IT.
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#55564F]"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="contact-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#55564F]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="contact-input"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="mb-3 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#55564F]"
                >
                  Project Type
                </label>

                <div className="relative">
                  <select
                    id="projectType"
                    name="projectType"
                    value={projectType}
                    onChange={(event) => {
                      setProjectType(event.target.value);
                      setSubmitted(false);
                    }}
                    required
                    className="contact-input cursor-pointer appearance-none pr-14"
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>

                    {projectTypes.map((project) => (
                      <option key={project.number} value={project.title}>
                        {project.title}
                      </option>
                    ))}
                  </select>

                  <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#a88541]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    selectedProject
                      ? "mt-3 max-h-20 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {selectedProject && (
                    <div className="flex items-center gap-3 px-1">
                      <span className="text-[11px] font-bold tracking-[0.2em] text-[#a88541]">
                        {selectedProject.number}
                      </span>

                      <span className="h-px w-5 bg-[#bc9851]/50" />

                      <p className="text-xs text-[#85857D]">
                        {selectedProject.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#55564F]"
                >
                  Tell Me More
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your idea, goals, requirements or anything else that might be useful..."
                  className="contact-input resize-y leading-6"
                />
              </div>

              <div className="flex flex-col gap-4 border-t border-[#EAE9E3] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[13px] leading-5 text-[#777871]">
                  I'll review your message and get back to you with
                  the next steps.
                </p>

                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-4 rounded-full bg-[#bc9851] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#a88541] hover:shadow-[0_8px_25px_rgba(188,152,81,0.2)]"
                >
                  Send Inquiry
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>

              {submitted && (
                <div
                  role="status"
                  className="rounded-xl border border-[#bc9851]/25 bg-[#bc9851]/[0.07] p-4"
                >
                  <p className="font-bold text-[#44453F]">
                    Your email app should open now.
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#777871]">
                    Send the prepared email to complete your inquiry.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div data-reveal className="reveal mt-16">
          <div className="mb-6 flex items-end justify-between gap-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a88541]">
                Elsewhere
              </span>

              <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.04em] text-[#20211F] sm:text-3xl">
                LET'S STAY
                <span className="text-[#a88541]"> CONNECTED.</span>
              </h3>
            </div>

            <span className="hidden text-[9px] font-medium uppercase tracking-[0.2em] text-[#85857D] sm:block">
              SOCIAL / 03
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {socials.map((social) => (
              <a
                key={social.number}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-[#E5E3DC] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#bc9851]/50 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#a88541]">
                    {social.number}
                  </span>

                  <span className="text-lg text-[#A5A49B] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#a88541]">
                    ↗
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#EAE9E3] bg-[#F8F8F6] p-3">
                    <img
                      src={social.icon}
                      alt={`${social.name} icon`}
                      className="h-7 w-7 object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-[#292A27] transition-colors group-hover:text-[#a88541]">
                      {social.name}
                    </h4>

                    <p className="mt-1 text-xs text-[#85857D]">
                      {social.handle}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer
          data-reveal
          className="reveal mt-10 flex flex-col gap-4 border-t border-[#20211F]/10 pt-7 text-[10px] uppercase tracking-[0.2em] text-[#85857D] sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© 2026 JISHNU DEV</p>
          <p>DESIGN • CODE • BUILD</p>
          <p>KERALA, INDIA</p>
        </footer>
      </div>

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(25px);
          transition:
            opacity 0.8s ease,
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-input {
          width: 100%;
          border: 1px solid #e5e3dc;
          border-radius: 12px;
          background: #fafaf8;
          padding: 15px 18px;
          font-size: 13px;
          color: #20211f;
          outline: none;
          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .contact-input::placeholder {
          color: #aaa99f;
        }

        .contact-input:focus {
          border-color: rgba(188, 152, 81, 0.7);
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(188, 152, 81, 0.1);
        }

        .contact-input option {
          background: #ffffff;
          color: #20211f;
        }

        .contact-input::selection {
          background: rgba(188, 152, 81, 0.25);
          color: #20211f;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
