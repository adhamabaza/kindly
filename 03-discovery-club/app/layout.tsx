import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kindergarten | The Discovery Club",
  description: "Bright beginnings, learning and everyday care. Bilingual kindergarten design 02 private preview.",
  robots: { index: false, follow: false },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
