import dynamic from "next/dynamic";

export const HomeMain = dynamic(() => import("./main"));
export const HomeExtra = dynamic(() => import("./extra"));
