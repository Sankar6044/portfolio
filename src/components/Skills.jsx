import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillsData = {
  "Programming": [
    { name: "Java", level: 85 },
    { name: "Python", level: 80 }
  ],
  "Web Dev": [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 }
  ],
  "Database": [
    { name: "SQL", level: 75 }
  ],
  "Tools": [
    { name: "Git", level: 80 },
    { name: "GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Excel", level: 80 }
  ],
  "Soft Skills": [
    { name: "Problem Solving", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Team Collaboration", level: 85 },
    { name: "Fast Learning", level: 95 },
    { name: "Adaptability", level: 90 },
    { name: "Analytical Thinking", level: 85 }
  ]
};

const categories = Object.keys(skillsData);

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Programming");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Technical & Soft <span className="text-neonBlue">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
                activeCategory === cat 
                  ? 'bg-neonBlue text-dark border-neonBlue shadow-[0_0_15px_rgba(0,240,255,0.5)]' 
                  : 'bg-white/5 text-gray-300 border-white/10 hover:border-neonBlue/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 group hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-semibold text-white group-hover:text-neonBlue transition-colors">{skill.name}</h4>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-neonPurple">{skill.level}%</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-dark rounded-full h-2 overflow-hidden border border-white/5">
                    <motion.div 
                      className="bg-gradient-to-r from-neonBlue to-neonPurple h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
