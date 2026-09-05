import { ArrowRight, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import profileImage from '../assets/maffff.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle background ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Column: Headline, Bio, and Action Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-slate-300 text-xs sm:text-sm font-medium shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for freelance & full-time roles</span>
          </div>

          {/* Main Headings */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-semibold tracking-wide text-indigo-400 uppercase">
              Hello, I'm Mafai Luka
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Frontend Developer crafting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
                exceptional web experiences.
              </span>
            </h1>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            I specialize in building accessible, high-performance web applications using{' '}
            <span className="text-slate-100 font-semibold">React</span> and{' '}
            <span className="text-slate-100 font-semibold">Tailwind CSS</span>.
            Passionate about clean architecture, responsive layouts, and turning complex problems into intuitive user interfaces.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all duration-200 group"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 active:scale-95 transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links & Quick Proof */}
          <div className="pt-4 flex items-center gap-5 text-slate-400">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
              Connect:
            </span>
            <a
              href="https://github.com/mafailuka-design"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mafai-luka-179062348/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74Z" />
              </svg>
            </a>
            <a
              href="mailto:mafailuka@gmail.com"
              aria-label="Send Email"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image Card & Floating Badges */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-72 sm:w-80 md:w-96">

            {/* Glowing Backdrop Frame */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-600 to-cyan-400 rounded-3xl blur-md opacity-40 group-hover:opacity-60 transition duration-500"></div>

            {/* Profile Card Container */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
              <img
                src={profileImage}
                alt="Mafai Luka - Frontend Developer"
                className="w-full h-80 sm:h-96 object-cover object-top hover:scale-105 transition-transform duration-500"
              />

              {/* Bottom Card Overlay Details */}
              <div className="p-4 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">Alex Rivera</h3>
                  <p className="text-xs text-indigo-400 font-medium">Frontend Engineer</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Dev</span>
                </div>
              </div>
            </div>

            {/* Floating Subtle Animation Badge */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 shadow-xl flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Focus Areas</p>
                <p className="text-xs sm:text-sm font-semibold text-white">React • UI/UX • Tailwind</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
