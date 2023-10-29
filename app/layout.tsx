import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brandon Nielsen | Web Developer",
  description: "Brandon Nielsen, web developer.",
};

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboto_mono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
