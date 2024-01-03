export const ContentOrganization = () => {
  const datas = [
    {
      title: "Chairman",
      url: "https://www.instagram.com/banisphotoclub12/",
      organization: "Banis Photo Club",
      date: "Sep 2022 - Dec 2023",
      description: (
        <>
          <p>
            UKM Banis Photo Club is a non-profit organization based at Bani
            Saleh University Bekasi, which aims to accommodate students who have
            an interest and talent in the art of photography.
          </p>
          <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            <li>
              Plan, coordinate and execute various organizational events,
              including seminars, workshops and social activities. events,
              including seminars, workshops, and social activities.
            </li>
            <li>
              Build and maintain good relationships with other student
              organizations other student organizations, external parties, and
              campus institutions.
            </li>
            <li>
              Create and execute long-term strategies for organizational growth
              and sustainability.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Head of Publication and Documentation Division",
      url: "https://www.instagram.com/himamika_stmikbanisaleh/",
      organization: "HIMAMIKA",
      date: "Sep 2022 - Sep 2023",
      description: (
        <>
          <p>
            an organization consisting of students who join to achieve common
            goals and represent the interests of students at the university
            level, especially in the informatics management major.
          </p>
          <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            <li>
              Plan and manage the production of organizational publications,
              such as brochures, flyers, and social media content.
            </li>
            <li>
              Responsible for the organization's social media accounts, ensuring
              the publication of relevant and engaging content.
            </li>
            <li>
              Manage and maintain the organization's documentation archive for
              reference and sustainability purposes.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 text-white">
      {datas.map((data, index) => (
        <div key={index}>
          <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
            {data.title}
            <span className="text-base text-accent">
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="text-underline"
              >
                {" "}
                - {data.organization}
              </a>
            </span>
          </h3>
          <p className="pb-5 font-mono text-sm lg:text-base">{data.date}</p>
          <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            {data.description}
          </ul>
        </div>
      ))}
    </div>
  );
};
