"use client";

import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import Link from "next/link";
import { useState } from "react";


const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Operations", href: "#operations" },
  { label: "Features", href: "#features" },
  { label: "Plans", href: "#pricing" },
  { label: "Our Clients", href: "#trusted-schools" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  useLockBodyScroll(isOpen);


  return (
    <header
      role="banner"
      className="sticky top-0 z-50 w-full bg-white  border-[var(--header-border-color)] shadow-sm"
      // className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
    >
      {/* NAVBAR */}
      <nav
        aria-label="Primary navigation"
        className="max-w-7xl mx-auto flex items-center justify-between p-4"
        // className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6"
      >
        {/* MOBILE LEFT: MENU BUTTON */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="md:hidden text-2xl cursor-pointer text-[var(--primary-color)]"
        >
          ☰
        </button>


        <Link
  href="/"
  className="flex items-center justify-center md:justify-start flex-1 md:flex-none"
>
  <h1 className="flex items-baseline gap-2 font-bold tracking-tight text-2xl md:text-3xl select-none">

    <span className="text-slate-900">School</span>

    <span className="text-[var(--brand-primary)] italic relative">
      Refine

      {/* subtle underline accent */}
      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--brand-primary)]/50" />
    </span>

  </h1>
</Link>

        {/* DESKTOP MENU */}
        {/* <ul className="hidden md:flex items-center gap-6 font-sans text-sm text-[var(--text-dark)]">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-[var(--gold-color)] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul> */}
       <ul className="hidden md:flex items-center gap-2">
  {navItems.map((item) => (
    <li key={item.href}>
      <Link
        href={item.href}
        className="rounded-full px-5 py-2 text-base font-semibold tracking-wide text-slate-700 transition-all duration-300 hover:bg-[var(--brand-primary)]/10 hover:text-[var(--brand-primary)]"
      >
        {item.label}
      </Link>
    </li>
  ))}
</ul>

        {/* DESKTOP CTA */}
       {/* <div className="hidden md:block">
  <button className="rounded-lg bg-[var(--brand-primary)] px-5 py-2.5 font-semibold text-slate-900 transition hover:scale-105 hover:bg-[var(--brand-primary)]">
    Book a Demo
  </button>
</div> */}
{/* DESKTOP CTA */}
<div className="hidden md:flex items-center gap-3">

  {/* Brochure Button */}
  <a
    href="/school_management_features.pdf"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Download School ERP brochure (PDF)"
    className="inline-flex items-center justify-center gap-2 h-10 px-4 text-sm font-semibold
               rounded-lg border border-slate-300 bg-white
                transition
               hover:bg-slate-50 hover:text-slate-900"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>

    Brochure
  </a>

  {/* Primary CTA */}
  <button
    className="h-10 px-5 rounded-lg bg-[var(--brand-primary)] text-sm font-semibold text-white
               transition hover:scale-105 hover:bg-[var(--brand-primary)]"
  >
    Book a Demo
  </button>

</div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
     {/* MOBILE OVERLAY MENU */}
<div
  className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
    isOpen ? "visible opacity-100" : "invisible opacity-0"
  }`}
>
  {/* Backdrop */}
  <div
    onClick={() => setIsOpen(false)}
    className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
  />

  {/* Drawer */}
  <div
   className={`absolute right-0 top-0 h-full w-80 overflow-hidden border-l border-white/10 bg-white/[0.08] shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
      isOpen
  ? "translate-x-0 opacity-100"
  : "translate-x-full opacity-0"
    }`}
  >
    {/* Top */}
    <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
      {/* Logo */}

      <div>
  <h2 className="flex items-baseline gap-2 text-xl font-bold tracking-tight text-white select-none">

    <span className="text-white">School</span>

    <span className="text-[var(--brand-primary)] italic relative">
      Refine

      {/* subtle underline for dark background */}
      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--brand-primary)]/50" />
    </span>

  </h2>

  <p className="mt-1 text-xs text-slate-400">
    Modern School ERP Platform
  </p>
</div>

      {/* Close */}
      <button
        onClick={() => setIsOpen(false)}
        aria-label="Close navigation menu"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:bg-white/10"
      >
        ✕
      </button>
    </div>

    {/* Navigation */}
    <div className="flex flex-col gap-2 px-4 py-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-4 text-base font-medium text-slate-200 transition hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
        >
          <span>{item.label}</span>

          <span className="translate-x-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-[var(--brand-primary)]">
            →
          </span>
        </Link>
      ))}

      {/* CTA */}
      <button className="mt-4 rounded-2xl bg-[var(--brand-primary)] px-5 py-4 font-semibold transition hover:bg-[var(--brand-primary)]">
        Book a Demo
      </button>
    </div>

    {/* Bottom */}
    <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-slate-500">
      School ERP & Management Platform
    </div>
  </div>
</div>
    </header>
  );
}