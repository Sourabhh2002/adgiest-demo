import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

const regioMono = localFont({
  src: "../../public/assets/fonts/RegioMono-Regular.otf",
  variable: "--font-regioMono",
  display: "swap",
});

const regioMonoBold = localFont({
  src: "../../public/assets/fonts/RegioMono-Bold.otf",
  variable: "--font-regioMonoBold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adgeist - Demo",
  description: "This is a simple homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${regioMono.variable} ${regioMonoBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
