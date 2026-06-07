import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nova — AI-Powered Lead Generation Representative",
  description:
    "Nova is an intelligent digital engagement assistant that communicates with your customers across all online channels. Convert digital conversations into qualified leads with AI.",
  keywords: ["AI chatbot", "lead generation", "customer engagement", "digital assistant", "Nova AI"],
  authors: [{ name: "Nova AI" }],
  openGraph: {
    title: "Nova — AI-Powered Lead Generation Representative",
    description:
      "Nova turns your digital space into an always-active customer engagement, support, and lead generation channel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" style={{ colorScheme: "dark" }}>
      <body className={`${inter.className} min-h-full flex flex-col bg-[#0a0a0f] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
