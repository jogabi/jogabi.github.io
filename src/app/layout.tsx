import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LeftMenu from "@/components/LeftMenu";
import "@/styles/style.scss";
import "@/styles/reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jogabi blog",
  description: "gabi blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="wrap">
        <LeftMenu />
        <div id="container">
        {children}
          </div>
          </div>

      </body>
    </html>
  );
}
