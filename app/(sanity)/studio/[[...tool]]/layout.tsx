import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and skills.",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default Layout;
