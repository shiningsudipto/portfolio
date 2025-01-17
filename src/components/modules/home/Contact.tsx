import { TbMail, TbPhone } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <div
      id="contact"
      className="space-xy bg-black-300 border-t-2 border-b-2 border-primary"
    >
      <h2 className="heading">Contact Me</h2>
      <div className="mt-10 flex flex-col justify-center items-center gap-5">
        <div className="flex items-center lg:flex-row flex-col justify-center gap-5">
          <p className="flex items-center gap-2 text-xl bg-black min-w-[320px] px-4 py-2 rounded-md">
            <TbMail className="mb-1 text-2xl text-primary" />
            <a href="mailto:shiningsudipto@gmail.com">
              shiningsudipto@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2 text-xl bg-black min-w-[320px] px-4 py-2 rounded-md">
            <TbPhone className="mb-1 text-2xl text-primary" />
            <a href="tel:+8801758579417">+880 1758579417</a>
          </p>
        </div>
        <p className="flex items-center gap-2 text-xl bg-black min-w-[320px] py-2 px-4 rounded-md">
          <IoLocationOutline className="mb-1 text-2xl text-primary" />
          Barishal, Bangladesh
        </p>
      </div>
    </div>
  );
};

export default Contact;
