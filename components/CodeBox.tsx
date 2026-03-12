'use client';

import { motion } from 'framer-motion';
import CopyButton from './CopyButton';

interface CodeBoxProps {
  title?: string;
  content: string;
}

export default function CodeBox({ title, content }: CodeBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-gray-100 rounded-lg p-6 my-4 shadow-lg"
    >
      <div className="flex justify-between items-center mb-4">
        {title && <h4 className="text-lg font-semibold text-blue-400">{title}</h4>}
        <CopyButton text={content} />
      </div>
      <pre className="overflow-x-auto text-sm">
        <code>{content}</code>
      </pre>
    </motion.div>
  );
}
