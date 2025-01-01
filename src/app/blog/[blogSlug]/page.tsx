import { fetchApi } from "@/actions/fetchApi";
import Footer from "@/components/shared/Footer";
import { TBlog } from "@/types";
import { formatDate } from "@/utils/date";
import Image from "next/image";

type PropsType = {
  params: {
    blogSlug: string;
  };
};
const page = async ({ params }: PropsType) => {
  const { blogSlug } = await params;
  const { data } = await fetchApi(`blog/${blogSlug}`);
  const blogDetails = data as TBlog;
  console.log(blogDetails);
  const firstSection = blogDetails?.content.split("<br>")[0];
  const contentAfterFirstBreak = blogDetails?.content
    .split("<br>")
    .slice(1)
    .join("<br>");

  return (
    <main>
      <section className="space-x py-16">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          <div className="col-span-2">
            <h1 className="text-2xl font-bold">{blogDetails?.title}</h1>
            <div className="flex items-center justify-between my-4">
              <h2 className="font-semibold text-sm">
                <span className="me-2 font-normal">Category:</span>
                {blogDetails?.category}
              </h2>
              <h2 className="font-semibold text-sm">
                <span className="me-2 font-normal">Author:</span>
                {blogDetails?.author}
              </h2>
              <p className="font-semibold text-sm">
                <span className="me-2 font-normal">Date:</span>
                {formatDate(blogDetails?.createdAt)}
              </p>
            </div>
            <div className="mt-5">
              <div
                dangerouslySetInnerHTML={{
                  __html: firstSection,
                }}
              />
            </div>
          </div>
          <div className="col-span-1">
            <Image
              src={blogDetails?.cover}
              height={400}
              width={400}
              alt={blogDetails?.title + blogDetails?.slug}
              className="rounded-md"
            />
          </div>
        </div>
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{
            __html: contentAfterFirstBreak,
          }}
        />
      </section>
      <Footer />
    </main>
  );
};

export default page;
