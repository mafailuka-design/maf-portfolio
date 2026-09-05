import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  // Timeline experiences array for easy updates
  const experiences = [
    {
      id: 1,
      role: 'Frontend Developer (Contract / Freelance)',
      company: 'Independent Clients & Agencies',
      period: '2024 — Present',
      location: 'Remote',
      type: 'Contract',
      description:
        'Architecting and delivering high-performance, accessible web interfaces for startups and digital businesses.',
      achievements: [
        'Built modern, mobile-first responsive web applications using React and Tailwind CSS.',
        'Integrated RESTful APIs and optimized client-side rendering speed, maintaining 95+ Lighthouse scores.',
        'Translated complex Figma UI/UX designs into pixel-perfect, accessible component systems.',
      ],
      technologies: ['React', 'Tailwind CSS', 'JavaScript (ES6+)', 'Vite', 'Git', 'REST APIs'],
      current: true,
    },
    {
      id: 2,
      role: 'Frontend Engineering Intern',
      company: 'Blockfuse Lab',
      period: '2026 — present',
      location: 'Blockfuse, Favwei, Rayfield Rd, Jos',
      type: 'Internship',
      description:
        'Contributed to the core user interface of an internal customer management portal.',
      achievements: [
        'Developed reusable UI components reducing code duplication across 4 dashboard modules.',
        'Identified and resolved mobile responsiveness bugs, reducing layout discrepancies by 40%.',
        'Actively participated in daily agile standups, pull request reviews, and sprint planning sessions.',
      ],
      technologies: ['React', 'CSS3 / Tailwind', 'JavaScript', 'GitHub', 'Agile / Scrum'],
      current: false,
    },
    {
      id: 3,
      role: 'Junior Web Developer',
      company: 'Community Solutions & Open Source',
      period: '2022 — 2023',
      location: 'Remote',
      type: 'Part-Time',
      description:
        'Created responsive web pages, interactive widgets, and optimized landing pages for small businesses.',
      achievements: [
        'Built accessible, semantic HTML5 and CSS3 websites with cross-browser compatibility.',
        'Streamlined site load times through asset optimization and modern CSS layouts (Flexbox/Grid).',
        'Maintained clean commit histories and collaborative workflows on GitHub.',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Git'],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/60 border-t border-slate-900">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            A chronological timeline of my hands-on experience developing web applications, collaborating in teams, and writing production code.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div 
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-4 border-slate-950 flex items-center justify-center transition-transform duration-300 group-hover:scale-125 ${
                  exp.current 
                    ? 'bg-indigo-500 ring-4 ring-indigo-500/20' 
                    : 'bg-slate-700 group-hover:bg-indigo-400'
                }`}
              >
                {exp.current && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                )}
              </div>

              {/* Experience Card */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-indigo-500/50 hover:bg-slate-900/90 transition-all duration-300 shadow-xl shadow-black/20">
                
                {/* Header Row: Role & Badges */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-base font-medium text-indigo-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Short Overview */}
                <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <ul className="mt-4 space-y-2.5">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-400 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Badges */}
                <div className="mt-6 pt-5 border-t border-slate-800/70 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
