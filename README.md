# 📚 เอกสารประกอบการอบรม - Training Documentation

เว็บไซต์เอกสารประกอบการอบรมสำหรับการสร้างเกมด้วย AI ผ่าน Lovable.dev

## ✨ Features

- 📊 **Section 1**: แสดงสไลด์นำเสนอจาก Canva (แบบฝัง iframe)
- 🎮 **Section 2**: ตัวอย่างเกม 3 แบบพร้อมรายละเอียด และดาวน์โหลดไฟล์ .docx
- 💡 **Section 3**: ไอเดียการสร้างเกม 10 ประเภท แบ่งตามระดับความยาก พร้อมดาวน์โหลดไฟล์ .docx
- 🎯 **Section 4**: ฟอร์มกรอกรายละเอียดเกม พร้อมปุ่มคัดลอก Prompt ที่รวม Technical Requirements จาก lovable-prompt.md

## 🎨 UI/UX Features

- ✅ Smooth scroll navigation
- ✅ Framer Motion animations
- ✅ Gradient backgrounds
- ✅ Responsive design
- ✅ Dark theme
- ✅ Interactive buttons with hover effects
- ✅ Single page application with sections

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. ติดตั้ง dependencies:
\`\`\`bash
npm install
\`\`\`

2. รัน development server:
\`\`\`bash
npm run dev
\`\`\`

3. เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
doc-laern/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page with 4 sections
│   └── globals.css      # Global styles
├── components/
│   ├── CopyButton.tsx         # Reusable copy button
│   ├── CodeBox.tsx            # Code display with copy button
│   ├── Section1Slide.tsx      # Canva slide section
│   ├── Section2Examples.tsx   # Game examples section
│   ├── Section3Ideas.tsx      # Game ideas section
│   └── Section4Form.tsx       # Form with copy prompt feature
├── doc/
│   ├── lovable-prompt.md                    # Technical requirements
│   ├── ตัวอย่างที่.docx                      # Example games
│   └── ไอเดียการสร้างเกมผ่าน AI.docx       # Game ideas
├── public/
│   ├── ตัวอย่างที่.docx                      # Downloadable file
│   └── ไอเดียการสร้างเกมผ่าน AI.docx       # Downloadable file
└── package.json
\`\`\`

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI**: Custom components with gradient effects

## 📖 Usage

### Section Navigation

เว็บมี navigation bar ด้านบนที่สามารถกดไปยังแต่ละ section ได้:

1. สไลด์นำเสนอ
2. ตัวอย่างเกม
3. ไอเดียเกม
4. สร้างเกมของคุณ

### การใช้งาน Section 4

1. กรอกรายละเอียดเกมในฟอร์ม:
   - สร้างอะไร
   - วิธีการเล่น
   - เนื้อหา
   - อื่นๆ (UI components, ฐานข้อมูล ฯลฯ)

2. ดูตัวอย่าง prompt ที่จะถูกคัดลอก

3. กดปุ่ม "คัดลอก Prompt ทั้งหมด"

4. ไปที่ [lovable.dev](https://lovable.dev) และวาง prompt

5. รอ AI สร้างเกมให้คุณ!

## 📥 Downloadable Files

เว็บมีไฟล์ให้ดาวน์โหลด:
- `ตัวอย่างที่.docx` - ตัวอย่างเกม 3 แบบ
- `ไอเดียการสร้างเกมผ่าน AI.docx` - ไอเดียเกม 10 ประเภท

## 🎯 Key Features Explained

### Auto-append Lovable Prompt

เมื่อกดปุ่มคัดลอก ระบบจะรวม:
1. ข้อมูลที่กรอกในฟอร์ม
2. เนื้อหา Technical Requirements จาก `lovable-prompt.md` ต่อท้ายโดยอัตโนมัติ

สิ่งนี้ช่วยให้ผู้เข้าอบรมไม่ต้องคัดลอก 2 ส่วนแยกกัน

## 📝 License

This project is for educational purposes.

## 🤝 Contributing

สร้างโดย Claude Code สำหรับการอบรม

---

สร้างด้วย ❤️ โดย Next.js + Framer Motion
