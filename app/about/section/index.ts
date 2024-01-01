import dynamic from "next/dynamic";

export const AboutHeader = dynamic(() => import("./header"));
export const AboutExperience = dynamic(() => import("./experience"));
// // export const AboutExperienceSection = dynamic(
// //   () => import("./ExperienceSection")
// // );
// // export const AboutTechstackSection = dynamic(
// //   () => import("./TechstackSection")
// // );
// // export const AboutToolusedSection = dynamic(() => import("./ToolusedSection"));
