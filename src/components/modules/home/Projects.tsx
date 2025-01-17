import { fetchApi } from "@/actions/fetchApi";
import { TProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Projects = async () => {
  const projectsData = await fetchApi("project");

  return (
    <div id="project" className="space-xy bg-black-300">
      <h2 className="heading">Projects</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-10 mt-5 gap-x-5 gap-y-10">
        {projectsData?.data.map((item: TProject) => (
          <div key={item?._id}>
            <Image
              src={item?.img}
              alt={item?.title}
              height={400}
              width={400}
              className="rounded-md"
            />
            <div className="space-y-2 mt-4">
              <Link href={`project/${item?.slug}`}>
                <h3 className="text-lg font-semibold">{item?.title}</h3>
              </Link>
              <p>
                <span className="font-semibold">Technology used:</span>{" "}
                {item?.technology}
              </p>
              <Link
                href={`project/${item?.slug}`}
                className="flex items-center gap-1 text-primary hover:border-b border-primary w-fit"
              >
                See details <MdKeyboardDoubleArrowRight className="text-xl" />{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
