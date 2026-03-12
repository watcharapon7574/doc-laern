'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { LinkIcon, DownloadIcon, InfoIcon } from './icons';
import QRCode from 'qrcode';

export default function Section5References() {
  const [qrInput, setQrInput] = useState('');
  const [qrDataURL, setQrDataURL] = useState('');
  const [qrType, setQrType] = useState<'url' | 'text' | 'email' | 'phone' | 'wifi'>('url');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const references = [
    {
      title: 'Lovable.dev - สร้างสื่อการสอน',
      url: 'https://lovable.dev/invite/3HWSP5E',
      description: 'แพลตฟอร์ม AI สำหรับสร้างเว็บแอปและสื่อการสอนแบบ interactive พร้อมโค้ดเชิญเพื่อรับเครดิตฟรีเพิ่ม',
      color: 'from-purple-500 to-pink-500',
      image: '/lovable.png'
    },
    {
      title: 'Laern Space - คลังสื่อการสอน',
      url: 'https://laern-space.vercel.app/',
      description: 'คลังสื่อการสอนของเรา ต้นกำเนิดของโครงการนี้ รวบรวมสื่อการเรียนรู้คุณภาพ',
      color: 'from-blue-500 to-cyan-500',
      image: '/laern-space.png'
    },
    {
      title: 'Get Emoji - อิโมจิสำหรับตกแต่ง',
      url: 'https://getemoji.com/',
      description: 'คลังอิโมจิครบครัน คัดลอกได้ทันที ใช้ตกแต่งเนื้อหาและสื่อการสอนให้น่าสนใจ',
      color: 'from-yellow-500 to-orange-500',
      icon: '😀'
    }
  ];

  const generateQRCode = async () => {
    if (!qrInput.trim() || !canvasRef.current) return;

    try {
      let qrData = qrInput;

      // Format data based on type
      if (qrType === 'email' && !qrInput.startsWith('mailto:')) {
        qrData = `mailto:${qrInput}`;
      } else if (qrType === 'phone' && !qrInput.startsWith('tel:')) {
        qrData = `tel:${qrInput}`;
      } else if (qrType === 'wifi') {
        // WiFi format: WIFI:S:<SSID>;T:<WPA|WEP|>;P:<password>;;
        // User should input in format: SSID,password,WPA
        const parts = qrInput.split(',');
        if (parts.length >= 2) {
          qrData = `WIFI:S:${parts[0]};T:${parts[2] || 'WPA'};P:${parts[1]};;`;
        }
      }

      // Generate QR code to canvas with high quality settings
      // Using 800px instead of 1200px for better Canva compatibility
      await QRCode.toCanvas(canvasRef.current, qrData, {
        errorCorrectionLevel: 'H',
        width: 800,
        margin: 4,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });

      // Convert canvas to uncompressed PNG data URL
      // Using toDataURL directly from canvas ensures proper PNG format
      const dataUrl = canvasRef.current.toDataURL('image/png');
      setQrDataURL(dataUrl);

    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const downloadQR = async () => {
    if (!qrDataURL || !canvasRef.current) return;

    // Create a new canvas to ensure clean PNG without metadata issues
    const cleanCanvas = document.createElement('canvas');
    const ctx = cleanCanvas.getContext('2d', {
      alpha: false,
      colorSpace: 'srgb'
    });

    if (!ctx) return;

    // Set dimensions
    cleanCanvas.width = canvasRef.current.width;
    cleanCanvas.height = canvasRef.current.height;

    // Fill with white background first (important for Canva)
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, cleanCanvas.width, cleanCanvas.height);

    // Draw the QR code
    ctx.drawImage(canvasRef.current, 0, 0);

    // Convert to blob with maximum quality
    cleanCanvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
      }
    }, 'image/png');
  };

  const qrTypes = [
    { value: 'url', label: 'URL/ลิงก์', placeholder: 'https://example.com' },
    { value: 'text', label: 'ข้อความ', placeholder: 'ข้อความใดก็ได้' },
    { value: 'email', label: 'อีเมล', placeholder: 'email@example.com' },
    { value: 'phone', label: 'เบอร์โทร', placeholder: '0812345678' },
    { value: 'wifi', label: 'WiFi', placeholder: 'ชื่อWiFi,รหัสผ่าน,WPA' }
  ];

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
        <LinkIcon size={48} className="text-blue-600" />
        แหล่งอ้างอิงและเครื่องมือ
      </motion.h2>

      <motion.p
        className="text-center text-slate-600 text-lg mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        ลิงก์และเครื่องมือที่มีประโยชน์สำหรับการสร้างสื่อการสอน
      </motion.p>

      {/* QR Code Generator */}
      <motion.div
        className="mb-12 bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-300 rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-slate-800 mb-2 text-center">
          📱 สร้าง QR Code ฟรี ไม่มีหมดอายุ
        </h3>
        <p className="text-center text-slate-600 mb-6">
          QR Code ถูกสร้างบนเบราว์เซอร์ของคุณโดยตรง ไม่ผ่านเซิร์ฟเวอร์ ดังนั้นจึงไม่มีวันหมดอายุ
        </p>

        {/* Hidden canvas for QR code generation */}
        <canvas ref={canvasRef} className="hidden" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-slate-800 font-semibold mb-2">
                ประเภทข้อมูล:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {qrTypes.map((type) => (
                  <motion.button
                    key={type.value}
                    onClick={() => setQrType(type.value as any)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      qrType === type.value
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-slate-700 hover:bg-indigo-50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {type.label}
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-slate-800 font-semibold mb-2">
                ข้อมูลที่ต้องการสร้าง QR Code:
              </label>
              <textarea
                value={qrInput}
                onChange={(e) => setQrInput(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-white text-slate-800 rounded-lg border border-slate-300 focus:border-indigo-400 focus:outline-none transition-colors"
                placeholder={qrTypes.find(t => t.value === qrType)?.placeholder}
              />
            </div>

            <motion.button
              onClick={generateQRCode}
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🎯 สร้าง QR Code
            </motion.button>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="flex items-center gap-2 text-blue-700 font-semibold mb-2">
                <InfoIcon size={20} className="text-blue-600" />
                ทำไม QR Code ไม่หมดอายุ?
              </h4>
              <ul className="text-slate-700 text-sm space-y-1">
                <li>• QR Code ถูกสร้างบนเบราว์เซอร์ของคุณ (Client-side)</li>
                <li>• ข้อมูลถูก encode ลงใน QR Code โดยตรง</li>
                <li>• ไม่ผ่านเซิร์ฟเวอร์ตัวกลาง ไม่มี redirect</li>
                <li>• แสกนแล้วไปที่ปลายทางโดยตรง ไม่พึ่งบริการใด ๆ</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            {qrDataURL ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-white p-6 rounded-2xl shadow-xl"
              >
                <img src={qrDataURL} alt="QR Code" className="w-full max-w-sm" />
                <motion.button
                  onClick={downloadQR}
                  className="w-full mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <DownloadIcon size={20} />
                  ดาวน์โหลด QR Code
                </motion.button>
              </motion.div>
            ) : (
              <div className="bg-white/50 p-12 rounded-2xl border-2 border-dashed border-slate-300 text-center">
                <p className="text-slate-500 text-lg">
                  📱 QR Code จะแสดงที่นี่
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  กรอกข้อมูลแล้วกดสร้าง
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Reference Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {references.map((ref, index) => (
          <motion.a
            key={index}
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-br ${ref.color} p-1 rounded-xl hover:shadow-2xl transition-shadow`}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-white rounded-xl p-6 h-full flex flex-col">
              {ref.image ? (
                <div className="mb-4 flex items-center justify-center h-32">
                  <img src={ref.image} alt={ref.title} className="max-h-full max-w-full object-contain" />
                </div>
              ) : (
                <div className="text-5xl mb-4 text-center">{ref.icon}</div>
              )}
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">
                {ref.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 text-center flex-grow">
                {ref.description}
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                <LinkIcon size={18} />
                <span>เปิดลิงก์</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="mt-12 bg-gradient-to-r from-green-100 to-blue-100 border border-green-300 rounded-2xl p-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-3">
          💡 เคล็ดลับการใช้งาน
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="font-semibold text-slate-800 mb-2">🎨 Lovable.dev</h4>
            <p className="text-slate-700 text-sm">
              ใช้โค้ดเชิญ <code className="bg-purple-100 px-2 py-1 rounded">3HWSP5E</code> เพื่อรับเครดิตฟรีเพิ่มสำหรับสร้างสื่อการสอน
            </p>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="font-semibold text-slate-800 mb-2">📱 QR Code</h4>
            <p className="text-slate-700 text-sm">
              สร้าง QR Code สำหรับแชร์ลิงก์, WiFi, หรือข้อมูลติดต่อให้นักเรียนได้อย่างสะดวก
            </p>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="font-semibold text-slate-800 mb-2">📚 Laern Space</h4>
            <p className="text-slate-700 text-sm">
              คลังสื่อการสอนที่รวบรวมแนวคิดและตัวอย่างสำหรับพัฒนาสื่อการเรียนรู้
            </p>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <h4 className="font-semibold text-slate-800 mb-2">😀 Get Emoji</h4>
            <p className="text-slate-700 text-sm">
              คัดลอกอิโมจิไปใช้ตกแต่งสื่อการสอนให้น่าสนใจและดึงดูดความสนใจ
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
