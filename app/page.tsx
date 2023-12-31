"use client";

import React, { Suspense, useState } from "react";
import Homes from "@/pages/home";
import HomeExtra from "@/pages/home/HomeExtra";
import LoadingScreen from "@/components/Loading";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <main className="h-full w-full">
      <Suspense
        fallback={<LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      >
        {isLoading ? (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        ) : (
          <div className="flex flex-col gap-20">
            <Navbar />
            <Homes />
            <HomeExtra />
          </div>
        )}
      </Suspense>
    </main>
  );
}
