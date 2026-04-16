import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Shaikh — AI Engineer",
  description: "Computer Science undergraduate specializing in AI/ML and cloud-based systems, with hands-on experience building LLM-powered applications and scalable full-stack platforms.",
  keywords: ["Ali Shaikh", "AI Engineer", "LLM", "Machine Learning", "Full Stack", "Mumbai"],
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
      <body>{children}</body>
    </html>
  );
}
