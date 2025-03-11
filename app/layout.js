import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Outfit({subsets: ["latin"]});

export const metadata = {
  title: "v-xpense",
  description: "A simple expense tracker built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      
    <html lang="en">
      <body className={inter.className}>
        
      {children}</body>
    </html>
    </ClerkProvider>
  );
}