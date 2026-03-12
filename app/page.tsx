'use client';

import { motion } from 'framer-motion';
import Section1Slide from '@/components/Section1Slide';
import Section2Examples from '@/components/Section2Examples';
import Section3Ideas from '@/components/Section3Ideas';
import Section4Form from '@/components/Section4Form';

export default function Home() {
  const sections = [
    { id: 'section1', title: 'สไลด์นำเสนอ', bgColor: 'from-blue-500 to-purple-600' },
    { id: 'section2', title: 'ตัวอย่างเกม', bgColor: 'from-purple-600 to-pink-600' },
    { id: 'section3', title: 'ไอเดียเกม', bgColor: 'from-pink-600 to-red-600' },
    { id: 'section4', title: 'สร้างเกมของคุณ', bgColor: 'from-red-600 to-orange-600' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200"
      >
        <div className="container mx-auto px-4 py-4 flex justify-center gap-4">
          {sections.map((section, index) => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              className="px-4 py-2 rounded-lg text-slate-700 font-medium hover:bg-blue-50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {index + 1}. {section.title}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            animate={{
              backgroundImage: [
                'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
                'linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)',
                'linear-gradient(45deg, #fa709a 0%, #fee140 100%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            เอกสารการอบรม
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-slate-600 mb-8"
          >
            สร้างเกมด้วย AI - Lovable.dev
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#section1"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
            >
              เริ่มต้นเลย →
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 1: Canva Slide */}
      <section id="section1" className="min-h-screen py-20 px-4">
        <Section1Slide />
      </section>

      {/* Section 2: Examples */}
      <section id="section2" className="min-h-screen py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <Section2Examples />
      </section>

      {/* Section 3: Game Ideas */}
      <section id="section3" className="min-h-screen py-20 px-4 bg-gradient-to-br from-pink-50 to-red-50">
        <Section3Ideas />
      </section>

      {/* Section 4: Form */}
      <section id="section4" className="min-h-screen py-20 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <Section4Form />
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-slate-600">
        <p>สร้างด้วย Next.js + Framer Motion</p>
      </footer>
    </main>
  );
}
