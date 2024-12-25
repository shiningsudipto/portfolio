import avatar from "@/assets/sudipta-das-transparent.png";
import Image from "next/image";
const About = () => {
  const technologies = [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Prisma", "JWT", "Mongoose"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools",
      items: ["Redux Toolkit", "RTK Query", "Zod", "AmarPay", "Stripe"],
    },
    {
      category: "Extra Skills",
      items: ["Graphic design (Photoshop, Illustrator)", "SEO"],
    },
  ];

  return (
    <div id="about" className="bg-black space-y">
      <div className="ps-24 flex justify-between gap-10">
        <div className="flex-1">
          <h2 className="text-4xl font-bold">About Me</h2>
          <div className="space-y-3 mt-5">
            <h6 className="text-lg font-semibold">Who I Am</h6>
            <p>
              I’m Sudipta Das, a Full Stack Web Developer with 1 year of
              official experience. I am specialized in the MERN stack and have
              expertise in Prisma ORM and PostgreSQL, allowing me to build
              efficient and scalable web applications.
            </p>
            <h6 className="text-lg font-semibold">What I Do</h6>
            <p>
              I excel in developing both frontend and backend systems, solving
              complex challenges, and delivering clean, maintainable code. My
              goal is to create impactful, user-friendly solutions that align
              with business objectives.
            </p>
            <h6 className="text-lg font-semibold">What Drives Me</h6>
            <p>
              I’m passionate about learning new technologies, solving
              challenging problems, and staying ahead of industry trends. I
              thrive in collaborative environments and am always eager to
              contribute to meaningful projects.
            </p>
            <h6 className="text-lg font-semibold">Educational Background</h6>
            <p className="">Honours 4th Year (Marketing Department)</p>
          </div>
        </div>
        <div className="">
          <div className="bg-primary ps-10 rounded-s-xl w-full z-0">
            <Image
              src={avatar}
              alt="sudipta-das-shiningsudipto-web-developer-avatar"
              height={400}
              width={400}
              className="w-[250px]"
            />
          </div>
        </div>
      </div>
      <div className="space-x grid grid-cols-2 mt-10">
        <div>
          <h3 className="text-xl font-bold mb-5">
            Key Technologies I Work With:
          </h3>
          <div className="space-y-2">
            {technologies.map((tech, index) => (
              <p key={index}>
                <span className="text-lg font-semibold me-2 text-primary">
                  {tech.category}:
                </span>
                {tech.items.join(", ")}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-5">
            Courses and Certifications:
          </h3>
          <ul className="list-disc space-y-3">
            <li>Next Level Web development (Level-2)</li>
            <li>Complete Web Development Course With Programming Hero</li>
            <li>Web Application Development(Wordpress)</li>
            <li>Graphic Design (NTVQF Level-1)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
