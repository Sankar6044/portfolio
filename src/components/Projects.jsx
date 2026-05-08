import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: "Quiz Games Application",
    description: "Built multiple interactive console-based quiz and game applications including Number Guessing, Multiplication Quiz, and General Knowledge Quiz. Features user interaction, input validation, and gamification concepts.",
    tech: ["Java", "Python"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Sankar6044",
    demo: "#"
  },
  {
    title: "Guess the Number Game",
    description: "An interactive logic-based game where users guess randomly generated numbers with an iterative feedback system. Includes edge case handling and strict input validation.",
    tech: ["Java"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Sankar6044",
    demo: "#"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-neonPurple">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neonPurple to-neonBlue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 neon-border flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-neonBlue/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neonBlue transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-neonPurple">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-neonBlue transition-colors">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm font-medium text-white hover:text-neonPurple transition-colors ml-auto">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
