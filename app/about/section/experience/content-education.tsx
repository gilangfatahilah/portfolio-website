export const ContentEducation = () => {
  return (
    <div className="text-white z-[20]">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Informatics Engineering
        <span className="text-base text-accent">
          {" "}
          @
          <a
            href="https://informatika.ums.ac.id"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Bani Saleh University
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">Sep 2021 - Present</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
          I enrolled in the Informatics Management program with the motivation
          that commercial jobs would be replaced by technology in the future, so
          I decided to pursue this field of study.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          omnis quibusdam quod voluptatibus repellat nisi corporis voluptatum
          vitae ratione explicabo?
        </li>
        <li>
          Starting from the third semester, I realized that coding was my main
          goal in pursuing this major. Therefore, I began to learn about
          programming and fell in love with coding ✨
        </li>
      </ul>
    </div>
  );
};
