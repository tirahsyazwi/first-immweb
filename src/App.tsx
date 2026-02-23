import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'motion/react';
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

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const CLIENTS = [
  { name: "LogiTech", logo: "https://picsum.photos/seed/logo1/200/100" },
  { name: "FinEdge", logo: "https://picsum.photos/seed/logo2/200/100" },
  { name: "EcoPower", logo: "https://picsum.photos/seed/logo3/200/100" },
  { name: "GlobalHealth", logo: "https://picsum.photos/seed/logo4/200/100" },
  { name: "TechNova", logo: "https://picsum.photos/seed/logo5/200/100" },
  { name: "SkyNet", logo: "https://picsum.photos/seed/logo6/200/100" },
];

const Clientele = () => {
  return (
    <section className="py-20 bg-white/30 backdrop-blur-sm border-y border-brand-border overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-brand-muted font-bold text-sm uppercase tracking-[0.3em]">
          Trusted by Industry Leaders
        </p>
      </div>
      
      <div className="flex overflow-hidden group">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-20 items-center whitespace-nowrap px-10"
        >
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <div key={i} className="flex items-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
              <img src={client.logo} alt={client.name} className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
              <span className="text-2xl font-black text-brand-text/20">{client.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Use springs for smoother scroll-linked animations
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(smoothScrollY, [0, 500], [0, 200]);
  const y2 = useTransform(smoothScrollY, [0, 500], [0, -100]);
  const rotate = useTransform(smoothScrollY, [0, 500], [0, 5]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: y2 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-accent text-xs font-bold uppercase tracking-wider mb-6"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Trusted by Fortune 500 Companies</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-text leading-[1.1] mb-8 overflow-hidden">
            {["Strategic", "Excellence", "for", "the", "Digital", "Age."].map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + i * 0.1, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="inline-block mr-[0.2em]"
              >
                {word === "Digital" || word === "Age." ? (
                  <span className="text-brand-accent">{word}</span>
                ) : word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl text-brand-muted leading-relaxed mb-10 max-w-xl"
          >
            We partner with visionary leaders to solve their most complex challenges and drive sustainable growth through innovation and strategy.
          </motion.p>
          
          <div className="flex flex-wrap gap-4">
            <Magnetic>
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#1d4ed8',
                  boxShadow: "0 20px 25px -5px rgb(37 99 235 / 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-brand-accent text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-200"
              >
                Our Solutions
              </motion.button>
            </Magnetic>
            <Magnetic>
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#f1f5f9',
                  borderColor: '#2563eb'
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-brand-text border border-brand-border rounded-xl font-bold text-lg transition-all"
              >
                View Case Studies
              </motion.button>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ y: y1, rotate }}
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
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60" 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 7 }}
            className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-50 rounded-full blur-3xl opacity-60" 
          />
          
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
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-transparent to-transparent z-0" 
      />
    </section>
  );
};

const CaseStudyCard = ({ study, index }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], [50, -50]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl bg-brand-surface border border-brand-border transition-shadow duration-500"
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
      <div className="p-8 bg-white/80 backdrop-blur-md relative z-10">
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
      <div className="overflow-hidden">
        <motion.h3 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-black text-brand-text mb-6"
        >
          {title}
        </motion.h3>
      </div>
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
    <section id="solutions" className="py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -10,
                borderColor: '#2563eb',
                backgroundColor: '#ffffff',
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)"
              }}
              className="p-8 rounded-2xl bg-brand-surface border border-brand-border transition-all duration-300 group cursor-default"
            >
              <motion.div 
                whileHover={{ 
                  rotate: 15,
                  scale: 1.1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="w-14 h-14 bg-blue-50 text-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300"
              >
                <service.icon className="w-8 h-8" />
              </motion.div>
              <h4 className="text-xl font-bold text-brand-text mb-4 group-hover:text-brand-accent transition-colors">{service.title}</h4>
              <p className="text-brand-muted leading-relaxed group-hover:text-brand-text transition-colors">
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
    <section id="case-studies" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
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
    <section id="about" className="py-32 overflow-hidden relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
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
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-xl rounded-[3rem] overflow-hidden shadow-2xl border border-brand-border flex flex-col md:flex-row">
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
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-20 border-t border-brand-border relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 text-2xl font-bold tracking-tight mb-6 cursor-pointer"
            >
              <Building2 className="w-8 h-8 text-brand-accent" />
              <span>AURA<span className="text-brand-accent">CONSULTING</span></span>
            </motion.div>
            <p className="text-brand-muted text-lg max-w-sm">
              Empowering global enterprises through strategic innovation and data-driven excellence since 2008.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-brand-text mb-6 uppercase tracking-wider text-sm">Solutions</h4>
            <ul className="space-y-4 text-brand-muted">
              {['Strategy', 'Technology', 'Operations', 'Risk'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 5, color: '#2563eb' }}
                    className="transition-colors inline-block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-text mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-brand-muted">
              {['About Us', 'Case Studies', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 5, color: '#2563eb' }}
                    className="transition-colors inline-block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-8 text-brand-muted text-sm font-medium">
          <p>© 2024 AURA CONSULTING GROUP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <motion.a 
                key={item}
                href="#" 
                whileHover={{ color: '#0f172a' }}
                className="transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="flex gap-4">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <motion.a 
                key={i} 
                href="#" 
                whileHover={{ y: -3, color: '#2563eb' }}
                className="transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Slightly longer duration for smoother feel
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
      
      {/* Immersive Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: [0, 150, -100, 0],
            y: [0, 100, 50, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, 90, 180, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[15%] -left-[15%] w-[50%] h-[50%] bg-blue-200/20 rounded-full blur-[140px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -120, 80, 0],
            y: [0, 150, -50, 0],
            scale: [1, 1.2, 1.1, 1],
            rotate: [0, -45, 45, 0]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] -right-[10%] w-[45%] h-[45%] bg-indigo-100/30 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, 80, -80, 0],
            y: [0, -100, 100, 0],
            scale: [1, 0.9, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[15%] left-[15%] w-[40%] h-[40%] bg-blue-50/40 rounded-full blur-[130px]"
        />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-slate-100/10 rounded-full blur-[150px]"
        />
      </div>

      <main className="relative z-10">
        <Hero />
        <Clientele />
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
