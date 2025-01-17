import type { Metadata } from "next";
import "./globals.css";
import CustomNavbar from "@/components/shared/CustomNavbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Sudipta Das",
  description:
    "Hi, I'm Sudipta Das, a passionate Full Stack Web Developer specializing in the MERN stack. I'm seeking opportunities as a Full Stack Developer and excited to collaborate on impactful projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased mx-auto max-w-screen-ls bg-[#000]`}>
        <CustomNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
