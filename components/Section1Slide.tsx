'use client';

import { motion } from 'framer-motion';
import { PresentationIcon, LinkIcon, InfoIcon } from './icons';

export default function Section1Slide() {
  const canvaUrl = "https://www.canva.com/design/DAHDofIA3RA/Too9-VjVsWaP-XVevdZZAQ/view?utm_content=DAHDofIA3RA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5d80ca275a";
  const embedUrl = "https://www.canva.com/design/DAHDofIA3RA/Too9-VjVsWaP-XVevdZZAQ/view?embed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto max-w-6xl"
    >
      <motion.h2
        className="text-5xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center gap-3"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <PresentationIcon size={48} className="text-blue-600" />
        สไลด์นำเสนอ
      </motion.h2>

      <motion.div
        className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden mb-4 border border-slate-300">
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            title="Canva Presentation"
          />
        </div>

        <div className="flex justify-center gap-4">
          <motion.a
            href={canvaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkIcon size={20} />
            เปิดสไลด์แบบเต็มหน้าจอ
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-blue-700 mb-3 flex items-center gap-2">
          <InfoIcon size={28} className="text-blue-600" />
          คำแนะนำ
        </h3>
        <ul className="text-slate-700 space-y-2">
          <li>• คลิกปุ่มด้านบนเพื่อเปิดสไลด์แบบเต็มหน้าจอ</li>
          <li>• ใช้ลูกศรซ้าย-ขวาบนคีย์บอร์ดเพื่อเลื่อนสไลด์</li>
          <li>• กด ESC เพื่อออกจากโหมดเต็มหน้าจอ</li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
