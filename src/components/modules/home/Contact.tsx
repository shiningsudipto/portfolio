import { TbMail, TbPhone } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <div
      id="contact"
      className="space-xy bg-black-200 border-t-2 border-b-2 border-primary"
    >
      <h2 className="text-4xl font-bold text-center">Contact Me</h2>
      <div className="mt-10 flex flex-col justify-center items-center gap-5">
        <div className="flex items-center justify-center gap-5">
          <p className="flex items-center gap-2 text-xl bg-black-300 w-[320px] px-4 py-2 rounded-md">
            <TbMail className="mb-1 text-2xl" />
            <a href="mailto:shiningsudipto@gmail.com">
              shiningsudipto@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2 text-xl bg-black-300 w-[320px] px-4 py-2 rounded-md">
            <TbPhone className="mb-1 text-2xl" />
            <a href="tel:+8801758579417">01758579417</a>
          </p>
        </div>
        <p className="flex items-center gap-2 text-xl bg-black-300 w-[320px] py-2 px-4 rounded-md">
          <IoLocationOutline className="mb-1 text-2xl" />
          Barishal, Bangladesh
        </p>
      </div>
    </div>
  );
};

export default Contact;
