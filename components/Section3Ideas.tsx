'use client';

import { motion } from 'framer-motion';
import { LightbulbIcon, DownloadIcon, RocketIcon } from './icons';

export default function Section3Ideas() {
  const categories = [
    {
      title: "👆 1. การแตะ (Tap)",
      color: "from-green-400 to-green-600",
      difficulty: "easy",
      ideas: [
        { text: "Bubble Pop — แตะฟองสีที่ตรงโจทย์", color: "green" },
        { text: "Fruit Catcher — แตะผลไม้ที่ตกลงมาให้ถูกชนิด", color: "green" },
        { text: "Whack a Mole — แตะตัวละครที่โผล่ตามโจทย์", color: "green" },
        { text: "Star Collector — แตะดาวที่มีคำตอบถูกก่อนหายไป", color: "green" },
        { text: "Bug Squish — แตะแมลงที่มีตัวเลขตรงคำตอบ", color: "green" }
      ]
    },
    {
      title: "🤜 2. ลากวาง (Drag & Drop)",
      color: "from-blue-400 to-blue-600",
      difficulty: "easy",
      ideas: [
        { text: "Hungry Caterpillar — ลากอาหารใส่หนอน", color: "green" },
        { text: "Magic Potion — ลากขวดสีผสมกัน", color: "green" },
        { text: "Sorting Basket — ลากของใส่ตะกร้าที่ถูกหมวดหมู่", color: "green" },
        { text: "Puzzle Piece — ลากชิ้นส่วนต่อภาพให้สมบูรณ์", color: "green" },
        { text: "Dress Up — ลากเสื้อผ้าใส่ตัวละครตามโจทย์", color: "red" },
        { text: "Feed the Animal — ลากอาหารให้สัตว์แต่ละชนิด", color: "green" }
      ]
    },
    {
      title: "✏️ 3. โยงเส้น (Connect / Draw Line)",
      color: "from-yellow-400 to-yellow-600",
      difficulty: "medium",
      ideas: [
        { text: "Constellation — โยงดาวให้เป็นกลุ่มดาวตามที่กำหนด", color: "yellow" },
        { text: "Match the Pair — โยงเส้นจับคู่คำกับรูปภาพ", color: "green" },
        { text: "Circuit Board — โยงสายไฟให้หลอดไฟติด", color: "green" },
        { text: "Animal to Home — โยงสัตว์กับบ้านที่อยู่อาศัย", color: "green" },
        { text: "Number Bond — โยงตัวเลขที่บวกกันได้ตามโจทย์", color: "green" }
      ]
    },
    {
      title: "🕹️ 4. บังคับด้วยปุ่มเดิน (D-pad / Move)",
      color: "from-purple-400 to-purple-600",
      difficulty: "medium",
      ideas: [
        { text: "Maze Runner — บังคับตัวละครออกจากเขาวงกต", color: "yellow" },
        { text: "Collect the Letter — เดินเก็บตัวอักษรให้ครบคำ", color: "yellow" },
        { text: "Avoid the Wrong — เดินเก็บของถูก หลีกเลี่ยงของผิด", color: "yellow" },
        { text: "Path Finder — บังคับหุ่นยนต์เดินตามเส้นทางคณิตฯ", color: "yellow" },
        { text: "Garden Watering — บังคับกระป๋องน้ำไปรดต้นไม้ที่ถูกต้อง", color: "red" }
      ]
    },
    {
      title: "❓ 5. ถามตอบ (Q&A / Quiz)",
      color: "from-pink-400 to-pink-600",
      difficulty: "easy",
      ideas: [
        { text: "Tug of War — ตอบถูกดึงเชือก", color: "yellow" },
        { text: "Rocket Launch — ตอบถูกจรวดพุ่งขึ้น", color: "red" },
        { text: "Castle Builder — ตอบถูกก้อนหินบินมาสร้างปราสาท", color: "red" },
        { text: "Volcano — ตอบถูกลาวาไหล ครบแล้วระเบิด", color: "red" },
        { text: "Spin the Wheel — หมุนวงล้อได้เมื่อตอบถูก", color: "yellow" }
      ]
    },
    {
      title: "✋ 6. ลากเลื่อน (Swipe / Slide)",
      color: "from-red-400 to-red-600",
      difficulty: "medium",
      ideas: [
        { text: "Sort Left Right — swipe ซ้ายถ้าผิด ขวาถ้าถูก", color: "green" },
        { text: "Timeline Slide — เลื่อนเหตุการณ์เรียงลำดับ", color: "green" },
        { text: "Size Sorter — เลื่อน slider จัดขนาดเล็กไปใหญ่", color: "green" },
        { text: "Temperature Gauge — เลื่อนปรอทให้ตรงกับโจทย์", color: "green" }
      ]
    },
    {
      title: "⏱️ 7. จับเวลา (Timer Based)",
      color: "from-orange-400 to-orange-600",
      difficulty: "medium",
      ideas: [
        { text: "Speed Tap — แตะให้ถูกให้เร็วก่อนหมดเวลา", color: "green" },
        { text: "Memory Flash — จำภาพที่แฟลชมา แล้วเลือกให้ถูก", color: "green" },
        { text: "Countdown Cook — ทำตามสูตรอาหารก่อนเวลาหมด", color: "yellow" },
        { text: "Quick Sort — จัดหมวดหมู่ให้เร็วที่สุด", color: "green" }
      ]
    },
    {
      title: "🔄 8. หมุน / จัดเรียง (Rotate / Arrange)",
      color: "from-indigo-400 to-indigo-600",
      difficulty: "hard",
      ideas: [
        { text: "Spin to Match — หมุนวงล้อให้ตรงกับคำตอบ", color: "green" },
        { text: "Tangram — หมุนและจัดชิ้นส่วนให้เป็นรูปร่าง", color: "green" },
        { text: "Clock Hands — หมุนเข็มนาฬิกาให้ตรงเวลาที่โจทย์บอก", color: "green" },
        { text: "Compass Direction — หมุนเข็มทิศให้ถูกทิศทาง", color: "green" }
      ]
    },
    {
      title: "🫧 9. เป่า / กด (Press & Hold)",
      color: "from-cyan-400 to-cyan-600",
      difficulty: "hard",
      ideas: [
        { text: "Balloon Inflate — กดค้างเพื่อเป่าลูกโป่งให้ได้ขนาดตามโจทย์", color: "green" },
        { text: "Pump the Water — กดสูบน้ำให้เต็มถังตามจำนวน", color: "yellow" },
        { text: "Charge the Shot — กดค้างชาร์จพลัง ปล่อยตรงจังหวะ", color: "yellow" }
      ]
    },
    {
      title: "👁️ 10. จำและหา (Memory / Spot)",
      color: "from-teal-400 to-teal-600",
      difficulty: "easy",
      ideas: [
        { text: "Flip Card Memory — พลิกการ์ดจับคู่ภาพที่เหมือนกัน", color: "green" },
        { text: "Spot the Difference — หาความแตกต่างระหว่าง 2 ภาพ", color: "red" },
        { text: "Hidden Object — หาของที่ซ่อนอยู่ในภาพ", color: "red" },
        { text: "What Changed — จำภาพแล้วบอกว่าอะไรหายไป", color: "red" }
      ]
    }
  ];

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">🟢 ทำง่ายและดี</span>;
      case 'medium':
        return <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm">🟡 ปานกลาง</span>;
      case 'hard':
        return <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">🔴 ยากแต่แปลกใหม่</span>;
      default:
        return null;
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'yellow':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'red':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  const downloadUrl = "/ไอเดียการสร้างเกมผ่าน AI.pdf";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto max-w-6xl"
    >
      <motion.h2
        className="text-5xl font-bold text-slate-800 mb-4 text-center flex items-center justify-center gap-3"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <LightbulbIcon size={48} className="text-blue-600" />
        ไอเดียการสร้างเกมผ่าน AI
      </motion.h2>

      <motion.p
        className="text-center text-slate-600 text-lg mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        ไอเดียเกมแบ่งตามระดับความยาก: <span className="text-green-600">🟢 ง่าย</span> | <span className="text-yellow-600">🟡 ปานกลาง</span> | <span className="text-red-600">🔴 ยาก</span>
      </motion.p>

      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.a
          href={downloadUrl}
          download
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <DownloadIcon size={20} />
          ดาวน์โหลดไฟล์ไอเดียทั้งหมด (PDF)
        </motion.a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-br ${category.color} p-1 rounded-xl`}
          >
            <div className="bg-white rounded-xl p-6 h-full">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.ideas.map((idea, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`px-3 py-2 rounded-lg border ${getColorClass(idea.color)}`}
                  >
                    <span>{idea.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-slate-800 mb-4 text-center flex items-center justify-center gap-3">
          <RocketIcon size={36} className="text-purple-600" />
          พร้อมสร้างเกมของคุณแล้วหรือยัง?
        </h3>
        <p className="text-slate-700 text-center text-lg">
          เลือกไอเดียที่ชอบแล้วไปที่ Section 4 เพื่อเริ่มสร้างเกมกันเลย!
        </p>
      </motion.div>
    </motion.div>
  );
}
