"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import Background from "@/components/Background";
import LoadingScreen from "@/components/Loading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({});
  }, []);

  const isSSExist = sessionStorage.getItem("loading");
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // useEffect(() => {
  //   console.log("running");
  // }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} overflow-y-scroll overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <Suspense
          fallback={<LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        >
          {isLoading && !isSSExist ? (
            <LoadingScreen onLoadingComplete={handleLoadingComplete} />
          ) : (
            <>
              <Navbar />
              <main className="h-full w-full">{children}</main>
              <Footer />
            </>
          )}
        </Suspense>
        <Background />
      </body>
    </html>
  );
}
