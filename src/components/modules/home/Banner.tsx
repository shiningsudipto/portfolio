import avatar from "@/assets/sudipta-das.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <div
      id="banner"
      className="space-xy flex lg:flex-row flex-col justify-between items-center bg-black lg:h-[90vh] gap-y-10"
    >
      <div className="lg:space-y-4 space-y-2">
        <h1 className="lg:text-5xl text-3xl">
          I&apos;m <span className="text-primary">Sudipta Das</span>
        </h1>
        <h2 className="lg:text-3xl text-2xl font-bold">Web Developer</h2>
        <h3 className="lg:text-xl text-lg font-medium">
          Passionate about crafting impactful web experiences.
        </h3>
        <button className="text-primary border-2 border-primary px-6 py-2 font-semibold">
          Contact me
        </button>
      </div>
      <div className="flex justify-end">
        <Image
          height={350}
          width={350}
          src={avatar}
          alt="Avatar-sudipta-das-web-developer-shiningsudipto"
          className="rounded-full size-[350px]"
        />
      </div>
    </div>
  );
};

export default Banner;
