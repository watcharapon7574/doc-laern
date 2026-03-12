'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CopyIcon, CheckIcon } from './icons';

interface CopyButtonProps {
  text: string;
  label?: string;
}

export default function CopyButton({ text, label = "คัดลอก" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${
        copied
          ? 'bg-green-500 text-white'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {copied ? (
        <>
          <CheckIcon size={18} />
          คัดลอกแล้ว
        </>
      ) : (
        <>
          <CopyIcon size={18} />
          {label}
        </>
      )}
    </motion.button>
  );
}
