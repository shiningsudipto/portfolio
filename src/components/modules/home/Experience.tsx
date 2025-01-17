import { fetchApi } from "@/actions/fetchApi";
import AnimatedHeading from "@/components/shared/AnimatedHeading";
import { TExperience } from "@/types";

const Experience = async () => {
  const experienceData = await fetchApi("experience");

  return (
    <div
      id="experience"
      className="space-xy bg-black flex lg:flex-row flex-col gap-5"
    >
      <AnimatedHeading title={<h2 className="heading">Experience</h2>} />

      <div className="lg:mt-20 mt-0 space-y-10 w-full font-poppins">
        {experienceData?.data.map((experience: TExperience) => (
          <div
            key={experience?._id}
            className="grid lg:grid-cols-7 grid-cols-1 gap-5"
          >
            <div className="col-span-2">
              <h3 className="lg:text-2xl text-xl text-primary font-medium font-poppins">
                {experience.position}
              </h3>
              <h4 className="lg:text-xl text-lg font-semibold">
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience.company}
                </a>
              </h4>
              <p>{experience.date}</p>
              {experience.current && <p className="italic">Present</p>}
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
