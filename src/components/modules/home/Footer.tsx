import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Footer = () => {
  return (
    <div className="space-xy flex justify-center bg-black">
      <p className="flex items-center text-4xl font-bold text-primary">
        <span className="mb-5">
          <ImQuotesLeft className="text-2xl" />
        </span>{" "}
        Thanks For Scrolling{" "}
        <span className="mb-5">
          <ImQuotesRight className="text-2xl" />
        </span>
      </p>
    </div>
  );
};

export default Footer;
