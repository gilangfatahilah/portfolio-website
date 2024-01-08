import type { Metadata } from "next";
import Home from "@/app/Home/page";
import { FC } from "react";
export const metadata: Metadata = {
  title: "Gilang Fatahilah",
  description:
    "Gilang Fatahilah is a Front-End software engineer specializes in building (and sometimes designing) amazing and new digital experiences.",
};

const HomePage: FC = () => {
  return <Home />;
};

export default HomePage;
