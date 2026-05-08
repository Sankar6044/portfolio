import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Send, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In <span className="text-neonPurple">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neonPurple to-neonBlue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-6">Let's work together!</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">
              I'm always open to discussing product design work or partnership opportunities. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-col gap-6">
              <a href="mailto:sankararumugam9444@gmail.com" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-neonBlue group-hover:bg-neonBlue group-hover:text-dark transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="text-sm text-gray-400 font-medium mb-1">Email Me</h5>
                  <p className="text-lg font-semibold text-white group-hover:text-neonBlue transition-colors">sankararumugam9444@gmail.com</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/sankar-aitech" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-neonPurple group-hover:bg-neonPurple group-hover:text-dark transition-all duration-300 shadow-[0_0_15px_rgba(176,38,255,0.2)] group-hover:shadow-[0_0_25px_rgba(176,38,255,0.6)]">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h5 className="text-sm text-gray-400 font-medium mb-1">LinkedIn</h5>
                  <p className="text-lg font-semibold text-white group-hover:text-neonPurple transition-colors">sankar-aitech</p>
                </div>
              </a>

              <a href="https://github.com/Sankar6044" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-white group-hover:bg-white group-hover:text-dark transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]">
                  <Github size={24} />
                </div>
                <div>
                  <h5 className="text-sm text-gray-400 font-medium mb-1">GitHub</h5>
                  <p className="text-lg font-semibold text-white group-hover:text-white transition-colors">Sankar6044</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="glass-card p-8 neon-border" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonPurple focus:ring-1 focus:ring-neonPurple transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue transition-all resize-none"
                  placeholder="Hello Sankar, I'd like to talk about..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 rounded-lg bg-gradient-to-r from-neonBlue to-neonPurple text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(176,38,255,0.6)] transition-all duration-300 group"
              >
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
