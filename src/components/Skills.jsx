import { 
  FileCode, 
  Palette, 
  Code2, 
  Layers, 
  Sparkles, 
  GitBranch, 
  Smartphone, 
  Cpu 
} from 'lucide-react';

export default function Skills() {
  // Array of skill objects containing name, category, icon, and description
  const skills = [
    {
      name: 'HTML5',
      category: 'Markup & Structure',
      icon: FileCode,
      color: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
      description: 'Semantic markup, SEO best practices, and accessible web standards (ARIA).',
    },
    {
      name: 'CSS3',
      category: 'Styling & Design',
      icon: Palette,
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
      description: 'Modern styling with Flexbox, CSS Grid, custom properties, and smooth keyframe animations.',
    },
    {
      name: 'JavaScript',
      category: 'Core Language',
      icon: Code2,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      description: 'Modern ES6+ syntax, asynchronous programming, Fetch/REST APIs, and DOM manipulation.',
    },
    {
      name: 'React',
      category: 'Frontend Library',
      icon: Layers,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      description: 'Component-driven UI architecture, React Hooks, modular state management, and props workflow.',
    },
    {
      name: 'Tailwind CSS',
      category: 'Utility Styling',
      icon: Sparkles,
      color: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
      description: 'Rapid UI development with utility classes, custom themes, dark mode, and design consistency.',
    },
    {
      name: 'Git',
      category: 'Version Control',
      icon: GitBranch,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      description: 'Source code management, branching workflows, merging, rebasing, and version tracking.',
    },
    {
      name: 'GitHub',
      category: 'Collaboration',
      customIcon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      color: 'text-slate-300 bg-slate-800 border-slate-700',
      description: 'Collaborative development, pull requests, issue tracking, code reviews, and remote repositories.',
    },
    {
      name: 'Responsive Design',
      category: 'UI / UX Standards',
      icon: Smartphone,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      description: 'Mobile-first methodology ensuring optimal layout and usability on 320px mobile to 4K displays.',
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40 border-t border-slate-900">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            The core tools, languages, and methodologies I leverage daily to create reliable, modern, and accessible software.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900/90 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg shadow-black/10 flex flex-col justify-between"
              >
                <div>
                  {/* Skill Icon and Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${skill.color}`}>
                      {skill.customIcon ? skill.customIcon : <IconComponent className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-medium text-slate-400 bg-slate-800/70 border border-slate-700/60 px-2.5 py-1 rounded-full">
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Skill Description */}
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-indigo-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Proficient &amp; Active</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
