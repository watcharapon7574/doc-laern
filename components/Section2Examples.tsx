'use client';

import { motion } from 'framer-motion';
import { GamepadIcon, DownloadIcon, TargetIcon, LightbulbIcon } from './icons';

export default function Section2Examples() {
  const examples = [
    {
      title: "ตัวอย่างที่ 1: เกมจับคู่เลขไทย-อารบิก",
      description: "ลากเส้นเชื่อมเลขไทยกับเลขอารบิก",
      whatToBuild: "เกมการศึกษาแบบโต้ตอบ (Educational Interactive Game)",
      howToPlay: "ลากเส้นเชื่อมระหว่างเลขไทยและเลขอารบิกที่ตรงกัน โดยสามารถลากจากซ้ายไปขวา หรือขวามาซ้ายก็ได้",
      content: "จับคู่ตัวเลขไทย (๑ ๒ ๓ ๔ ๕) กับตัวเลขอารบิก (1 2 3 4 5) ทั้งหมด 5 คู่ต่อหน้า รวม 3 หน้า",
      uiComponents: [
        "แสดงคะแนนที่มุมบนขวา เพื่อให้ผู้เล่นติดตามคะแนนที่ได้รับ",
        "มีเลข 5 คู่ต่อ 1 หน้า จำนวน 3 หน้า (รวม 15 คู่)",
        "ฝั่งซ้าย: แสดงเลขอารบิก (1, 2, 3, 4, 5)",
        "ฝั่งขวา: แสดงเลขไทย (๑, ๒, ๓, ๔, ๕)",
        "ระบบนับเวลาทำภารกิจ แสดงที่มุมบนซ้าย",
        "หน้าสรุปคะแนนตอนจบเกม พร้อมเวลาที่ใช้ทั้งหมด"
      ],
      database: "บันทึกสถิติการเล่น ประกอบด้วย: คะแนนที่ได้, เวลาที่ใช้, จำนวนครั้งที่ตอบผิด, และประวัติการเล่นทั้งหมด",
      improvements: [
        "เพิ่มความยืดหยุ่น: สามารถลากจากขวามาซ้ายได้ด้วย",
        "ระบบคะแนน: หักคะแนนเมื่อตอบผิด เพื่อเพิ่มความท้าทาย",
        "Cloud Sync: บันทึกข้อมูลสถิติลง Lovable Cloud อัตโนมัติ"
      ],
      demoUrl: "https://thai-num-match.lovable.app/",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "ตัวอย่างที่ 2: เกมตามหาผลไม้",
      description: "บังคับตัวละครไปเก็บผลไม้ในเขาวงกต",
      whatToBuild: "เกมผจญภัยแบบ 2D (2D Adventure Game)",
      howToPlay: "ใช้ปุ่ม D-pad หรือ Arrow Keys บังคับตัวละคร (ลิง) เดินไปในป่าผลไม้ เก็บกล้วย หลีกเลี่ยงสิงโต",
      content: "ควบคุมลิงให้เก็บผลไม้ (กล้วย) ให้ครบจำนวนที่กำหนดในแต่ละด่าน โดยหลีกเลี่ยงสิงโตที่เดินสุ่มในป่า",
      uiComponents: [
        "แสดงคะแนนที่มุมบนขวา",
        "ตัวละคร: ลิง (ผู้เล่นควบคุม)",
        "สิ่งของที่ต้องเก็บ: กล้วย - ด่าน 1 (2 ชิ้น), ด่าน 2 (3 ชิ้น), ด่าน 3 (4 ชิ้น)",
        "อุปสรรค: สิงโต 2 ตัวต่อด่าน (เดินสุ่มในแผนที่)",
        "แผนที่ขนาด 10x10 ช่อง (เขาวงกตป่าผลไม้)",
        "ระบบนับเวลาทำภารกิจ",
        "หน้าสรุปคะแนนและเวลาที่ใช้ตอนจบเกม"
      ],
      database: "บันทึกข้อมูล: ด่านที่ผ่าน, คะแนนสูงสุด, เวลาเร็วที่สุด, จำนวนครั้งที่โดนสิงโต, และสถิติการเล่นแต่ละด่าน",
      improvements: [],
      demoUrl: "https://fruit-quest-chase.lovable.app/",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "ตัวอย่างที่ 3: เกมพลิกการ์ดจับคู่",
      description: "พลิกการ์ดจับคู่ภาพผลไม้ที่เหมือนกัน",
      whatToBuild: "เกมจับคู่การ์ดแบบคลาสสิก (Memory Card Matching Game)",
      howToPlay: "คลิกพลิกการ์ดที่คว่ำหน้า 2 ใบในแต่ละครั้ง หากเจอภาพเหมือนกันจะได้คะแนนและการ์ดทั้งคู่จะหายไป",
      content: "จับคู่ภาพผลไม้ต่างๆ เช่น ส้ม มะพร้าว องุ่น แตงโม สับปะรด โดยแต่ละด่านจะมีจำนวนการ์ดเพิ่มขึ้นเรื่อยๆ",
      uiComponents: [
        "แสดงคะแนนที่มุมบนขวา",
        "ด่านที่ 1: การ์ดคว่ำหน้า 4 คู่ (8 ใบ) กดพลิกแล้วจะแสดงภาพผลไม้",
        "ด่านที่ 2: การ์ดคว่ำหน้า 6 คู่ (12 ใบ)",
        "ด่านที่ 3: การ์ดคว่ำหน้า 10 คู่ (20 ใบ)",
        "เมื่อจับคู่สำเร็จ: ได้คะแนน และการ์ดทั้งคู่หายไปด้วยอนิเมชั่น",
        "ระบบนับเวลาทำภารกิจ แสดงที่มุมบนซ้าย",
        "หน้าสรุปคะแนนและเวลาที่ใช้ตอนจบเกม"
      ],
      database: "บันทึกข้อมูล: คะแนนสูงสุดในแต่ละด่าน, เวลาเร็วที่สุด, จำนวนครั้งที่พลิกการ์ด, และอัตราความแม่นยำในการจับคู่",
      improvements: [],
      demoUrl: "https://fruit-flip-fun.lovable.app/",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const downloadUrl = "/doc/ตัวอย่างที่.docx";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto max-w-6xl"
    >
      <motion.h2
        className="text-5xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center gap-3"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <GamepadIcon size={48} className="text-blue-600" />
        ตัวอย่างเกม
      </motion.h2>

      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.a
          href={downloadUrl}
          download
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <DownloadIcon size={20} />
          ดาวน์โหลดไฟล์ตัวอย่างทั้งหมด (.docx)
        </motion.a>
      </motion.div>

      <div className="space-y-8">
        {examples.map((example, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gradient-to-r ${example.color} p-1 rounded-2xl`}
          >
            <div className="bg-white rounded-2xl p-6">
              <div className="flex justify-between items-start mb-3 gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-2">
                    {example.title}
                  </h3>
                  <p className="text-slate-600 text-lg">{example.description}</p>
                </div>
                {example.demoUrl && (
                  <motion.a
                    href={example.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:shadow-xl flex items-center gap-2 shrink-0 mt-1"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🎮 ทดลองเล่น
                  </motion.a>
                )}
              </div>

              <div className="mb-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-xl font-semibold text-blue-700 mb-2 flex items-center gap-2">
                  <TargetIcon size={24} className="text-blue-600" />
                  สร้างอะไร
                </h4>
                <p className="text-slate-700">{example.whatToBuild}</p>
              </div>

              <div className="mb-4 bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="text-xl font-semibold text-purple-700 mb-2 flex items-center gap-2">
                  <GamepadIcon size={24} className="text-purple-600" />
                  วิธีการเล่น
                </h4>
                <p className="text-slate-700">{example.howToPlay}</p>
              </div>

              <div className="mb-4 bg-pink-50 border border-pink-200 rounded-lg p-4">
                <h4 className="text-xl font-semibold text-pink-700 mb-2">📚 เนื้อหา</h4>
                <p className="text-slate-700">{example.content}</p>
              </div>

              <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="text-xl font-semibold text-green-700 mb-2">🎨 องค์ประกอบ UI</h4>
                <ul className="text-slate-700 space-y-1">
                  {example.uiComponents.map((component, i) => (
                    <li key={i}>• {component}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                <h4 className="text-xl font-semibold text-cyan-700 mb-2">☁️ ฐานข้อมูล Lovable Cloud</h4>
                <p className="text-slate-700">{example.database}</p>
              </div>

              {example.improvements.length > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="text-xl font-semibold text-yellow-700 mb-2 flex items-center gap-2">
                    <LightbulbIcon size={24} className="text-yellow-600" />
                    พร้อมแก้ไข
                  </h4>
                  <ul className="text-slate-700 space-y-1">
                    {example.improvements.map((improvement, i) => (
                      <li key={i}>• {improvement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
