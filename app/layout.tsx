import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XThreadShot — Turn X posts into share-ready images",
  description:
    "A Chrome extension that snaps any X (Twitter) post or thread into a clean, on-brand image, right from your timeline. No web app, no clutter, no stitching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
