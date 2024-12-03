import Header from "@/components/layout/Header";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#D1CDC7] min-h-screen">
      <Header />
      {children}
    </div>
  );
}
