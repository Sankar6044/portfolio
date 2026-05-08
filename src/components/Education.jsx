import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My <span className="text-neonPurple">Education</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neonPurple to-neonBlue mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neonPurple via-neonBlue to-transparent"></div>

          {/* Education Item */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col md:flex-row items-center justify-between mb-12"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-10px] md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-dark border-4 border-neonPurple z-10 shadow-[0_0_15px_rgba(176,38,255,0.8)]"></div>

            {/* Content Left (Empty on desktop for alignment) */}
            <div className="hidden md:block w-5/12"></div>

            {/* Content Right */}
            <div className="w-full md:w-5/12 ml-6 md:ml-0 glass-card p-6 neon-border relative group">
              <div className="absolute -top-6 -right-6 text-white/5 group-hover:text-neonPurple/20 transition-colors duration-300">
                <GraduationCap size={100} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">B.Tech in Artificial Intelligence & Data Science</h3>
              
              <div className="flex flex-col gap-2 mb-4 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-neonBlue" />
                  <span>Rathinam Technical Campus – Coimbatore</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-neonBlue" />
                  <span>Current</span>
                </div>
              </div>
              
              <div className="inline-block px-4 py-2 rounded-lg bg-neonPurple/20 border border-neonPurple text-white font-semibold">
                CGPA: <span className="text-neonBlue">7.65</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
