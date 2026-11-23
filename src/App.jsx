import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  MapPin, 
  Mail, 
  FileText,
  ExternalLink
} from 'lucide-react';
import { 
  personalInfo, 
  quickStats, 
  projects, 
  publication, 
  experiences, 
  technicalSkills, 
  education, 
  certifications 
} from './data/portfolioData';

function IconGithub({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function IconLinkedin({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0d0f14] text-[#d6d9e0] font-sans antialiased selection:bg-white/15 selection:text-white">
      {/* Top subtle border rule */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-slate-600 to-transparent w-full opacity-30" />

      {/* Main Single-Column Clean Container */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24 space-y-24">
        
        {/* HEADER / INTRO */}
        <header className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  {personalInfo.name}
                </h1>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" title="Open to roles" />
              </div>
              <p className="text-sm font-mono text-zinc-400">
                {personalInfo.role} • {personalInfo.location}
              </p>
            </div>

            {/* Quick links & contact */}
            <div className="flex items-center gap-2.5 text-xs font-mono">
              <button 
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-200 transition-colors cursor-pointer"
                title="Copy email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
                <span>{copied ? 'Copied' : personalInfo.email}</span>
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <IconGithub className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <IconLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              {personalInfo.bio}
            </p>

            {/* Quick facts grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {quickStats.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">{item.label}</div>
                  <div className="text-xs font-medium text-zinc-200 mt-1">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* RESEARCH PUBLICATION */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
              01 / Research & Publications
            </h2>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
              {publication.status}
            </span>
          </div>

          <article className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] transition-colors space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500">{publication.venue} • {publication.year}</span>
              <h3 className="text-lg font-semibold text-white tracking-tight">
                {publication.title}
              </h3>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {publication.abstract}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {publication.breakdown.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-black/40 border border-white/[0.05]">
                  <div className="text-xs font-semibold text-zinc-200">{item.title}</div>
                  <div className="text-[11px] text-zinc-400 mt-1 leading-snug">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {publication.keywords.map((kw, i) => (
                <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                  {kw}
                </span>
              ))}
            </div>
          </article>
        </section>

        {/* SELECTED PROJECTS */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
              02 / Engineering Projects
            </h2>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-mono text-zinc-400 hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-8">
            {projects.map((proj, idx) => (
              <div 
                key={idx} 
                className="group p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors flex items-center gap-2">
                      <span>{proj.title}</span>
                      <a href={proj.repo} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-300">
                        <ArrowUpRight className="w-3.5 h-3.5 inline" />
                      </a>
                    </h3>
                    <div className="text-xs font-mono text-zinc-400">{proj.role}</div>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">{proj.year}</span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {proj.summary}
                </p>

                {/* Quantitative results banner */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-black/40 border border-white/[0.05] text-center font-mono">
                  {proj.stats.map((s, i) => (
                    <div key={i}>
                      <div className="text-xs font-bold text-zinc-100">{s.val}</div>
                      <div className="text-[10px] text-zinc-500">{s.key}</div>
                    </div>
                  ))}
                </div>

                {/* Bullet details */}
                <ul className="space-y-1.5 text-xs text-zinc-400 leading-relaxed">
                  {proj.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-zinc-600 select-none">―</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="space-y-6">
          <div className="pb-3 border-b border-white/[0.08]">
            <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
              03 / Work History
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-2 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-semibold text-white">{exp.role}</h3>
                    <div className="text-xs font-mono text-zinc-400">{exp.company} • {exp.location}</div>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">{exp.period}</span>
                </div>

                <ul className="space-y-1.5 pt-2 text-xs text-zinc-300 leading-relaxed">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-zinc-600 select-none">―</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tags.map((t, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL TOOLING */}
        <section className="space-y-6">
          <div className="pb-3 border-b border-white/[0.08]">
            <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
              04 / Technical Toolkit
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {technicalSkills.map((cat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2.5">
                <div className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-wider">
                  {cat.domain}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section className="space-y-6">
          <div className="pb-3 border-b border-white/[0.08]">
            <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
              05 / Education & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Academic */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Education</div>
              {education.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="text-xs font-semibold text-white">{edu.institution}</div>
                  <div className="text-xs text-zinc-400">{edu.degree}</div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-1">
                    <span>{edu.period}</span>
                    <span className="text-emerald-400 font-semibold">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Certifications</div>
              <div className="space-y-2">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-2 text-xs">
                    <span className="text-zinc-300 font-medium">{cert.name}</span>
                    <span className="text-[11px] font-mono text-zinc-500 shrink-0">{cert.org}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER & CONTACT */}
        <footer className="pt-12 border-t border-white/[0.08] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-white">Let's talk</div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Always eager to discuss ML research, systems engineering, or prospective roles.
              </p>
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>vasisht765@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-zinc-600 pt-4">
            <div>© {new Date().getFullYear()} Vasisht Suresh</div>
            <div>Built with React & Vite</div>
          </div>
        </footer>

      </div>
    </div>
  );
}
