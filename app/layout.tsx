import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Shaikh — AI Engineer",
  description: "Computer Science undergraduate specializing in AI/ML and cloud-based systems, with hands-on experience building LLM-powered applications and scalable full-stack platforms.",
  keywords: ["Ali Shaikh", "AI Engineer", "LLM", "Machine Learning", "Full Stack", "Mumbai"],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Ali Shaikh — AI Engineer",
    description: "Building LLM-powered apps, RAG pipelines, and scalable AI systems. CS undergraduate based in Mumbai.",
    url: "https://ali-shaikh.vercel.app",
    siteName: "Ali Shaikh",
    images: [{ url: "/ali.png", width: 600, height: 600, alt: "Ali Shaikh" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Shaikh — AI Engineer",
    description: "Building LLM-powered apps, RAG pipelines, and scalable AI systems. CS undergraduate based in Mumbai.",
    images: ["/ali.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;500;600;700;800&family=Fira+Code:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: "window.history.scrollRestoration='manual';window.scrollTo(0,0);" }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
