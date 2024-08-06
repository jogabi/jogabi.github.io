import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
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
        <Navigation />
        <div id="container">
        {children}
          </div>
        </div>

      </body>
    </html>
  );
}
