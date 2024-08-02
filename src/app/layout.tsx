import type { Metadata } from "next";
import LeftMenu from "@/components/LeftMenu";
import "@/styles/style.scss";
import "@/styles/reset.css";


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
      <body >
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
