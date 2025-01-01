// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuLinks = [
  {
    path: "#project",
    label: "Project",
  },
  {
    path: "#experience",
    label: "Experience",
  },
  {
    path: "#about",
    label: "About",
  },
  {
    path: "#blog",
    label: "Blog",
  },
  {
    path: "#contact",
    label: "Contact",
  },
];

const handleOpenResume = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1a5f0MxZG4LNepU6mNumzZ_ZVilg23jYE/view?usp=drive_link";
  window.open(resumeLink, "_blank");
};

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {menuLinks.map((item, index) => (
        <li key={index}>
          <a href={item.path}>{item.label}</a>
        </li>
      ))}
      <button
        onClick={handleOpenResume}
        className="border-2 border-primary py-2 rounded-md lg:hidden block"
      >
        Download resume
      </button>
    </ul>
  );
}

const CustomNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();
  const isRootPath = pathname === "/";

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Navbar
      className="mx-auto max-w-full rounded-none border-0 bg-black bg-opacity-100 space-x py-3 shadow-none"
      placeholder=""
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Sudipta <span className="font-medium">Das</span>
        </Link>
        {isRootPath && (
          <div className="hidden lg:block">
            <NavList />
          </div>
        )}
        <div className="lg:block hidden">
          <button
            onClick={handleOpenResume}
            className="font-semibold text-lg border-b-2 border-primary-600 hover:border-primary-700"
          >
            <span className="font-medium">Download</span>{" "}
            <span className="text-primary">Resume</span>
          </button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-primary hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          placeholder=""
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      {isRootPath && (
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      )}
    </Navbar>
  );
};

export default CustomNavbar;
