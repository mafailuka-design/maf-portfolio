import { Briefcase, Code2, Award, Clock, Sparkles } from 'lucide-react';

export default function About() {
  // Statistics data array for easy editing
  const stats = [
    {
      icon: Briefcase,
      value: '15+',
      label: 'Projects Completed',
      description: 'Production-ready apps and web interfaces',
    },
    {
      icon: Clock,
      value: '2+',
      label: 'Years Experience',
      description: 'Hands-on frontend development experience',
    },
    {
      icon: Code2,
      value: '10+',
      label: 'Tech Stack Tools',
      description: 'Modern libraries, frameworks & workflows',
    },
    {
      icon: Award,
      value: '100%',
      label: 'Code Quality',
      description: 'Accessible, semantic & responsive standards',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Driven by curiosity, dedicated to craft.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Here is a little background on who I am, what I love doing, and how I help transform complex ideas into intuitive web experiences.
          </p>
        </div>

        {/* Content Grid: Story on Left, Stats on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Introduction */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I am a passionate <span className="text-white font-semibold">Frontend Developer</span> based in modern web technologies. My journey began with a curiosity about how visually stunning websites work under the hood, which quickly grew into an obsession with building seamless, pixel-perfect user interfaces.
            </p>
            <p>
              Today, I specialize in the modern JavaScript ecosystem, with a core focus on <span className="text-indigo-400 font-medium">React</span> and <span className="text-cyan-400 font-medium">Tailwind CSS</span>. I bridge the gap between design and engineering—translating Figma mockups into accessible, responsive, and blazing-fast web applications.
            </p>
            <p>
              When I am not coding, you can find me exploring UI/UX design trends, experimenting with interactive CSS animations, contributing to open-source discussions, or refining my development workflow.
            </p>

            {/* Highlight Callout Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-indigo-950/40 border border-slate-800">
              <p className="text-sm italic text-slate-300">
                &ldquo;Great software isn't just about functional code—it is about creating an effortless and memorable journey for the person using it.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300 group shadow-lg shadow-black/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-600/20 transition-all duration-200">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm sm:text-base font-semibold text-white">
                    {stat.label}
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-snug">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
