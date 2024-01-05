import {
  htmlIcon,
  cssIcon,
  jsIcon,
  bootstrapIcon,
  tailwindIcon,
  reactIcon,
  nextjsIcon,
  laravelIcon,
  nodejsIcon,
  expressIcon,
  mongodbIcon,
  postgresqlIcon,
} from "@/constants";
import Image from "next/image";

export const ContentWorkExperience = () => {
  const datas = [
    {
      title: `SIB Kampus Merdeka Batch 4 - Front-end web and Backend Developer`,
      url: "https://dicoding.com/",
      company: "Dicoding Indonesia",
      date: "Feb 2023 - Jun 2023",
      description: (
        <>
          <p>
            Dicoding is developer end-to-end platform comprises of online
            learning program & platform (Dicoding Academy), offline networking
            and event (Dicoding Event), and product/solution creation (Dicoding
            Challenge).
          </p>

          <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            <li>
              In this program i have learning all the fundamentals of Front-End
              Web Developments, and also the introduction into Back-End
              Developments.
            </li>
            <li>
              Developing the capstone project as a Back-End developer with my
              team and successfully completed the{" "}
              <a
                href="https://github.com/gilangfatahilah/API-TPS"
                className="text-underline"
              >
                capstone project.
              </a>
            </li>
          </ul>
        </>
      ),
      techs: [
        {
          name: "HTML",
          icon: htmlIcon,
        },
        {
          name: "CSS",
          icon: cssIcon,
        },
        {
          name: "Javascript",
          icon: jsIcon,
        },
        {
          name: "NodeJS",
          icon: nodejsIcon,
        },
        {
          name: "MongoDB",
          icon: mongodbIcon,
        },
      ],
    },
    {
      title: "SIB Kampus Merdeka Batch 5 - Full-stack Web Developer",
      url: "https://www.rakamin.com/",
      company: "Rakamin Academy",
      date: "Aug 2023 - Dec 2023",
      description: (
        <>
          <p>
            Rakamin Academy is a training platform specialized for those of you
            who want to build and accelerate a career in technology through
            integrated education. Rakamin Academy aims to help Indonesians gain
            access to a more inclusive and impactful education to help them
            start a career in technology.
          </p>
          <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            <li>
              in this program I have learned the fundamentals of Fullstack web
              development, from front-end development using React Js and Next Js
              to back-end development using Node js and Express js.
            </li>
            <li>
              developed a{" "}
              <a
                href="https://github.com/pendragonnn/final-project-inventory-web"
                className="text-underline"
              >
                final project
              </a>{" "}
              with my team, where we created an inventory web app with Next js.
              In this project I worked on the Full-stack Authentication feature.
            </li>
          </ul>
        </>
      ),
      techs: [
        {
          name: "Javascript",
          icon: jsIcon,
        },
        {
          name: "React",
          icon: reactIcon,
        },
        {
          name: "NextJS",
          icon: nextjsIcon,
        },
        {
          name: "NodeJs",
          icon: nodejsIcon,
        },
        {
          name: "Express",
          icon: expressIcon,
        },
        {
          name: "TailwindCSS",
          icon: tailwindIcon,
        },
        {
          name: "PostgreSQL",
          icon: postgresqlIcon,
        },
      ],
    },
    {
      title: "Himasif Ngobar 2.0 - Learning Mentor",
      url: "https://www.instagram.com/himasif.banisaleh/",
      company: "Himasif UBS",
      date: "Feb 2023 - May 2023",
      description: (
        <p>
          Being a speaker and teacher at the NGOBAR session 2.0 event is a new
          experience for me. the topic I brought up was "CSS Framework with
          Bootstrap", at this event I invited students to directly implement the
          material with the{" "}
          <a
            href="http://gilangfatahilah.github.io/NGOBAR-HIMASIF/"
            className="text-underline"
          >
            Project
          </a>{" "}
          Based Learning method. so it is hoped that students will more easily
          understand the topic I brought up.
        </p>
      ),
      techs: [
        {
          name: "HTML",
          icon: htmlIcon,
        },
        {
          name: "CSS",
          icon: cssIcon,
        },
        {
          name: "JavaScript",
          icon: jsIcon,
        },
        {
          name: "Bootsrap",
          icon: bootstrapIcon,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8 text-white">
      {datas.map((data, index) => (
        <div key={index}>
          <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
            {data.title}
            <span className="text-base">
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="text-underline"
              >
                {" "}
                - {data.company}
              </a>
            </span>
          </h3>
          <p className="pb-5 font-mono text-sm lg:text-base">{data.date}</p>
          <div className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            {data.description}
          </div>
          <div className="mt-2">
            <h4 className="mb-1 font-medium">Technologies used</h4>
            <div className="flex flex-wrap gap-2">
              {data.techs.map((tech, index) => (
                <div
                  key={index}
                  className="rounded-md bg-cyan-500/30 p-1"
                  title={tech.name}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.icon}
                    width={28}
                    height={28}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
