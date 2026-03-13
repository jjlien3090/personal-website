import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeremy Lien — CS & EE @ University of Michigan",
  description:
    "Personal portfolio of Jeremy Lien, a Computer Science student at the University of Michigan specializing in VLSI design, FPGA prototyping, and GPU-accelerated systems.",
  keywords: ["VLSI", "FPGA", "computer engineering", "portfolio", "University of Michigan", "microprocessor"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
