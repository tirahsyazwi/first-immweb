import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import { 
  ArrowUpRight, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Menu, 
  X,
  Instagram
} from 'lucide-react';
import { CustomCursor } from './components/CustomCursor';
import { cn } from './utils';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  color: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NEON VELOCITY",
    category: "Automotive / WebGL",
    image: "https://picsum.photos/seed/neon/1200/800",
    color: "#f27d26"
  },
  {
    id: 2,
    title: "SILVER LINING",
    category: "Fashion / Editorial",
    image: "https://picsum.photos/seed/silver/1200/800",
    color: "#a1a1a1"
  },
  {
    id: 3,
    title: "URBAN PULSE",
    category: "Architecture / 3D",
    image: "https://picsum.photos/seed/urban/1200/800",
    color: "#3b82f6"
  },
  {
    id: 4,
    title: "KINETIC FLOW",
    category: "Motion / Identity",
    image: "https://picsum.photos/seed/kinetic/1200/800",
    color: "#10b981"
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-all duration-500",
      isScrolled ? "bg-brand-bg/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent"
    )}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-black tracking-tighter cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        AURA<span className="text-brand-accent">.</span>
      </motion.div>
      
      <div className="hidden md:flex gap-12 text-sm font-medium tracking-widest uppercase">
        {['Work', 'About', 'Contact'].map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="hover:text-brand-accent transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent transition-all duration-300 group-hover:w-full" />
          </motion.a>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2"
      >
        {isOpen ? <X /> : <Menu />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-brand-bg border-b border-white/10 p-8 flex flex-col gap-6 md:hidden overflow-hidden"
          >
            {['Work', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold uppercase tracking-tighter hover:text-brand-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-6"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-brand-accent font-mono text-sm tracking-[0.3em] uppercase mb-6"
        >
          Digital Experience Designer
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[15vw] md:text-[12vw] leading-[0.85] font-black uppercase tracking-tighter"
        >
          CRAFTING<br />
          <span className="text-stroke">DIGITAL</span><br />
          MOTION
        </motion.h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.2, duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-bg/50 to-brand-bg" />
        <img 
          src="https://picsum.photos/seed/hero/1920/1080?blur=10" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] opacity-50">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-brand-accent to-transparent"
        />
      </motion.div>
    </section>
  );
};

function ProjectCard({ project, index }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity }}
      className="group relative aspect-[16/10] md:aspect-[16/8] overflow-hidden rounded-2xl bg-zinc-900"
    >
      <motion.img 
        style={{ scale: 1.1, y }}
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
        referrerPolicy="no-referrer"
      />
      
      <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
        <div className="flex justify-between items-end">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-brand-accent font-mono text-xs tracking-widest uppercase mb-2">
              {project.category}
            </p>
            <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
              {project.title}
            </h3>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 45 }}
            className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300"
          >
            <ArrowUpRight className="w-8 h-8" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

const Work = () => {
  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none"
        >
          SELECTED<br />WORKS
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-xs text-zinc-400 text-lg leading-relaxed"
        >
          A collection of digital experiences focused on high-end performance and aesthetic precision.
        </motion.p>
      </div>

      <div className="grid gap-12 md:gap-24">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square rounded-2xl overflow-hidden"
        >
          <img 
            src="https://picsum.photos/seed/portrait/800/800" 
            alt="Portrait" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border-[20px] border-brand-bg/20" />
        </motion.div>
        
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
          >
            THE MIND<br />BEHIND THE<br /><span className="text-brand-accent">MOTION</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6 text-xl text-zinc-400 leading-relaxed"
          >
            <p>
              I am a digital designer and developer based in the intersection of art and technology. My work focuses on creating immersive experiences that feel as good as they look.
            </p>
            <p>
              With over 8 years of experience in the industry, I've collaborated with global brands to push the boundaries of what's possible on the web.
            </p>
            <div className="pt-8 flex gap-6">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#f27d26' }}
                  className="p-3 rounded-full border border-white/10 hover:border-brand-accent/50 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-none">
          LET'S BUILD<br />SOMETHING<br /><span className="text-stroke">LEGENDARY</span>
        </h2>
        
        <div className="flex flex-col items-center gap-8">
          <motion.a
            href="mailto:hello@aura.design"
            whileHover={{ scale: 1.05 }}
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-brand-accent text-white rounded-full text-2xl font-bold overflow-hidden"
          >
            <span className="relative z-10">GET IN TOUCH</span>
            <Mail className="relative z-10 w-8 h-8" />
            <motion.div 
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ type: 'tween' }}
            />
            <style>{`
              .group:hover span, .group:hover svg { color: black; }
            `}</style>
          </motion.a>
          
          <p className="text-zinc-500 font-mono tracking-widest">
            AVAILABLE FOR FREELANCE & COLLABORATIONS
          </p>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-500 text-sm font-mono">
        <p>© 2024 AURA DESIGN STUDIO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
          <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
        </div>
        <p>BUILT WITH PASSION & MOTION</p>
      </div>
    </footer>
  );
};

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  
  return (
    <div ref={containerRef} className="relative bg-brand-bg min-h-screen selection:bg-brand-accent selection:text-white">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      
      <Footer />

      {/* Background Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
}
