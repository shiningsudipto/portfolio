import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Footer = () => {
  return (
    <div className="lg:p-12 p-4 flex justify-center bg-black">
      <p className="flex items-center lg:text-4xl text-2xl font-bold text-primary">
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
