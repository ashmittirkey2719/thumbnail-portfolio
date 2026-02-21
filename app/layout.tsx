import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


export const metadata: Metadata = {
  title: "Ashmit Thumbs – High CTR YouTube Thumbnail Designer",
  description:
    "I design high-CTR YouTube & Instagram thumbnails that force clicks.",
  verification: {
    google: "JLr-0UCjd2nYtMQZz636_p5xYNdULfoBx-0HnChuFdY",
  },
  openGraph: {
    title: "Ashmit Thumbs – Thumbnail Designer",
    description: "High-CTR thumbnails for creators.",
    images: ["/thumbnails/thumb1.png"],
    type: "website",
  },
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

        {/* Premium Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
