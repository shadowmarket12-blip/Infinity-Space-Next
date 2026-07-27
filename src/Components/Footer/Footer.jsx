"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/people/Infinity-Space/61587564103214/",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/infinityspace.co/",
    },
    {
      icon: FaXTwitter,
      link: "https://x.com/InfinitySpaceCo",
    },
    {
      icon: FaYoutube,
      link: "https://www.youtube.com/@InfinitySpaceOfficial",
    },
    {
      icon: FaPinterestP,
      link: "https://in.pinterest.com/infinityspaceodisha/",
    },
  ];

  const curveClass =
    "absolute -top-24 left-0 h-32 w-full rounded-b-[100px] bg-white";
  const glowCenterClass =
    "absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-white/10 blur-[150px]";
  const glowLeftClass =
    "absolute left-[-100px] top-20 h-[250px] w-[250px] rounded-full bg-white/10 blur-[120px]";
  const glowRightClass =
    "absolute bottom-0 right-[-100px] h-[250px] w-[250px] rounded-full bg-white/10 blur-[120px]";
  const gridClass = "grid gap-10 sm:gap-12 md:grid-cols-2 xl:grid-cols-4";
  const logoContainerClass =
    "inline-flex rounded-3xl bg-white p-4 shadow-[0_0_60px_rgba(255,255,255,0.2)]";
  const logoImageClass = "h-20 w-auto object-contain sm:h-24 md:h-28";
  const descriptionClass =
    "mt-6 max-w-full text-sm leading-7 text-white/80 lg:max-w-xs";
  const mapContainerClass =
    "mt-5 overflow-hidden rounded-2xl border border-white/20 shadow-lg";
  const mapIframeClass =
    "h-[180px] w-full sm:h-[200px] md:h-[220px] lg:h-[200px]";
  const socialContainerClass = "mt-5 flex flex-wrap items-center gap-3";
  const socialButtonClass =
    "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-[rgba(1,101,63,1)] shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105";
  const bottomSectionClass =
    "flex flex-col items-center justify-between gap-5 lg:flex-row";
  const linksContainerClass =
    "flex flex-wrap items-center justify-center gap-3 text-sm text-white/70";
  const companyLinkClass =
    "bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text font-semibold text-transparent transition-opacity duration-300 hover:opacity-80 ml-2";

  return (
    <footer className="relative mt-24 overflow-hidden bg-[rgba(1,101,63,1)] text-white">
      {/* TOP CURVE */}
      <div className={curveClass} />

      {/* GLOW EFFECTS */}
      <div className={glowCenterClass} />
      <div className={glowLeftClass} />
      <div className={glowRightClass} />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className={gridClass}>
          {/* LOGO SECTION */}
          <div>
            <div className={logoContainerClass}>
              <Image
                src="/logo.png"
                alt="Infinity Space Logo"
                width={112}
                height={112}
                className={logoImageClass}
              />
            </div>
            <p className={descriptionClass}>
              Premium interior design solutions with luxury aesthetics,
              functional layouts, modern living spaces and personalized
              experiences crafted for modern families.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xl font-bold tracking-wide">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Services", path: "/services/overview" },
                { name: "Projects", path: "/projects" },
                { name: "Blogs", path: "/blogs" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-white/80 transition-all duration-300 hover:pl-2 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OFFICE */}
          <div>
            <h4 className="text-xl font-bold tracking-wide">Office</h4>
            <div className="mt-5 space-y-3 text-sm text-white/80">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-green-300" />
                <span>
                  FA 1/63, Barabhuja market complex, Khandagiri, Bhubaneswar,
                  Odisha 751030
                </span>
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="flex-shrink-0 text-green-300" />
                <a
                  href="mailto:infinityspaceodisha@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  infinityspaceodisha@gmail.com
                </a>
              </p>
              <p className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 flex-shrink-0 text-green-300" />
                <span>
                  <a
                    href="tel:+917077797720"
                    className="hover:text-white transition-colors"
                  >
                    +91 7077797720
                  </a>
                  {" | "}
                  <a
                    href="tel:+917077797703"
                    className="hover:text-white transition-colors"
                  >
                    7077797703
                  </a>
                  <br />
                  <a
                    href="tel:+917077797729"
                    className="hover:text-white transition-colors"
                  >
                    7077797729
                  </a>
                </span>
              </p>
            </div>
          </div>

          {/* MAP + SOCIAL */}
          <div>
            <h4 className="text-xl font-bold tracking-wide">Find Us</h4>
            <div className={mapContainerClass}>
              <iframe
                title="Company Location"
                src="https://www.google.com/maps?q=FA+1%2F63%2C+Barabhuja+market+complex%2C+Khandagiri%2C+Bhubaneswar%2C+Odisha+751030&output=embed"
                loading="lazy"
                allowFullScreen
                className={mapIframeClass}
              />
            </div>
            <div className={socialContainerClass}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={socialButtonClass}
                  >
                    <Icon className="text-sm sm:text-base" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-14 border-t border-white/20 pt-8">
          <div className={bottomSectionClass}>
            <p className="text-center text-sm text-white/70">
              © {new Date().getFullYear()} Infinity Space. All Rights Reserved.
            </p>
            <div className={linksContainerClass}>
              <Link
                href="/privacypolicy"
                className="transition hover:text-green-400"
              >
                Privacy Policy
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/terms" className="transition hover:text-green-400">
                Terms & Conditions
              </Link>
            </div>
            <p className="text-center text-sm text-white/70">
              Designed & Developed By
              <a
                href="https://growwyldtech.com"
                target="_blank"
                rel="noopener noreferrer"
                className={companyLinkClass}
              >
                Growwyld
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
