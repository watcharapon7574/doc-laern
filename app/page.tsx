'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section1Slide from '@/components/Section1Slide';
import Section2Examples from '@/components/Section2Examples';
import Section3Ideas from '@/components/Section3Ideas';
import Section4Form from '@/components/Section4Form';
import Section5References from '@/components/Section5References';

export default function Home() {
  const [selectedIdea, setSelectedIdea] = useState<{what: string, how: string} | null>(null);

  const sections = [
    { id: 'section1', title: 'สไลด์นำเสนอ', bgColor: 'from-blue-500 to-purple-600' },
    { id: 'section2', title: 'ตัวอย่างเกม', bgColor: 'from-purple-600 to-pink-600' },
    { id: 'section3', title: 'สร้างเกมของคุณ', bgColor: 'from-pink-600 to-red-600' },
    { id: 'section4', title: 'ไอเดียเกม', bgColor: 'from-red-600 to-orange-600' },
    { id: 'section5', title: 'แหล่งอ้างอิง', bgColor: 'from-orange-600 to-yellow-600' },
  ];

  const handleIdeaClick = (ideaText: string, mechanicTitle: string) => {
    setSelectedIdea({ what: ideaText, how: mechanicTitle });
    // Scroll to form section
    document.getElementById('game-form')?.scrollIntoView({ behavior: 'smooth' });
  };

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
          {/* Logo - ไม่มีการ์ด ขนาดใหญ่ */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <motion.img
              src="/laern-space.png?v=3"
              alt="AI EDUGAME ONLINE - Laern Space"
              className="w-[960px] h-auto md:w-[1800px] md:h-auto object-contain max-w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.h1
            className="text-2xl md:text-4xl font-bold text-white mb-6"
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

      {/* Section 3: Form */}
      <section id="section3" className="min-h-screen py-20 px-4 bg-gradient-to-br from-pink-50 to-red-50">
        <Section4Form selectedIdea={selectedIdea} onIdeaApplied={() => setSelectedIdea(null)} />
      </section>

      {/* Section 4: Game Ideas */}
      <section id="section4" className="min-h-screen py-20 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <Section3Ideas onIdeaClick={handleIdeaClick} />
      </section>

      {/* Section 5: References */}
      <section id="section5" className="min-h-screen py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <Section5References />
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-slate-800 font-semibold text-lg">
              พัฒนาและออกแบบโดย
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ครูวัชรพล
            </p>
            <p className="text-slate-600 flex items-center justify-center gap-2">
              <span>📞</span>
              <a href="tel:0925717574" className="hover:text-blue-600 transition-colors">
                092-571-7574
              </a>
            </p>
            <p className="text-slate-500 text-sm mt-4">
              เว็บไซต์นี้ถูกสร้างด้วย Next.js, TypeScript, Tailwind CSS และ Framer Motion
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
