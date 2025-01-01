import { fetchApi } from "@/actions/fetchApi";
import { TProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
const Projects = async () => {
  const projectsData = await fetchApi("project");
  // console.log(projectsData);

  return (
    <div id="project" className="space-xy bg-black-300">
      <h2 className="text-4xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-3 mt-10 gap-5">
        {projectsData?.data.map((item: TProject) => (
          <div key={item?._id}>
            <Image
              src={item?.img}
              alt={item?.title}
              height={400}
              width={400}
              className="rounded-md"
            />
            <div>
              <Link href={item?.slug}>
                <h3 className="text-lg font-semibold">{item?.title}</h3>
              </Link>
              <p>
                <span className="font-semibold">Technology used:</span>{" "}
                {item?.technology}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
