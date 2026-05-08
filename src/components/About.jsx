import { motion } from 'framer-motion';
import { Code2, Target, Zap, Trophy } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { icon: Trophy, label: "Projects Completed", value: "10+", color: "text-yellow-400" },
    { icon: Target, label: "Certifications", value: "5+", color: "text-neonBlue" },
    { icon: Code2, label: "Skills Learned", value: "15+", color: "text-neonPurple" },
    { icon: Zap, label: "Coding Hours", value: "500+", color: "text-green-400" },
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About <span className="text-neonBlue">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neonBlue to-neonPurple"></div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Brain className="text-neonBlue" /> Who am I?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I am a forward-learning B.Tech Artificial Intelligence and Data Science student with strong programming and web development skills. 
                Passionate about building scalable applications, solving real-world problems, and exploring AI-powered technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently, I am seeking opportunities to grow as a full stack developer and contribute to innovative engineering teams.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-2"
              >
                <div className={`p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <stat.icon size={32} />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Add Brain icon since it was missing in imports
import { Brain } from 'lucide-react';
