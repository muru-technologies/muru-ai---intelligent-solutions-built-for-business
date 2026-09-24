import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { NAV_ITEMS } from '../data/muruData';
import { MuruLogo } from './MuruLogo';

interface NavbarProps {
  onOpenConsultation: (initialInterest?: string) => void;
  activeSection: string;
  onEnterCommandCenter?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  activeSection,
  onEnterCommandCenter,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setServicesOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Main navigation
  const mainNavNames = [
    'Solutions',
    'Case Studies',
    'Industries',
  ];

  // Items that belong under Services
  const serviceNavNames = [
    'AI Agents',
    'ROI Estimator',
    'Process',
    'Tech & Security',
  ];

  const mainNavItems = NAV_ITEMS.filter((item) =>
    mainNavNames.includes(item.name)
  );

  const serviceItems = NAV_ITEMS.filter((item) =>
    serviceNavNames.includes(item.name)
  );

  return (
    <header
      id="main-header"
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          isScrolled
            ? 'bg-[#08090B]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50'
            : 'bg-[#08090B]/70 backdrop-blur-md border-b border-white/[0.04]'
        }
      `}
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-7 lg:px-10">
        <div
          className={`
            flex items-center justify-between
            transition-all duration-300
            ${isScrolled ? 'h-[72px]' : 'h-[82px]'}
          `}
        >

          {/* =====================================================
              LOGO
          ====================================================== */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex shrink-0 items-center focus:outline-none"
            aria-label="Muru Technologies"
          >
            <MuruLogo
              variant="white"
              size="md"
              showAiBadge={true}
              showTagline={true}
              taglineText="TECHNOLOGY SOLUTIONS GROUP"
            />
          </a>


          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <nav className="hidden lg:flex items-center ml-auto mr-8">

            <div className="flex items-center gap-1">

              {/* MAIN NAV ITEMS */}
              {mainNavItems.map((item) => {
                const isActive =
                  activeSection === item.sectionId;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) =>
                      handleNavClick(e, item.href)
                    }
                    className={`
                      px-3.5
                      py-2
                      rounded-full
                      text-sm
                      font-medium
                      whitespace-nowrap
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? 'text-white bg-white/[0.08]'
                          : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                      }
                    `}
                  >
                    {item.name}
                  </a>
                );
              })}


              {/* =================================================
                  SERVICES DROPDOWN
              ================================================== */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setServicesOpen(!servicesOpen)
                  }
                  className={`
                    flex
                    items-center
                    gap-1
                    px-3.5
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    ${
                      servicesOpen ||
                      serviceItems.some(
                        (item) =>
                          activeSection === item.sectionId
                      )
                        ? 'text-white bg-white/[0.08]'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                    }
                  `}
                  aria-expanded={servicesOpen}
                >
                  <span>Services</span>

                  <ChevronDown
                    className={`
                      w-3.5
                      h-3.5
                      transition-transform
                      duration-200
                      ${
                        servicesOpen
                          ? 'rotate-180'
                          : ''
                      }
                    `}
                  />
                </button>


                {/* DROPDOWN */}
                {servicesOpen && (
                  <div
                    className="
                      absolute
                      left-1/2
                      top-full
                      mt-3
                      w-[250px]
                      -translate-x-1/2
                      rounded-2xl
                      border
                      border-white/[0.08]
                      bg-[#0D0F12]/98
                      p-2
                      shadow-2xl
                      shadow-black/60
                      backdrop-blur-2xl
                    "
                  >
                    <div className="px-3 py-2">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        What We Do
                      </p>
                    </div>

                    {serviceItems.map((item) => {
                      const isActive =
                        activeSection === item.sectionId;

                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(e) =>
                            handleNavClick(e, item.href)
                          }
                          className={`
                            block
                            rounded-xl
                            px-3
                            py-2.5
                            transition-all
                            duration-200
                            ${
                              isActive
                                ? 'bg-white/[0.08] text-white'
                                : 'text-zinc-300 hover:bg-white/[0.06] hover:text-white'
                            }
                          `}
                        >
                          <div className="text-sm font-medium">
                            {item.name}
                          </div>

                          <div className="mt-0.5 text-[10px] text-zinc-500">
                            {item.name === 'AI Agents' &&
                              'Intelligent automation'}
                            {item.name === 'ROI Estimator' &&
                              'Measure business impact'}
                            {item.name === 'Process' &&
                              'How we build solutions'}
                            {item.name === 'Tech & Security' &&
                              'Enterprise-grade infrastructure'}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>
          </nav>


          {/* =====================================================
              RIGHT SIDE ACTIONS
          ====================================================== */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">

            {/* AI COMMAND CENTER */}
            {onEnterCommandCenter && (
              <button
                type="button"
                onClick={onEnterCommandCenter}
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3.5
                  py-2
                  rounded-full
                  text-xs
                  font-medium
                  text-zinc-300
                  bg-white/[0.035]
                  border
                  border-white/[0.08]
                  hover:bg-white/[0.07]
                  hover:text-white
                  transition-all
                "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />

                <span>AI Command Center</span>
              </button>
            )}


            {/* CONSULTATION */}
            <button
              id="nav-consultation-btn"
              type="button"
              onClick={() => onOpenConsultation()}
              className="
                group
                inline-flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-full
                text-xs
                sm:text-sm
                font-semibold
                text-black
                bg-[#E59500]
                hover:bg-[#F5A31A]
                shadow-[0_0_20px_rgba(229,149,0,0.20)]
                transition-all
                duration-200
                hover:-translate-y-0.5
              "
            >
              <span>Book a Consultation</span>

              <ArrowRight
                className="
                  w-3.5
                  h-3.5
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </button>

          </div>


          {/* =====================================================
              MOBILE
          ====================================================== */}
          <div className="flex items-center lg:hidden">

            <button
              id="mobile-menu-btn"
              type="button"
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="
                p-2.5
                rounded-xl
                text-zinc-400
                hover:text-white
                hover:bg-white/[0.06]
                transition-colors
              "
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          </div>

        </div>
      </div>


      {/* =========================================================
          MOBILE MENU
      ========================================================== */}
      {mobileMenuOpen && (
        <div
          className="
            lg:hidden
            border-t
            border-white/[0.08]
            bg-[#08090B]/98
            backdrop-blur-2xl
          "
        >
          <div className="px-5 py-5 sm:px-7">

            <div className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Navigation
            </div>


            {/* MAIN LINKS */}
            {mainNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) =>
                  handleNavClick(e, item.href)
                }
                className="
                  block
                  px-3
                  py-3
                  rounded-xl
                  text-sm
                  font-medium
                  text-zinc-300
                  hover:text-white
                  hover:bg-white/[0.06]
                  transition-colors
                "
              >
                {item.name}
              </a>
            ))}


            {/* MOBILE SERVICES */}
            <button
              type="button"
              onClick={() =>
                setServicesOpen(!servicesOpen)
              }
              className="
                w-full
                flex
                items-center
                justify-between
                px-3
                py-3
                rounded-xl
                text-sm
                font-medium
                text-zinc-300
                hover:text-white
                hover:bg-white/[0.06]
              "
            >
              <span>Services</span>

              <ChevronDown
                className={`
                  w-4
                  h-4
                  transition-transform
                  ${
                    servicesOpen
                      ? 'rotate-180'
                      : ''
                  }
                `}
              />
            </button>


            {servicesOpen && (
              <div className="ml-3 border-l border-white/[0.08] pl-3">

                {serviceItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) =>
                      handleNavClick(e, item.href)
                    }
                    className="
                      block
                      px-3
                      py-2.5
                      rounded-lg
                      text-sm
                      text-zinc-400
                      hover:text-white
                      hover:bg-white/[0.05]
                    "
                  >
                    {item.name}
                  </a>
                ))}

              </div>
            )}


            {/* MOBILE ACTIONS */}
            <div
              className="
                mt-4
                pt-4
                border-t
                border-white/[0.08]
                space-y-2
              "
            >

              {onEnterCommandCenter && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onEnterCommandCenter();
                  }}
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    px-4
                    py-3
                    rounded-xl
                    text-sm
                    font-medium
                    text-white
                    bg-white/[0.05]
                    border
                    border-white/[0.08]
                  "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />

                  <span>AI Command Center</span>
                </button>
              )}


              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-4
                  py-3
                  rounded-xl
                  font-semibold
                  text-black
                  bg-[#E59500]
                  hover:bg-[#F5A31A]
                "
              >
                <span>Book a Consultation</span>

                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>
      )}
    </header>
  );
};