// All site content lives here. Edit this file to update the portfolio —
// no other file needs to change to add a project or a job.

export const profile = {
  name: "Alfredo Deligero Jr",
  shortName: "Alfie Deligero",
  role: "Senior Web Developer",
  location: "San Pedro, Laguna, Philippines",
  email: "alfredo.deligero@gmail.com",
  resume: "/Alfredo-Deligero-Jr-Resume.pdf",
  headline: "I build fast, polished web apps and browser games.",
  intro:
    "Frontend and web developer with 15+ years of experience, from Flash ads and HTML5 slot games to modern Angular, Vue.js and Next.js applications. I care about interfaces that feel good to use and code that stays easy to change.",
  about: [
    "I started as a graphic artist, moved into Flash and HTML5 games, and have spent the last several years building production web apps. That path gave me a designer's eye and a developer's discipline.",
    "Today I work on a multi-brand white-label casino platform at GlobalNet Solutions Group: a Next.js and React player site and a Vue.js and PHP admin CMS. Before that I led an AngularJS-to-Angular 12+ upgrade at Accenture.",
    "I'm open to full-time roles and freelance projects in frontend and web development.",
  ],
  stats: [
    { value: "15+", label: "years building for the web" },
    { value: "4", label: "frameworks shipped to production" },
    { value: "2", label: "platforms worked on at GlobalNet" },
  ],
};

export const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alfie-deligero/" },
  { label: "GitHub", href: "https://github.com/wagkangmalikot" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~01f56855aa0b359e5b" },
  { label: "JobStreet", href: "https://ph.jobstreet.com/profiles/alfredo-deligero-5c1b2wb7n9" },
];

