import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "เอกสารการอบรม - Training Documentation",
  description: "เอกสารประกอบการอบรมสร้างเกมด้วย AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
