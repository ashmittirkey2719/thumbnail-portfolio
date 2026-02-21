import type { Metadata } from "next";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashmit Thumbs – High CTR YouTube Thumbnail Designer",
  description: "High-CTR thumbnails for creators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}