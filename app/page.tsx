import { About } from '@/components/sections/about';
import { Architecture } from '@/components/sections/architecture';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="bg-page-gradient bg-grid">
        <Hero />
        <About />
        <Projects />
        <Architecture />
        <Contact />
      </div>
    </main>
  );
}
import { Navbar } from '@/components/sections/navbar';
