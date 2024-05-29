import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { ModalProvider } from "@/components/modal-provider";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400']
});

export const metadata: Metadata = {
  title: "Rachel",
  description: "Made By Qazi Adan",
};

export const viewport: Viewport = {
  width: 'device-width',
  userScalable: false,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <ModalProvider />
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
