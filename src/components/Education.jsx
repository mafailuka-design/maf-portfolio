import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const certifications = [
    {
      title: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Meta / Coursera',
      year: '2024',
      skills: 'React, Component Architecture, UI/UX Principles, JavaScript',
    },
    {
      title: 'Responsive Web Design Certification',
      issuer: 'freeCodeCamp',
      year: '2023',
      skills: 'HTML5 Semantic Structure, Modern CSS Grid & Flexbox, Accessibility',
    },
    {
      title: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      year: '2023',
      skills: 'ES6+ Syntax, OOP, Functional Programming, Problem Solving',
    },
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950 border-t border-slate-900">
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; Certifications
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Academic qualifications and industry-recognized certifications that form the bedrock of my engineering skills.
          </p>
        </div>

        {/* Content Grid: Degree on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Degree Card (7 cols) */}
          <div className="lg:col-span-6 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-indigo-500/50 hover:bg-slate-900/90 transition-all duration-300 shadow-xl shadow-black/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-medium text-slate-300 mb-3">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>2020 — 2024</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-indigo-400 font-medium text-base mt-1">
                State University of Technology
              </p>

              <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
                Graduated with a comprehensive foundation in software engineering, computing systems, and interactive user interfaces.
              </p>

              {/* Core Coursework & Highlights */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Key Coursework &amp; Highlights</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures & Algorithms', 'Web Application Design', 'Human-Computer Interaction', 'Database Systems', 'Software Engineering'].map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Graduated with Honors • Capstone Distinction</span>
            </div>
          </div>

          {/* Certifications Card List (5 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-5 sm:p-6 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 group shadow-lg shadow-black/10 flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-slate-400">
                    <span className="text-slate-300 font-medium">Focus:</span> {cert.skills}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Credential Verified</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
