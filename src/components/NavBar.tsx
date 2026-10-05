"use client";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`
        fixed
        left-1/2
        z-50
        -translate-x-1/2

        transition-all
        duration-700
        ease-[cubic-bezier(0.16,1,0.3,1)]

        ${
          scrolled
            ? `
              top-4
              w-[90%]
              max-w-6xl
              rounded-full
              border
              border-white/10
              bg-neutral-950/75
              shadow-[0_15px_50px_rgba(0,0,0,0.45)]
              backdrop-blur-xl
            `
            : `
              top-0
              w-full
              rounded-none
              border-transparent
              bg-transparent
              shadow-none
              backdrop-blur-0
            `
        }
      `}
    >
      <div
        className={`
          mx-auto
          flex
          items-center
          justify-between
          px-6
          lg:px-8

          transition-all
          duration-700
          ease-[cubic-bezier(0.16,1,0.3,1)]

          ${scrolled ? "h-14" : "h-20"}
        `}
      >
        {/* LOGO */}

        <Link
          to="/"
          className="
            group
            relative
            mx-10
            flex
            items-center
            font-black
            tracking-tight
            text-white
          "
        >
          {/* JISHNU DEV */}

          <div
            className={`
              flex
              items-center
              gap-1

              transition-all
              duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]

              ${
                scrolled
                  ? "pointer-events-none absolute scale-75 opacity-0"
                  : "scale-100 opacity-100"
              }
            `}
          >
            <span className="text-3xl font-extrabold text-white">
              Jishnu
            </span>

            <span className="text-3xl font-bold text-[#bc9851]">
              Dev
            </span>

            <span
              className="
                ml-1
                h-1.5
                w-1.5
                rounded-full
                bg-[#bc9851]
                transition-transform
                duration-300
                group-hover:scale-150
              "
            />
          </div>

          {/* JD */}

          <div
            className={`
              absolute
              left-0
              flex
              items-center

              transition-all
              duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]

              ${
                scrolled
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-75 opacity-0"
              }
            `}
          >
            <span
              className="
                text-4xl
                font-black
                tracking-tighter
                text-white
              "
            >
              J
            </span>

            <span
              className="
                text-4xl
                font-black
                tracking-tighter
                text-[#bc9851]
              "
            >
              D
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}

        <div
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >
          <nav
            className="
              flex
              items-center
              gap-1
            "
          >
            {links.map((link) => {
              // Home is active only on "/"
              const isActive =
                location.pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`
                    relative
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-[#bc9851]/10 text-[#bc9851]"
                        : "text-neutral-300 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  {link.name}

                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-1
                        left-1/2
                        h-1
                        w-1
                        -translate-x-1/2
                        rounded-full
                        bg-white
                      "
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}

          <Link
            to="/contact"
            className={`
              group
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-white
              bg-transparent
              font-semibold
              text-white

              transition-all
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]

              hover:border-[#bc9851]
              hover:bg-[#bc9851]
              hover:text-neutral-950

              hover:shadow-[0_0_25px_rgba(52,211,153,0.18)]

              active:scale-95

              ${
                scrolled
                  ? "px-4 py-1.5 text-xs"
                  : "px-5 py-2.5 text-sm"
              }
            `}
          >
            Start a Project

            <svg
              className="
                ml-1.5
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={menuOpen}
          className="
            relative
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            transition-all
            duration-300
            hover:border-[#bc9851]/30
            hover:bg-white/10
            md:hidden
          "
        >
          <div
            className="
              flex
              w-5
              flex-col
              items-center
              justify-center
              gap-1.5
            "
          >
            <span
              className={`
                h-0.5
                w-full
                rounded-full
                bg-[#bc9851]
                transition-all
                duration-500
                ${
                  menuOpen
                    ? "translate-y-2 rotate-45"
                    : ""
                }
              `}
            />

            <span
              className={`
                h-0.5
                w-full
                rounded-full
                bg-white
                transition-all
                duration-300
                ${
                  menuOpen
                    ? "scale-x-0 opacity-0"
                    : "scale-x-100 opacity-100"
                }
              `}
            />

            <span
              className={`
                h-0.5
                w-full
                rounded-full
                bg-[#bc9851]
                transition-all
                duration-500
                ${
                  menuOpen
                    ? "-translate-y-2 -rotate-45"
                    : ""
                }
              `}
            />
          </div>
        </button>
      </div>

      {/* MOBILE DRAWER */}

      <div
        className={`
          grid
          transition-all
          duration-500
          md:hidden

          ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div
            className="
              mx-4
              mb-4
              mt-2
              rounded-3xl
              border
              border-[#bc9851]/20
              bg-neutral-950/95
              px-6
              py-6
              shadow-2xl
              backdrop-blur-2xl
            "
          >
            <nav className="flex flex-col gap-1">
              {links.map((link) => {
                const isActive =
                  location.pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      rounded-xl
                      px-4
                      py-3
                      text-base
                      font-medium
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "bg-emerald-400/10 text-[#bc9851]"
                          : "text-neutral-200 hover:bg-emerald-400/10 hover:text-[#bc9851]"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="
                mt-6
                block
                w-full
                rounded-full
                border
                border-white
                bg-transparent
                py-3.5
                text-center
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-[#bc9851]
                hover:bg-[#bc9851]
                hover:text-neutral-950
                active:scale-95
              "
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}