import { useState } from "react";

export const ContentCertification = () => {
  const [hover, setHover] = useState([]);

  const vendorList = [
    {
      type: "Competence",
      name: "BNSP",
      link: "https://www.bnsp.go.id",
      certificate: [
        {
          name: "Junior Web Developer",
          link: "/resume/bnsp.pdf",
        },
      ],
    },
    {
      type: "Course",
      name: "Dicoding Indonesia",
      link: "https://www.dicoding.com",
      certificate: [
        {
          name: "Front-End Web Developer Expert",
          link: "https://www.dicoding.com/certificates/ERZRG1NRNPYV",
        },
        {
          name: "Fundamental Front-End Web Development",
          link: "https://www.dicoding.com/certificates/QLZ9Q18K2Z5D",
        },
        {
          name: "Create Web Application with React",
          link: "https://www.dicoding.com/certificates/4EXGKEWKDZRL",
        },
        {
          name: "Create Front-End Web for Beginners",
          link: "https://www.dicoding.com/certificates/1RXYO54V9PVM",
        },
        {
          name: "Build Back-End Applications for Beginners",
          link: "https://www.dicoding.com/certificates/MRZMQYM6NPYQ",
        },
        {
          name: "Basics of Web Programming",
          link: "https://www.dicoding.com/certificates/JLX1LQ516X72",
        },
        {
          name: "Basics of JavaScript Programming",
          link: "https://www.dicoding.com/certificates/ERZR06D02XYV",
        },
        {
          name: "Career as a Software Developer",
          link: "https://www.dicoding.com/certificates/ERZRGWED2PYV",
        },
        {
          name: "Learn the Basics of Git and Github",
          link: "https://www.dicoding.com/certificates/ERZR0JWRWXYV",
        },
        {
          name: "Start Basic Programming to Become a Software Developer",
          link: "https://www.dicoding.com/certificates/07Z6GMGVWXQR",
        },
        {
          name: "Introduction to Programming Logic (Programming Logic 101)",
          link: "https://www.dicoding.com/certificates/81P28MV6NPOY",
        },
      ],
    },
    {
      type: "Course",
      name: "Coursera (Meta Front-end Developer)",
      link: "https://www.coursera.org/programs/american-dream-academy-jzjjt/professional-certificates/meta-front-end-developer?",
      certificate: [
        {
          name: "Introduction to Front-end Development",
          link: "https://www.coursera.org/account/accomplishments/verify/LMSMTFMGWKTJ",
        },
        {
          name: "Version Control",
          link: "https://www.coursera.org/account/accomplishments/verify/DBFURKLLUNYV",
        },
        {
          name: "Programming with Javascript",
          link: "https://www.coursera.org/account/accomplishments/verify/LMSMTFMGWKTJ",
        },
        {
          name: "HTML and CSS in Depth",
          link: "https://www.coursera.org/account/accomplishments/verify/QZUHEPK3BV6K",
        },
      ],
    },
    {
      type: "Course",
      name: "Sololearn",
      link: "https://www.sololearn.com",
      certificate: [
        {
          name: "Introduction to HTML ",
          link: "https://www.sololearn.com/certificates/CC-TPB3AKQY",
        },
        {
          name: "Introduction to JavaScript",
          link: "https://www.sololearn.com/certificates/CC-WAPBHI0A",
        },
        {
          name: "Javascript Intermediate",
          link: "https://www.sololearn.com/certificates/CC-LDDEKEUQ",
        },
      ],
    },
    {
      type: "Course",
      name: "Build with Angga",
      link: "https://buildwithangga.com/",
      certificate: [
        {
          name: "React Javascript ",
          link: "https://class.buildwithangga.com/talent/gilangf010/react-javascript",
        },
      ],
    },
    {
      type: "Course",
      name: "Coding Studio",
      link: "https://codingstudio.id/",
      certificate: [
        {
          name: "Fundamental Front-end Web ",
          link: "https://codingstudio.id/certificate/75B5937ACA-75BB1E6817-75A9A809A5/",
        },
      ],
    },
  ];

  return (
    <div className="cursor-default text-white">
      {vendorList.map((vendor, index) => {
        return (
          <div key={index}>
            <h3 className="pb-3 text-lg font-medium leading-loose md:text-xl">
              {vendor.type}
              <span className="text-base  ">
                <a
                  href={vendor.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-underline"
                >
                  {" "}
                  - {vendor.name}
                </a>
              </span>
            </h3>
            <ul className="flex list-inside list-disc flex-col gap-4 pb-5 text-sm leading-relaxed lg:text-base">
              {vendor.certificate.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="static items-center justify-start transition-all duration-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:inline-flex"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
