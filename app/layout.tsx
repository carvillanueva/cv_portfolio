import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Toaster } from "@/components/ui/toaster";
// vercel analytics
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // specify the weights you want to include
});

export const metadata: Metadata = {
  title: "Carlos Villanueva | Software Engineer",
  description: "Carlos Villanueva's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(poppins.className, "antialiased bg-[#F9F9F9]")}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
