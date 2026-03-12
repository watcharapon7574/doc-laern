'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TargetIcon, CopyIcon, CheckIcon, InfoIcon } from './icons';

export default function Section4Form() {
  const defaultExample = `ตัวอย่างที่ 1
สร้างอะไร : สร้างเกม
วิธีการเล่น : ลากเส้น ข้ามไป 2 ฝั่ง
เนื้อหา : จับคู่เลขไทยกับเลขอารบิก

องค์ประกอบ UI :
1) บนขวา บอกคะแนน เพื่อให้ผู้เล่นได้เห็นคะแนนที่ได้
2) มีเลข 5 คู่ ต่อ 1 หน้า จำนวน 3 หน้า เพื่อไม่ให้โจทย์เยอะจนเกินไป
3) มีสรุปคะแนนที่ได้ เพื่อสรุปคะแนนที่ได้ทั้งหมดตอนจบเกม
4) นับเวลาที่ทำภารกิจ เพื่อใช้ในการสรุปเวลาที่ทำภารกิจทั้งหมด

ฐานข้อมูล Lovable Cloud : ให้บันทึกข้อมูล สถิติการเล่นและจัดอันดับ`;

  const [formData, setFormData] = useState({
    what: 'สร้างเกม',
    how: 'ลากเส้น ข้ามไป 2 ฝั่ง',
    content: 'จับคู่เลขไทยกับเลขอารบิก',
    uiComponents: `องค์ประกอบ UI :
1) บนขวา บอกคะแนน เพื่อให้ผู้เล่นได้เห็นคะแนนที่ได้
2) มีเลข 5 คู่ ต่อ 1 หน้า จำนวน 3 หน้า
3) มีสรุปคะแนนที่ได้
4) นับเวลาที่ทำภารกิจ`,
    database: 'บันทึกข้อมูล สถิติการเล่นและจัดอันดับ'
  });

  const [copied, setCopied] = useState(false);

  const lovablePrompt = `# Technical Requirements

- React with Framer Motion for all animations using spring physics,
  never use linear or CSS transition

## 🎨 Visual Art & Image Generation (CRITICAL)

- **DO NOT use inline SVG to draw characters, food, animals, backgrounds,
  or any illustrated artwork.** SVG path drawing produces ugly, low-quality
  results that ruin the visual experience.
- **ALL illustrated visuals** (characters, food items, animals, backgrounds,
  UI decorations, icons that need to look hand-drawn or cartoon-style)
  **MUST be generated using Lovable AI image generation** in a colorful,
  child-friendly cartoon illustration style.
- This includes but is not limited to:
  - Character sprites and mascots
  - Food illustrations
  - Background scenes and environments
  - Decorative elements and borders
  - Any visual that is meant to look "drawn" or "illustrated"
- Simple geometric UI elements (buttons, cards, progress bars, containers)
  may use CSS/HTML styling — these do not need image generation.
- Emoji may be used as supplementary decoration only, never as primary
  game artwork.
- No placeholder shapes, no colored circles pretending to be characters,
  no SVG approximations of real objects.

## Audio

- All sounds generated via Web Audio API, no external audio files needed

## Feedback & Effects

- Particle burst effect on every correct answer
- Haptic feedback via \`navigator.vibrate(40)\` on correct
  and \`navigator.vibrate([50, 30, 50])\` on incorrect
- Brief screen flash on correct answer (soft green)
  and incorrect answer (soft red), opacity 0.3, duration 300ms

## Animation

- Continuous idle animation loop on all characters at all times
- All drag interactions must use \`dragElastic: 0.2\`
  and spring physics with \`bounceStiffness\` for natural feel
- Smooth 60fps animations throughout

## Interaction

- Touch and mouse support, minimum tap/drag target 44px

## Layout

- Fully responsive for iPad landscape and portrait

## Dependency Rules

- No external images (all visuals via AI image generation or CSS)
- No external audio files
- No external dependencies beyond React and Framer Motion`;

  const generatePrompt = () => {
    return `สร้างอะไร : ${formData.what}
วิธีการเล่น : ${formData.how}
เนื้อหา : ${formData.content}

${formData.uiComponents}

ฐานข้อมูล Lovable Cloud : ${formData.database}

---

${lovablePrompt}`;
  };

  const handleCopy = async () => {
    const fullPrompt = generatePrompt();
    await navigator.clipboard.writeText(fullPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto max-w-4xl"
    >
      <motion.h2
        className="text-5xl font-bold text-slate-800 mb-4 text-center flex items-center justify-center gap-3"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <TargetIcon size={48} className="text-blue-600" />
        สร้างเกมของคุณ
      </motion.h2>

      <motion.p
        className="text-center text-slate-600 text-lg mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        กรอกรายละเอียดเกมของคุณ แล้วคัดลอกไปวางที่ <span className="text-blue-600 font-bold">lovable.dev</span>
      </motion.p>

      {/* Learning Units Categories */}
      <motion.div
        className="mb-8 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-300 rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-slate-800 mb-3 text-center">
          📚 หน่วยการเรียนรู้
        </h3>
        <p className="text-center text-slate-600 mb-6">
          เลือกหน่วยการเรียนรู้ที่ต้องการสร้างเกม เพื่อให้ครูแต่ละคนทราบว่าตัวเองต้องทำเนื้อหาอะไร
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { unit: 'โรงเรียนของเรา', room: 'ห้องลูกเจี๊ยบ', location: 'หน่วยสระโบสถ์', color: 'from-red-400 to-pink-400' },
            { unit: 'ร่างการของเรา', room: 'ห้องกระต่าย', location: 'หน่วยท่าหลวง', color: 'from-orange-400 to-amber-400' },
            { unit: 'ฤดูกาลหรรษา', room: 'ห้องสิงโต', location: 'หน่วยโคกเจริญ', color: 'from-yellow-400 to-lime-400' },
            { unit: 'ครอบครัวของฉัน', room: 'ห้องแพนด้า', location: 'หน่วยเมืองลพบุรี', color: 'from-green-400 to-emerald-400' },
            { unit: 'อาหารดีมีประโยชน์', room: 'ห้องจิงโจ้', location: 'หน่วยบ้านหมี่', color: 'from-teal-400 to-cyan-400' },
            { unit: 'สัตว์โลกน่ารัก', room: 'ห้องยีราฟ', location: 'หน่วยลำสนธิ', color: 'from-cyan-400 to-blue-400' },
            { unit: 'ยานพาหนะและความปลอดภัย', room: 'ห้องเต่าน้อย', location: 'หน่วยท่าวุ้ง', color: 'from-blue-400 to-indigo-400' },
            { unit: 'เรารักเมืองไทย', room: '', location: 'หน่วยพัฒนานิคม', color: 'from-indigo-400 to-purple-400' },
            { unit: 'กีฬาเพื่อสุขภาพ', room: 'ห้องเพนกวิน', location: '', color: 'from-purple-400 to-fuchsia-400' },
            { unit: 'ลพบุรีน่าอยู่', room: '', location: 'หน่วยหนองม่วง', color: 'from-pink-400 to-rose-400' },
            { unit: 'หนูน้อยพอเพียง', room: 'โคกสำโรง', location: 'หน่วยชัยบาดาล', color: 'from-rose-400 to-red-400' },
            { unit: 'อาชีพในฝัน', room: 'ห้องช้างน้อย', location: '', color: 'from-amber-400 to-orange-400' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-r ${item.color} p-1 rounded-xl`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className={`bg-gradient-to-br ${item.color} text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-800 mb-1 text-base">
                      {item.unit}
                    </h4>
                    <div className="space-y-1 text-sm">
                      {item.room && (
                        <p className="text-slate-600">
                          <span className="font-semibold">🏫</span> {item.room}
                        </p>
                      )}
                      {item.location && (
                        <p className="text-slate-600">
                          <span className="font-semibold">📍</span> {item.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mb-8 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-2xl p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-3">
          💡 ยังไม่มีไอเดีย?
        </h3>
        <p className="text-slate-700 text-lg mb-4">
          ไปดูไอเดียเกมที่ Section 4 เพื่อหาแรงบันดาลใจ!
        </p>
        <motion.a
          href="#section4"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-xl transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ดูไอเดียเกม →
        </motion.a>
      </motion.div>

      <motion.div
        className="bg-gradient-to-br from-orange-100 to-red-100 border border-orange-300 rounded-2xl p-8 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-orange-700 mb-6">📝 กรอกข้อมูลเกม</h3>

        <div className="space-y-6">
          <div>
            <label className="block text-slate-800 font-semibold mb-2">
              สร้างอะไร :
            </label>
            <input
              type="text"
              value={formData.what}
              onChange={(e) => setFormData({ ...formData, what: e.target.value })}
              className="w-full px-4 py-3 bg-white text-slate-800 rounded-lg border border-slate-300 focus:border-orange-400 focus:outline-none transition-colors"
              placeholder="เช่น สร้างเกม"
            />
          </div>

          <div>
            <label className="block text-slate-800 font-semibold mb-2">
              วิธีการเล่น :
            </label>
            <input
              type="text"
              value={formData.how}
              onChange={(e) => setFormData({ ...formData, how: e.target.value })}
              className="w-full px-4 py-3 bg-white text-slate-800 rounded-lg border border-slate-300 focus:border-orange-400 focus:outline-none transition-colors"
              placeholder="เช่น ลากเส้น ข้ามไป 2 ฝั่ง"
            />
          </div>

          <div>
            <label className="block text-slate-800 font-semibold mb-2">
              เนื้อหา :
            </label>
            <input
              type="text"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-4 py-3 bg-white text-slate-800 rounded-lg border border-slate-300 focus:border-orange-400 focus:outline-none transition-colors"
              placeholder="เช่น จับคู่เลขไทยกับเลขอารบิก"
            />
          </div>

          <div>
            <label className="block text-slate-800 font-semibold mb-2">
              องค์ประกอบ UI :
            </label>
            <textarea
              value={formData.uiComponents}
              onChange={(e) => setFormData({ ...formData, uiComponents: e.target.value })}
              rows={8}
              className="w-full px-4 py-3 bg-white text-slate-800 rounded-lg border border-slate-300 focus:border-orange-400 focus:outline-none transition-colors font-mono text-sm"
              placeholder="เช่น 1) บนขวา บอกคะแนน&#10;2) มีเลข 5 คู่ ต่อ 1 หน้า&#10;3) มีสรุปคะแนนที่ได้"
            />
          </div>

          <div>
            <label className="block text-slate-800 font-semibold mb-2">
              ฐานข้อมูล Lovable Cloud :
            </label>
            <textarea
              value={formData.database}
              onChange={(e) => setFormData({ ...formData, database: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 bg-white text-slate-800 rounded-lg border border-slate-300 focus:border-cyan-400 focus:outline-none transition-colors"
              placeholder="เช่น บันทึกข้อมูล สถิติการเล่นและจัดอันดับ"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white border border-green-300 rounded-2xl p-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-green-700 mb-4">👁️ ตัวอย่าง Prompt ที่จะถูกคัดลอก</h3>
        <div className="bg-slate-50 rounded-lg p-4 mb-4 max-h-96 overflow-y-auto border border-slate-200">
          <pre className="text-slate-700 text-sm whitespace-pre-wrap font-mono">
            {generatePrompt()}
          </pre>
        </div>

        <div className="flex justify-center">
          <motion.button
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-lg transition-all ${
              copied
                ? 'bg-green-500 text-white'
                : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-2xl'
            }`}
            whileHover={{ scale: copied ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {copied ? (
              <>
                <CheckIcon size={24} />
                คัดลอกแล้ว! นำไปวางที่ lovable.dev
              </>
            ) : (
              <>
                <CopyIcon size={24} />
                คัดลอก Prompt ทั้งหมด
              </>
            )}
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <h4 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
          <InfoIcon size={24} className="text-blue-600" />
          วิธีใช้งาน
        </h4>
        <ol className="text-slate-700 space-y-2 list-decimal list-inside">
          <li>กรอกรายละเอียดเกมของคุณในฟอร์มด้านบน</li>
          <li>กดปุ่ม "คัดลอก Prompt ทั้งหมด"</li>
          <li>ไปที่ <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-700">lovable.dev</a></li>
          <li>วาง (Paste) prompt ที่คัดลอกไว้</li>
          <li>รอ AI สร้างเกมให้คุณ!</li>
        </ol>
      </motion.div>
    </motion.div>
  );
}
