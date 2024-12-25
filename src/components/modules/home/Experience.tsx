const Experience = () => {
  const experiences = [
    {
      position: "Frontend Developer",
      company: "Jayga",
      companyUrl: "https://www.linkedin.com/company/jayga",
      date: "Mar 1 2024",
      current: true,
      description:
        "Jayga is a warehouse service provider offering storage solutions and inventory management based on storage grids. As the sole developer, my role involves designing user interfaces and implementing business logic to manage storage and inventory efficiently.",
    },
    {
      position: "Intern React Developer",
      company: "Kodezen Limited",
      companyUrl: "https://www.linkedin.com/company/kodezenteam",
      date: "Nov - Feb 2024",
      current: false,
      description:
        "Kodezen Limited specializes in providing WordPress services, including innovative plugins to streamline business operations. As an intern, my role involved creating user interfaces with React and fixing UI-related bugs.",
    },
  ];

  return (
    <div className="space-xy bg-black-200 flex gap-5">
      <h2 className="text-4xl font-bold">Experience</h2>
      <div className="mt-20 space-y-10 w-full">
        {experiences.map((experience, index) => (
          <div key={index} className="grid grid-cols-7 gap-5">
            <div className="col-span-2">
              <h3 className="text-2xl text-primary font-medium">
                {experience.position}
              </h3>
              <h4 className="text-xl font-semibold">
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience.company}
                </a>
              </h4>
              <p>{experience.date}</p>
              {experience.current && <p className="italic">Current</p>}
            </div>
            <div className="col-span-5 bg-black-300 p-5 flex-1 w-full">
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
