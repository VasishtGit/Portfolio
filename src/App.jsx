import React, { useState } from 'react';
import { 
  Mail, 
  FileText, 
  ExternalLink, 
  Award, 
  BookOpen, 
  Code2, 
  Cpu, 
  Database, 
  Layers, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Terminal,
  MapPin,
  Phone,
  ArrowUpRight,
  CheckCircle2,
  BrainCircuit
} from 'lucide-react';
import { 
  personalInfo, 
  stats, 
  skillsData, 
  experiences, 
  publications, 
  projects, 
  education, 
  certifications 
} from './data/portfolioData';

// Custom clean SVG icons for brand logos
function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 bg-grid-pattern relative">
      {/* Dynamic top ambient light */}
      <div className="fixed inset-0 pointer-events-none glow-gradient z-0" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#090d16]/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              V
            </div>
            <span className="font-semibold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="hidden sm:inline-block text-xs uppercase px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
              AI / ML
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#publications" className="hover:text-cyan-400 transition-colors">Research</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handleCopyEmail}
              className="text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              {copiedEmail ? <CheckCircle2 size={14} className="text-emerald-400" /> : <Mail size={14} />}
              <span>{copiedEmail ? 'Email Copied!' : 'Get In Touch'}</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-24">
        {/* HERO SECTION */}
        <section id="about" className="pt-4 sm:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open for Machine Learning & AI Engineering Opportunities</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Deep Learning & NLP</span> Systems
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {personalInfo.summary}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:translate-y-[-1px]"
                >
                  <Sparkles size={16} />
                  <span>Explore Projects</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-sm flex items-center gap-2 transition-all hover:translate-y-[-1px]"
                >
                  <Mail size={16} />
                  <span>Email Me</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>

              {/* Location & Quick Meta */}
              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400 pt-3 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-cyan-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-cyan-400" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={15} className="text-cyan-400" />
                  <span>AMC Engineering College (VTU)</span>
                </div>
              </div>
            </div>

            {/* Right Card / Interactive Terminal Widget */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-slate-800 bg-[#0f172a]/80 backdrop-blur shadow-2xl p-6 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Terminal size={12} /> vasisht_profile.py
                  </span>
                </div>

                <div className="py-4 space-y-3 font-mono text-xs sm:text-sm text-slate-300">
                  <p className="text-slate-500"># Key Engineering Highlights</p>
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/80">
                    <span className="text-cyan-400">research_accepted</span> = <span className="text-emerald-400">"IEEE ICCSAI 2026"</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/80">
                    <span className="text-cyan-400">frameworks</span> = [<span className="text-amber-300">"PyTorch"</span>, <span className="text-amber-300">"FastAPI"</span>, <span className="text-amber-300">"FAISS"</span>]
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/80">
                    <span className="text-cyan-400">nlp_focus</span> = <span className="text-sky-300">"ModernBERT & GRPO"</span>
                  </div>
                </div>

                {/* Stat grid */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800/80">
                  {stats.map((s, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/50">
                      <div className="text-lg font-bold text-white">{s.value}</div>
                      <div className="text-xs text-slate-400">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-2">
                <Code2 size={16} /> Selected Engineering Works
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">Featured Projects</h2>
              <p className="text-slate-400 text-sm mt-1 max-w-xl">
                End-to-end Machine Learning systems, transformer fine-tuning, and production-ready backend architectures.
              </p>
            </div>
            
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>View all repositories on GitHub</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/40 backdrop-blur-sm p-6 hover:border-cyan-500/50 hover:bg-slate-900/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800/50 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {project.id === 'semantic-memorability-ranker' ? <BrainCircuit size={20} /> : project.id === 'traceai' ? <Database size={20} /> : <Cpu size={20} />}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-cyan-400/90 mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Benchmark Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-[#090d16]/80 border border-slate-800 mb-4">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <div className="text-[11px] font-bold text-slate-200">{m.val}</div>
                        <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Project Bullets */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-400">
                    {project.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RESEARCH & PUBLICATIONS */}
        <section id="publications" className="space-y-6 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <BookOpen size={16} /> Peer-Reviewed Research
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Publications</h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Academic contributions pushing the frontier of reinforcement learning and cognitive memory retention.
            </p>
          </div>

          <div className="space-y-4">
            {publications.map((pub, idx) => (
              <div 
                key={idx}
                className="relative rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/20 via-slate-900/60 to-slate-900/40 p-6 md:p-8 backdrop-blur hover:border-indigo-500/50 transition-all shadow-xl shadow-indigo-950/10"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {pub.status}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {pub.venue}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {pub.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {pub.abstract}
                </p>

                <div className="space-y-2 mb-6">
                  {pub.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {pub.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-lg bg-indigo-950/60 text-indigo-300 border border-indigo-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="space-y-6 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Briefcase size={16} /> Industry Experience
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Work History</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7 backdrop-blur hover:border-slate-700 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <div className="text-sm font-medium text-cyan-400">{exp.company} • <span className="text-slate-400 font-normal">{exp.location}</span></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-5 text-sm text-slate-300">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-0.5 text-xs rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL SKILLS MATRIX */}
        <section id="skills" className="space-y-6 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Layers size={16} /> Capabilities & Tooling
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Technical Skills</h2>
            <p className="text-slate-400 text-sm mt-1">
              Categorized overview of engineering proficiency, models, and infrastructure tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skillsData).map(([category, items], idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 hover:border-slate-700 transition-colors"
              >
                <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                  {category.includes("Deep Learning") ? <BrainCircuit size={18} className="text-cyan-400" /> :
                   category.includes("NLP") ? <Sparkles size={18} className="text-sky-400" /> :
                   category.includes("Backend") ? <Database size={18} className="text-indigo-400" /> :
                   <Code2 size={18} className="text-emerald-400" />}
                  <span>{category}</span>
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/70 text-slate-200 border border-slate-750 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-24">
          {/* Education */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-2">
                <GraduationCap size={16} /> Academic Background
              </div>
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-slate-700 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white text-base">{edu.degree}</h3>
                    <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mb-2">{edu.institution}</p>
                  <div className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                    {edu.score}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-2">
                <Award size={16} /> Verifications
              </div>
              <h2 className="text-2xl font-bold text-white">Certifications</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/30 flex flex-col justify-between hover:border-slate-700 transition-colors"
                >
                  <div className="text-xs font-medium text-slate-200 mb-1">{cert.name}</div>
                  <div className="text-[11px] text-cyan-400/80 font-mono">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION / CONTACT */}
        <section id="contact" className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-slate-900/80 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let's Build Something Meaningful
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I am actively seeking roles and internships in Machine Learning, Deep Learning, and AI backend systems engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
            >
              <Mail size={18} />
              <span>{personalInfo.email}</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-sm transition-all cursor-pointer"
            >
              {copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="text-slate-400">
            Built with React, Vite & Tailwind CSS • Hosted on GitHub Pages
          </p>
        </div>
      </footer>
    </div>
  );
}
