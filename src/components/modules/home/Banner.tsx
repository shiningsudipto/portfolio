import avatar from "@/assets/sudipta-das.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <div
      id="banner"
      className="space-xy flex justify-between items-center bg-black h-[90vh]"
    >
      <div className="space-y-4">
        <h1 className="text-5xl">
          I&apos;m <span className="text-primary">Sudipta Das</span>
        </h1>
        <h2 className="text-3xl font-bold">Web Developer</h2>
        <h3 className="text-xl font-medium">
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
