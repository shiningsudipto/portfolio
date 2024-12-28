import { fetchApi } from "@/actions/fetchApi";
import { TExperience } from "@/types";

const Experience = async () => {
  const experienceData = await fetchApi("experience");

  return (
    <div id="experience" className="space-xy bg-black-200 flex gap-5">
      <h2 className="text-4xl font-bold">Experience</h2>
      <div className="mt-20 space-y-10 w-full font-poppins">
        {experienceData?.data.map((experience: TExperience) => (
          <div key={experience?._id} className="grid grid-cols-7 gap-5">
            <div className="col-span-2">
              <h3 className="text-2xl text-primary font-medium font-poppins">
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
