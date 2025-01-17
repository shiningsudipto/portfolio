import avatar from "@/assets/sudipta-das.jpg";
import AnimatedHeading from "@/components/shared/AnimatedHeading";
import Image from "next/image";
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
const Banner = () => {
  return (
    <div
      id="banner"
      className="space-xy flex md:flex-row flex-col justify-between items-center bg-black lg:h-[90vh] gap-y-10"
    >
      <div className="">
        <AnimatedHeading
          title={
            <h1 className="lg:text-5xl text-3xl">
              I&apos;m <span className="text-primary">Sudipta Das</span>
            </h1>
          }
        />
        <h2 className="lg:text-3xl text-2xl font-bold my-3">Web Developer</h2>
        <h3 className="lg:text-xl text-lg font-medium mb-4">
          Passionate about crafting impactful web experiences.
        </h3>
        <div className="flex items-center gap-2 text-3xl">
          <a
            href="https://www.linkedin.com/in/sudiptadasweb"
            target="_blank"
            className="text-primary hover:text-primary-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/shiningsudipto"
            target="_blank"
            className="text-primary hover:text-primary-600"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://github.com/shiningsudipto"
            target="_blank"
            className="text-primary hover:text-primary-600"
          >
            <FaGithubSquare />
          </a>
        </div>
        <div className="mt-7">
          <a
            href="#contact"
            className="text-primary border-2 border-primary hover:border-primary-600 px-6 py-2 font-semibold"
          >
            Contact me
          </a>
        </div>
      </div>
      <div className="flex justify-end">
        <Image
          height={350}
          width={350}
          src={avatar}
          alt="Avatar-sudipta-das-web-developer-shiningsudipto"
          className="rounded-full lg:size-[350px] md:size-[220px]"
        />
      </div>
    </div>
  );
};

export default Banner;
