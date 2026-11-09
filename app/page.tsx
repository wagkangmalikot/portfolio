import Link from "next/link";
import { ProjectCover } from "@/components/ProjectCover";
import { experience, links, profile, projects, skills } from "@/lib/data";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-teal-500/20 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-sm font-medium text-teal-200">
            <span className="h-2 w-2 rounded-full bg-teal-300" />
            Open to full-time and freelance work
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{profile.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/#work" className="rounded-full bg-teal-500 px-6 py-3 font-semibold text-navy-950 transition hover:bg-teal-400">
              See my work
            </Link>
            <Link href="/#contact" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Get in touch
            </Link>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-teal-300 sm:text-4xl">{s.value}</dd>
                <dd className="mt-1 text-sm text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading eyebrow="Selected work" title="Projects I've built and shipped" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}/`}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${i === 0 ? "md:col-span-2 md:flex-row" : ""}`}
            >
              <ProjectCover project={p} className={i === 0 ? "aspect-video md:aspect-auto md:w-1/2" : "aspect-video"} />
              <div className={`flex flex-1 flex-col p-6 ${i === 0 ? "md:justify-center md:p-10" : ""}`}>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                  <span className={p.kind === "Personal" ? "text-amber-600" : "text-teal-600"}>{p.kind}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-muted">{p.year}</span>
                </div>
                <h3 className={`mt-2 font-display font-bold tracking-tight text-navy-900 ${i === 0 ? "text-3xl" : "text-xl"}`}>{p.title}</h3>
                <p className="mt-2 text-muted">{p.tagline}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 5).map((t) => (
                    <li key={t} className="rounded-md bg-paper px-2 py-1 text-xs font-medium text-navy-800">
                      {t}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
                  Read case study
                  <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About + skills */}
      <section id="about" className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="About" title="Designer's eye, developer's discipline" />
            <div className="space-y-4 text-lg leading-relaxed text-ink">
              {profile.about.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
          <div className="grid content-start gap-4 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="rounded-xl border border-line bg-white p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700">{s.group}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="rounded-full bg-teal-50 px-2.5 py-1 text-sm font-medium text-teal-900 ring-1 ring-teal-100">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <ol className="relative border-l border-line pl-8">
          {experience.map((e) => (
            <li key={e.role + e.company} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[38px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-teal-500 bg-white" aria-hidden="true" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-bold text-navy-900">{e.role}</h3>
                <span className="text-sm font-semibold text-muted">{e.period}</span>
              </div>
              <p className="font-medium text-teal-700">{e.company}</p>
              <ul className="mt-2 space-y-1 text-ink">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <a href={profile.resume} download className="mt-10 inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-teal-800">
          Download the full resume (PDF) <span aria-hidden="true">↓</span>
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">Contact</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">Have a project or a role in mind?</h2>
            <p className="mt-4 text-lg text-slate-300">
              I&apos;m open to full-time frontend roles and freelance web projects. Email is the fastest way to reach me.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block break-all rounded-full bg-teal-500 px-6 py-3 font-semibold text-navy-950 transition hover:bg-teal-400"
            >
              {profile.email}
            </a>
            <ul className="mt-8 flex flex-wrap gap-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-teal-300 hover:text-teal-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-slate-400">Based in {profile.location} · UTC+8</p>
          </div>
        </div>
      </section>
    </>
  );
}
