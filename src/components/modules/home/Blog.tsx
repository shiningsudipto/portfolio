import { fetchApi } from "@/actions/fetchApi";
import { TBlog } from "@/types";
import { formatDate } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";

const Blog = async () => {
  const blogsData = await fetchApi("blog");
  return (
    <div id="blog" className="space-xy bg-black">
      <h2 className="heading">Blogs</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-5">
        {blogsData?.data.map((item: TBlog) => (
          <div key={item?._id}>
            <Image
              src={item?.cover}
              alt={item?.title}
              height={400}
              width={400}
              className="rounded-md"
            />
            <div>
              <div className="flex items-center justify-between my-2">
                <p className="font-semibold text-sm">
                  <span className="me-2 font-normal">Category:</span>
                  {item?.category}
                </p>
                <p className="font-semibold text-sm">
                  <span className="me-2 font-normal">Date:</span>
                  {formatDate(item?.createdAt)}
                </p>
              </div>
              <Link href={`blog/${item?.slug}`}>
                <h3 className="text-lg font-semibold">{item?.title}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
