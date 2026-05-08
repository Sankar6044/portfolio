import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, Download, ArrowRight, Code, Database, Cpu, Brain, Layers } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const floatingIcons = [
    { Icon: Code, color: "text-blue-400", delay: 0 },
    { Icon: Database, color: "text-green-400", delay: 1 },
    { Icon: Cpu, color: "text-purple-400", delay: 2 },
    { Icon: Brain, color: "text-pink-400", delay: 1.5 },
    { Icon: Layers, color: "text-yellow-400", delay: 0.5 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Particles/Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonBlue/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonPurple/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div variants={itemVariants}>
            <span className="px-4 py-2 rounded-full border border-neonBlue/30 bg-neonBlue/10 text-neonBlue text-sm font-medium inline-block mb-4">
              AI & Data Science Student
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-2">
              Hi, I'm <br />
              <span className="text-gradient">SANKAR A</span>
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-gray-300 h-[40px]">
              <Typewriter
                words={[
                  'Java Developer',
                  'AI Enthusiast',
                  'Full Stack Learner',
                  'Problem Solver',
                  'Future Software Engineer'
                ]}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-lg leading-relaxed">
            I build scalable applications, solve real-world problems, and explore AI-powered technologies. 
            Passionate about crafting premium user experiences and robust backend systems.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-neonBlue text-dark font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.8)] transition-all duration-300 flex items-center gap-2 group">
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 hover:border-neonPurple hover:text-neonPurple hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all duration-300 flex items-center gap-2">
              <Download size={20} />
              Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 mt-6">
            {[
              { icon: Github, href: "https://github.com/Sankar6044" },
              { icon: Linkedin, href: "https://linkedin.com/in/sankar-aitech" },
              { icon: Mail, href: "mailto:sankararumugam9444@gmail.com" }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:border-neonBlue hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300 hover:-translate-y-1"
              >
                <social.icon size={22} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Abstract 3D / Floating elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:flex justify-center items-center h-[500px]"
        >
          {/* Main glowing orb */}
          <div className="relative w-72 h-72 rounded-full border border-white/10 glass flex items-center justify-center animate-blob shadow-[0_0_40px_rgba(176,38,255,0.2)]">
            <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-neonBlue to-neonPurple opacity-20 blur-xl animate-pulse"></div>
            <Brain className="absolute text-white/50 w-32 h-32" strokeWidth={1} />
          </div>

          {/* Floating tech icons */}
          {floatingIcons.map((item, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut"
              }}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + (i % 2) * 60}%`,
              }}
            >
              <item.Icon className={item.color} size={28} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
