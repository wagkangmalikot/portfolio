"use client";

import Link from "next/link";
import { useState } from "react";
import { profile } from "@/lib/data";

const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-900/90 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal-500 text-sm text-navy-950">AD</span>
          <span>{profile.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={profile.resume}
            className="ml-2 rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-navy-950 transition hover:bg-teal-400"
            download
          >
            Download resume
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md text-slate-200 hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-white/10 px-4 pb-4 md:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-3 text-base font-medium text-slate-200 hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={profile.resume}
            download
            className="mt-2 block rounded-full bg-teal-500 px-4 py-3 text-center text-sm font-semibold text-navy-950"
          >
            Download resume
          </a>
        </nav>
      )}
    </header>
  );
}
