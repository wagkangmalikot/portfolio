import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCover } from "@/components/ProjectCover";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.tagline } : {};
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className="bg-navy-900 text-white">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-10 sm:px-6 sm:pt-14">
          <Link href="/#work" className="text-sm font-medium text-teal-300 hover:text-teal-200">
            ← All projects
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-teal-300">
            {p.kind} · {p.year}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">{p.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{p.tagline}</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <ProjectCover project={p} className="-mt-px aspect-[16/7] rounded-b-2xl" />

        <dl className="grid gap-6 border-b border-line py-8 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-muted">Role</dt>
            <dd className="mt-1 font-medium text-navy-900">{p.role}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-bold uppercase tracking-wider text-muted">Stack</dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span key={t} className="rounded-md bg-paper px-2 py-1 text-sm font-medium text-navy-800">
                  {t}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <div className="space-y-10 py-10 text-lg leading-relaxed text-ink">
          <p className="text-xl text-navy-900">{p.summary}</p>

          <section>
            <h2 className="font-display text-2xl font-bold text-navy-900">The problem</h2>
            <p className="mt-3">{p.problem}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-navy-900">What I built</h2>
            <ul className="mt-3 space-y-2">
              {p.built.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2.5 h-2 w-2 flex-none rounded-full bg-teal-500" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border-l-4 border-teal-500 bg-paper p-6">
            <h2 className="font-display text-xl font-bold text-navy-900">The hard part</h2>
            <p className="mt-2">{p.challenge}</p>
          </section>

          {(p.links?.length || p.note) && (
            <section className="flex flex-wrap items-center gap-3">
              {p.links?.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-navy-900 px-5 py-2.5 text-base font-semibold text-white transition hover:bg-navy-800"
                >
                  {l.label} ↗
                </a>
              ))}
              {p.note && <p className="text-base text-muted">{p.note}</p>}
            </section>
          )}
        </div>

        <Link
          href={`/projects/${next.slug}/`}
          className="group mb-16 flex items-center justify-between gap-4 rounded-2xl border border-line p-6 transition hover:border-teal-400 hover:shadow-lg"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted">Next project</p>
            <p className="mt-1 font-display text-xl font-bold text-navy-900">{next.title}</p>
          </div>
          <span className="text-2xl text-teal-600 transition group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