export const skills = [
  { group: "Frameworks", items: ["Next.js", "React", "React Query", "Vue.js", "Angular"] },
  { group: "Languages", items: ["TypeScript", "JavaScript", "PHP", "HTML5", "CSS"] },
  { group: "Styling", items: ["Tailwind CSS", "SASS", "Bootstrap"] },
  { group: "Workflow", items: ["Git", "GitHub Actions CI", "Jira", "Karma / Jasmine", "Agile"] },
  { group: "Games", items: ["Phaser", "HTML5 games", "Flash"] },
  { group: "Design", items: ["Photoshop", "Illustrator", "After Effects", "Articulate Storyline"] },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  kind: "Personal" | "Professional";
  year: string;
  role: string;
  stack: string[];
  accent: string; // CSS color for the project's cover art
  pattern: "grid" | "rings" | "reels" | "bars" | "qr";
  summary: string;
  problem: string;
  built: string[];
  challenge: string;
  links?: { label: string; href: string }[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "bituin-play-casino-demo",
    title: "Bituin Play — Casino Lobby Demo",
    tagline: "A casino game lobby, wallet, deposit flow and playable themed slots.",
    kind: "Personal",
    year: "2026",
    role: "Design and development",
    stack: ["Next.js", "React", "TypeScript", "React Query", "Tailwind CSS"],
    accent: "#fbbf24",
    pattern: "reels",
    summary:
      "An original, public rebuild of the kind of casino platform I work on professionally: a game lobby, a live wallet, a deposit flow with promo codes, and 12 playable demo slots. Made-up brand, games and studios; no real money.",
    problem:
      "My professional casino work is proprietary, so I can't show it. I wanted a demo anyone can open that shows the same skills: data fetching and caching, complex forms, and game UI tied to a wallet.",
    built: [
      "Game lobby with category tabs, debounced search, provider filter and favorites, plus loading, empty and error states.",
      "React Query for caching and mutations: deposits and spins write the new wallet straight into the cache.",
      "Deposit modal with payment methods, amount presets, validation and promo codes with a live bonus preview.",
      "12 playable slots sharing one set of game rules, each with its own SVG symbol set and colors.",
      "A mock API in the browser, so the front end is built exactly as it would be against a real backend.",
      "Responsive layout with a bottom-sheet modal on phones; keyboard and screen-reader friendly.",
    ],
    challenge:
      "Keeping the wallet consistent across the header, deposit and slot while every action is asynchronous. The API decides each result and returns the new wallet, and the UI only displays it.",
    links: [
      { label: "Live demo", href: "https://bituin-play-demo.vercel.app" },
      { label: "Source on GitHub", href: "https://github.com/wagkangmalikot/casino-lobby-demo" },
    ],
  },
  {
    slug: "lords-of-the-fallen-tracker",
    title: "Lords of the Fallen Trophy Tracker",
    tagline: "An interactive checklist for a PS5 platinum run, synced across devices.",
    kind: "Personal",
    year: "2026",
    role: "Design and development",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    accent: "#e2a14a",
    pattern: "grid",
    summary:
      "A single-page tracker for every trophy and collectible in Lords of the Fallen (2023), built to replace scattered spreadsheets and guide tabs.",
    problem:
      "A platinum run means tracking hundreds of collectibles across a long game. Guides list them, but none remember what you already have, and progress on a phone doesn't follow you to a laptop.",
    built: [
      "Interactive checklists for every trophy and collectible in the game.",
      "Cross-device sync so progress follows you between phone and desktop.",
      "Responsive layout for checking items off on a phone while playing.",
      "Hosted for free on GitHub Pages.",
    ],
    challenge:
      "Keeping progress in sync across devices while keeping the page fast with a long list of items on screen.",
    links: [
      { label: "Source on GitHub", href: "https://github.com/wagkangmalikot/lords_of_the_fallen_trophy_tracker" },
    ],
  },
  {
    slug: "dwin-platform",
    title: "DWIN White-Label Casino Platform",
    tagline: "Player site and admin CMS for a multi-brand casino platform.",
    kind: "Professional",
    year: "2024 – now",
    role: "Senior Web Developer, GlobalNet Solutions Group (team project)",
    stack: ["Next.js", "React", "TypeScript", "React Query", "Tailwind CSS", "Vue.js", "PHP"],
    accent: "#2dd4bf",
    pattern: "bars",
    summary:
      "A white-label casino platform that serves several brands from one codebase: a player-facing site and a back-office CMS for operators.",
    problem:
      "The player site was moving from Vue 3 to Next.js and React, while operators needed a CMS to manage games, brands, promos and staff permissions safely.",
    built: [
      "Part of the team migrating the multi-brand player site to Next.js, React and TypeScript.",
      "Worked on the cashier and deposit pages, promo panels, responsible gaming tools and KYC screens.",
      "Contributed to casino game launch, SEO-friendly game URLs and layout-shift (CLS) fixes.",
      "Worked on the Vue.js and PHP admin CMS, including role-based access control and the operations dashboard.",
      "Fix production and sprint bugs, documenting root cause and solution in Jira.",
    ],
    challenge:
      "Shipping changes to a live, multi-brand product: every fix has to work for each brand, pass CI, and come with clear notes for the next developer.",
    note: "Proprietary code: no public link or screenshots.",
  },
  {
    slug: "angular-migration",
    title: "AngularJS to Angular Migration",
    tagline: "Upgrading a client's legacy website to Angular 12 and beyond.",
    kind: "Professional",
    year: "2021 – 2024",
    role: "Senior Analyst, Accenture (led the upgrade)",
    stack: ["Angular", "TypeScript", "AngularJS", "Karma", "Jasmine", "Git"],
    accent: "#f87171",
    pattern: "rings",
    summary:
      "A full upgrade of a client website from AngularJS to modern Angular, done while the site stayed in use.",
    problem:
      "AngularJS reached end of life, leaving the client's site on an unsupported framework with growing security and maintenance risk.",
    built: [
      "Led the upgrade from AngularJS to Angular 12, then kept it current on later versions.",
      "Rebuilt features as reusable components and services.",
      "Refactored legacy code using current Angular practices for performance, security and scalability.",
      "Added automated unit tests with Karma and Jasmine.",
    ],
    challenge:
      "Replacing the framework underneath a working site without breaking what users relied on, one module at a time.",
    note: "Client project: no public link.",
  },
  {
    slug: "slot-games",
    title: "HTML5 Slot Games",
    tagline: "Browser slot games with smooth reels, animations and sound.",
    kind: "Professional",
    year: "2014 – now",
    role: "Game developer (APS Group, Pacifica, GlobalNet)",
    stack: ["Phaser", "JavaScript", "HTML5", "Flash"],
    accent: "#a78bfa",
    pattern: "reels",
    summary:
      "Slot and table games for online casinos, first in Flash and later in HTML5 with Phaser, including seasonal themes like St. Paddy's Day.",
    problem:
      "Casino games have to look rich and run smoothly on any device, from desktop browsers to low-end phones.",
    built: [
      "Slot and table games in Flash, and later HTML5 slot games in Phaser.",
      "Game screens, reel animations and themed releases.",
      "Focus on immersive gameplay and smooth performance in the browser.",
    ],
    challenge:
      "Keeping animations smooth on low-end phones while still delivering the visual polish players expect.",
    note: "Studio-owned games: available to demo on request.",
  },
  {
    slug: "wifi-qr-manager",
    title: "Guest WiFi QR Manager",
    tagline: "A small web app that turns home router guest WiFi into scannable QR codes.",
    kind: "Personal",
    year: "2026",
    role: "Design and development",
    stack: ["JavaScript", "HTML", "CSS"],
    accent: "#60a5fa",
    pattern: "qr",
    summary:
      "A tool for managing guest WiFi on a PLDT home router and sharing it as a QR code, so visitors can join without typing a password.",
    problem:
      "Reading out a long WiFi password to every guest is slow and error-prone, and changing it means telling everyone again.",
    built: [
      "Generates a standard WiFi QR code that phones can scan to join.",
      "Manages the guest network details for a PLDT home router.",
    ],
    challenge: "Making a practical tool that non-technical family members can use without help.",
  },
];

export const experience = [
  {
    role: "Senior Web Developer",
    company: "GlobalNet Solutions Group, Inc.",
    period: "Sep 2024 – Present",
    points: [
      "Build features for the DWIN white-label casino platform across a Next.js and React player site and a Vue.js and PHP admin CMS.",
      "Built slot games with Phaser and responsive casino websites with Vue.js and Tailwind CSS.",
    ],
  },
  {
    role: "Senior Analyst",
    company: "Accenture",
    period: "Aug 2021 – Aug 2024",
    points: ["Led the upgrade of a client website from AngularJS to Angular 12 and later versions."],
  },
  {
    role: "Game Specialist",
    company: "Pacifica Software Group",
    period: "Feb 2018 – May 2021",
    points: ["Developed HTML5 slot games using Phaser."],
  },
  {
    role: "E-Learning Developer",
    company: "Framedia (freelance) · Personiv · ACP",
    period: "2016 – 2020",
    points: ["Built interactive e-learning courses with Articulate Storyline, After Effects and Animate."],
  },
  {
    role: "Game Specialist · Flash Developer · Graphic Artist",
    company: "APS Group · Wide-Out Workforces · ASEC Asia",
    period: "2008 – 2016",
    points: ["Slot and table games in Flash and HTML5, rich media ads and print design."],
  },
];
