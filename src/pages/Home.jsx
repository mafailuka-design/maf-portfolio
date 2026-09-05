import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section */}
      <About />

      {/* 3. Skills Section */}
      <Skills />

      {/* 4. Projects Section */}
      <Projects />

      {/* 5. Experience Section */}
      <Experience />

      {/* 6. Education Section */}
      <Education />

      {/* 7. Contact Section */}
      <Contact />
    </main>
  );
}
