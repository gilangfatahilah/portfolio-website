import React, { FC } from "react";
import { HomeMain, HomeExtra } from "./section";

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-20">
      <HomeMain />
      <HomeExtra />
    </div>
  );
};

export default Home;
