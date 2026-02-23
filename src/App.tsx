import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import { 
  ArrowRight, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Menu, 
  X,
  Instagram,
  CheckCircle2,
  BarChart3,
  Globe2,
  ShieldCheck,
  Users2,
  Building2
} from 'lucide-react';
import { cn } from './utils';

type CaseStudy = {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Global Supply Chain Optimization",
    client: "LogiTech Corp",
    category: "Strategic Consulting",
    image: "https://picsum.photos/seed/corporate1/1200/800"
  },
  {
    id: 2,
    title: "Digital Transformation Strategy",
    client: "FinEdge Bank",
    category: "Technology",
    image: "https://picsum.photos/seed/corporate2/1200/800"
  },
  {
    id: 3,
    title: "Sustainable Energy Transition",
    client: "EcoPower Global",
    category: "Operations",
    image: "https://picsum.photos/seed/corporate3/1200/800"
  }
];

const SERVICES = [
  {
    title: "Strategic Advisory",
    description: "Helping organizations navigate complex market dynamics with data-driven insights.",
    icon: BarChart3
  },
  {
    title: "Digital Transformation",
    description: "Modernizing legacy infrastructure to drive efficiency and innovation.",
    icon: Globe2
  },
  {
    title: "Risk Management",
    description: "Comprehensive security and compliance frameworks for global enterprises.",
    icon: ShieldCheck
  },
  {
    title: "Organizational Design",
    description: "Optimizing human capital and operational structures for peak performance.",
    icon: Users2
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
      isScrolled ? "bg-white/90 backdrop-blur-md py-4 border-b border-brand-border" : "bg-transparent"
    )}>
      <div 
        className="flex items-center gap-2 text-xl font-bold tracking-tight cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Building2 className="w-8 h-8 text-brand-accent" />
        <span>AURA<span className="text-brand-accent">CONSULTING</span></span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-semibold text-brand-muted">
        {['Solutions', 'Case Studies', 'About', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="hover:text-brand-accent transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        <button className="px-6 py-2.5 bg-brand-accent text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-brand-text"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-brand-border p-8 flex flex-col gap-6 md:hidden overflow-hidden shadow-xl"
          >
            {['Solutions', 'Case Studies', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-brand-text hover:text-brand-accent transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="w-full py-3 bg-brand-accent text-white rounded-lg font-bold">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-surface">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-accent text-xs font-bold uppercase tracking-wider mb-6">
            <CheckCircle2 className="w-4 h-4" />
            <span>Trusted by Fortune 500 Companies</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-text leading-[1.1] mb-8">
            Strategic Excellence for the <span className="text-brand-accent">Digital Age.</span>
          </h1>
          <p className="text-xl text-brand-muted leading-relaxed mb-10 max-w-xl">
            We partner with visionary leaders to solve their most complex challenges and drive sustainable growth through innovation and strategy.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-brand-accent text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Our Solutions
            </button>
            <button className="px-8 py-4 bg-white text-brand-text border border-brand-border rounded-xl font-bold text-lg hover:bg-brand-surface transition-all">
              View Case Studies
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/corp-hero/1000/1200" 
              alt="Corporate Hero" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-50 rounded-full blur-3xl opacity-60" />
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-1/4 -left-12 glass p-6 rounded-2xl shadow-xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-brand-muted font-bold uppercase">Growth Rate</p>
                <p className="text-xl font-black text-brand-text">+124%</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 -skew-x-12 translate-x-1/4 z-0" />
    </section>
  );
};

const CaseStudyCard = ({ study, index }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl bg-brand-surface border border-brand-border"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <motion.img 
          style={{ y, scale: 1.2 }}
          src={study.image} 
          alt={study.title}
          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8 bg-white relative z-10">
        <p className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-2">{study.category}</p>
        <h4 className="text-2xl font-bold text-brand-text mb-4">{study.title}</h4>
        <div className="flex justify-between items-center">
          <span className="text-brand-muted font-medium">Client: {study.client}</span>
          <button className="flex items-center gap-2 text-brand-accent font-bold group/btn">
            Read More
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const SectionHeading = ({ subtitle, title, description, centered = false }: { subtitle: string; title: string; description?: string; centered?: boolean }) => {
  return (
    <div className={cn("max-w-3xl mb-20", centered ? "mx-auto text-center" : "")}>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-brand-accent font-bold text-sm tracking-widest uppercase mb-4"
      >
        {subtitle}
      </motion.p>
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-black text-brand-text mb-6"
      >
        {title}
      </motion.h3>
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-brand-muted"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

const Solutions = () => {
  return (
    <section id="solutions" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Our Expertise"
          title="Comprehensive Solutions for Complex Challenges"
          description="We provide a broad range of services designed to help your organization thrive in an ever-changing global landscape."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-brand-surface border border-brand-border card-shadow-hover group"
            >
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-14 h-14 bg-blue-50 text-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300"
              >
                <service.icon className="w-8 h-8" />
              </motion.div>
              <h4 className="text-xl font-bold text-brand-text mb-4">{service.title}</h4>
              <p className="text-brand-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-32 bg-brand-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <SectionHeading 
            subtitle="Case Studies"
            title="Proven Results for Global Leaders"
            centered={false}
          />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white border border-brand-border rounded-xl font-bold text-brand-text hover:bg-brand-surface transition-all mb-20 md:mb-0"
          >
            View All Projects
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <img src="https://picsum.photos/seed/team1/400/500" className="rounded-2xl shadow-lg" alt="Team" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/team2/400/300" className="rounded-2xl shadow-lg" alt="Team" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 pt-12"
            >
              <img src="https://picsum.photos/seed/team3/400/300" className="rounded-2xl shadow-lg" alt="Team" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/team4/400/500" className="rounded-2xl shadow-lg" alt="Team" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
          <motion.div 
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 12 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-accent rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-8 border-white z-20"
          >
            <span className="text-4xl font-black">15+</span>
            <span className="text-xs font-bold uppercase">Years Exp.</span>
          </motion.div>
        </div>
        
        <div>
          <SectionHeading 
            subtitle="Our Firm"
            title="Driven by Data, Inspired by Excellence."
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6 text-lg text-brand-muted leading-relaxed"
          >
            <p>
              Aura Consulting was founded on the principle that strategy should be actionable, measurable, and human-centric. We don't just deliver reports; we deliver transformation.
            </p>
            <p>
              Our global team of experts brings together diverse perspectives from across industries to provide holistic solutions that stand the test of time.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-3xl font-black text-brand-text mb-1">500+</p>
                <p className="text-sm font-bold text-brand-muted uppercase">Projects Completed</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-3xl font-black text-brand-text mb-1">40+</p>
                <p className="text-sm font-bold text-brand-muted uppercase">Global Markets</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-brand-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-brand-border flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 lg:p-20 bg-brand-text text-white">
            <h2 className="text-4xl font-black mb-8">Ready to transform your business?</h2>
            <p className="text-slate-400 text-lg mb-12">
              Schedule a consultation with our senior partners and discover how we can help you achieve your strategic goals.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contact@auraconsulting.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Globe2 className="w-5 h-5" />
                </div>
                <span>Global Headquarters, London</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-12 lg:p-20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-text mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-text mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-text mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all">
                  <option>Strategic Advisory</option>
                  <option>Digital Transformation</option>
                  <option>Risk Management</option>
                  <option>Organizational Design</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-text mb-2">Message</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all h-32" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full py-4 bg-brand-accent text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-white border-t border-brand-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight mb-6">
              <Building2 className="w-8 h-8 text-brand-accent" />
              <span>AURA<span className="text-brand-accent">CONSULTING</span></span>
            </div>
            <p className="text-brand-muted text-lg max-w-sm">
              Empowering global enterprises through strategic innovation and data-driven excellence since 2008.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-brand-text mb-6 uppercase tracking-wider text-sm">Solutions</h4>
            <ul className="space-y-4 text-brand-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Strategy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Operations</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Risk</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-text mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-brand-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-8 text-brand-muted text-sm font-medium">
          <p>© 2024 AURA CONSULTING GROUP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-text transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-text transition-colors">Cookie Policy</a>
          </div>
          <div className="flex gap-4">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-brand-accent transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
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
    <div className="relative bg-brand-bg min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Solutions />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      
      <Footer />

      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.015] mix-blend-multiply">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}
