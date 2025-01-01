import { fetchApi } from "@/actions/fetchApi";
import { TProject } from "@/types";
import { formatDate } from "@/utils/date";
import Image from "next/image";

type PropsType = {
  params: Promise<{ projectSlug: string }>;
};

const page = async ({ params }: PropsType) => {
  const { projectSlug } = await params;
  const { data } = await fetchApi(`project/${projectSlug}`);
  const projectDetails = data as TProject;
  return (
    <div className="space-x py-10 bg-black-200 min-h-screen">
      <div className="grid grid-cols-2 gap-10">
        <div className="">
          <h1 className="text-3xl font-bold mb-5 text-primary">
            {projectDetails?.title}
          </h1>
          <h3 className="mb-3">
            <span className="font-bold">Technology:</span>{" "}
            {projectDetails?.technology}
          </h3>
          <h3>
            <span className="font-bold">Tools:</span> {projectDetails?.tools}
          </h3>
          <div className="mt-10 space-y-3">
            <p>
              <span className="font-font-medium me-3">Project created at:</span>
              {formatDate(projectDetails?.createdAt)}
            </p>
            <div className="flex items-center gap-3">
              <p className="font-medium">Live url:</p>
              <a
                target="_blank"
                href={projectDetails?.liveUrl}
                className="text-primary-400 underline"
              >
                Click here
              </a>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-medium">Frontend repository:</p>
              <a
                target="_blank"
                href={projectDetails?.clientRepo}
                className="text-primary-400 underline"
              >
                Click here
              </a>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-medium">Backend repository:</p>
              <a
                target="_blank"
                href={projectDetails?.serverRepo}
                className="text-primary-400 underline"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={projectDetails?.img}
            alt={projectDetails?.title}
            height={400}
            width={500}
            className="rounded-md w-full"
          />
        </div>
      </div>
      <p className="font-medium mb-3">Details:</p>
      <p>{projectDetails?.description}</p>
    </div>
  );
};

export default page;
