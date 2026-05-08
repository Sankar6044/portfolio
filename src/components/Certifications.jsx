import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle } from 'lucide-react';

const certificates = [
  "Microsoft Excel – Coursera",
  "UI/UX Design Workshop",
  "Innovation Through Design – Coursera",
  "Building RAG Apps Using MongoDB",
  "MongoDB Vector Search Certification"
];

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 relative z-10 bg-black/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Certifications & <span className="text-neonBlue">Achievements</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-xl border border-white/10 hover:border-neonBlue/50 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                <Award size={60} className="text-neonBlue" />
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle size={20} className="text-neonPurple" />
                </div>
                <h4 className="font-semibold text-lg text-gray-200 group-hover:text-white transition-colors">{cert}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
