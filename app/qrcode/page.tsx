'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'qrcode';

// Icon components
const DownloadIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const InfoIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

export default function QRCodePage() {
  const [qrInput, setQrInput] = useState('');
  const [qrDataURL, setQrDataURL] = useState('');
  const [qrType, setQrType] = useState<'url' | 'text' | 'email' | 'phone' | 'wifi'>('url');
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold text-slate-800 mb-4">
            📱 QR Code Generator
          </h1>
          <p className="text-xl text-slate-600">
            สร้าง QR Code ฟรี ไม่มีหมดอายุ ใช้งานได้ตลอดไป
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          {/* Hidden canvas for QR code generation */}
          <canvas ref={canvasRef} className="hidden" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Input section */}
            <div className="space-y-6">
              <div>
                <label className="block text-slate-800 font-semibold text-lg mb-3">
                  ประเภทข้อมูล:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {qrTypes.map((type) => (
                    <motion.button
                      key={type.value}
                      onClick={() => setQrType(type.value as any)}
                      className={`px-4 py-3 rounded-xl font-medium transition-all ${
                        qrType === type.value
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
                <label className="block text-slate-800 font-semibold text-lg mb-3">
                  ข้อมูลที่ต้องการสร้าง QR Code:
                </label>
                <textarea
                  value={qrInput}
                  onChange={(e) => setQrInput(e.target.value)}
                  rows={6}
                  className="w-full px-5 py-4 bg-slate-50 text-slate-800 rounded-xl border-2 border-slate-200 focus:border-indigo-400 focus:outline-none transition-colors text-lg"
                  placeholder={qrTypes.find(t => t.value === qrType)?.placeholder}
                />
              </div>

              <motion.button
                onClick={generateQRCode}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                🎯 สร้าง QR Code
              </motion.button>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
                <h4 className="flex items-center gap-2 text-blue-700 font-semibold mb-3">
                  <InfoIcon size={20} />
                  ทำไม QR Code ไม่หมดอายุ?
                </h4>
                <ul className="text-slate-700 space-y-2">
                  <li>• QR Code ถูกสร้างบนเบราว์เซอร์ของคุณ (Client-side)</li>
                  <li>• ข้อมูลถูก encode ลงใน QR Code โดยตรง</li>
                  <li>• ไม่ผ่านเซิร์ฟเวอร์ตัวกลาง ไม่มี redirect</li>
                  <li>• แสกนแล้วไปที่ปลายทางโดยตรง ไม่พึ่งบริการใด ๆ</li>
                </ul>
              </div>
            </div>

            {/* Right side - QR Code display */}
            <div className="flex flex-col items-center justify-center">
              {qrDataURL ? (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="w-full"
                >
                  <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-2xl shadow-xl">
                    <img
                      src={qrDataURL}
                      alt="QR Code"
                      className="w-full rounded-xl shadow-lg"
                    />
                  </div>
                  <motion.button
                    onClick={downloadQR}
                    className="w-full mt-6 inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-xl hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <DownloadIcon size={24} />
                    ดาวน์โหลด QR Code
                  </motion.button>
                </motion.div>
              ) : (
                <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 p-16 rounded-2xl border-4 border-dashed border-slate-300 text-center">
                  <p className="text-slate-500 text-2xl font-medium mb-3">
                    📱 QR Code จะแสดงที่นี่
                  </p>
                  <p className="text-slate-400 text-lg">
                    กรอกข้อมูลแล้วกดสร้าง
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Tips section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-300 rounded-3xl p-8"
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">
            💡 เคล็ดลับการใช้งาน
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/80 rounded-xl p-5">
              <h4 className="font-bold text-slate-800 mb-2 text-lg">🔗 URL/ลิงก์</h4>
              <p className="text-slate-700">
                ใส่ URL เต็ม เช่น https://example.com เพื่อให้ลิงก์ทำงานได้ทันทีเมื่อสแกน
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-5">
              <h4 className="font-bold text-slate-800 mb-2 text-lg">📧 อีเมล</h4>
              <p className="text-slate-700">
                ใส่อีเมล แล้วระบบจะเปิดแอปอีเมลพร้อมที่อยู่อัตโนมัติ
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-5">
              <h4 className="font-bold text-slate-800 mb-2 text-lg">📱 เบอร์โทร</h4>
              <p className="text-slate-700">
                ใส่เบอร์โทร แล้วระบบจะเปิดแอปโทรศัพท์พร้อมหมายเลขทันที
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-5">
              <h4 className="font-bold text-slate-800 mb-2 text-lg">📶 WiFi</h4>
              <p className="text-slate-700">
                ใส่ตามรูปแบบ: ชื่อWiFi,รหัสผ่าน,WPA เพื่อให้เชื่อมต่อได้อัตโนมัติ
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-5">
              <h4 className="font-bold text-slate-800 mb-2 text-lg">💾 ดาวน์โหลด</h4>
              <p className="text-slate-700">
                QR Code ที่สร้างมีคุณภาพสูง 800x800px เหมาะสำหรับพิมพ์
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-5">
              <h4 className="font-bold text-slate-800 mb-2 text-lg">🎨 ใช้งาน</h4>
              <p className="text-slate-700">
                QR Code ที่สร้างเป็น PNG สามารถนำไปใช้ใน Canva หรือโปรแกรมออกแบบอื่น ๆ ได้
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
