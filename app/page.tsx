import type { Metadata } from "next";
import Home from "@/app/Home/page";
import { FC } from "react";
export const metadata: Metadata = {
  title: "Gilang Fatahilah",
  description: "Portfolio website of Gilang Fatahilah Akbar",
};

const HomePage: FC = () => {
  return <Home />;
};

export default HomePage;
