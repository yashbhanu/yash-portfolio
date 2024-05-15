import Image from "next/image";
import Link from "next/link";
import React from "react";
import GithubDark from "../../public/logos/GitHubDark.svg";
import GmailDark from "../../public/logos/GmailDark.svg";
import MediumDark from "../../public/logos/MediumDark.svg";
import LinkedInDark from "../../public/logos/LinkedInDark.svg";

const Footer = () => {
  return (
    <footer className="w-full bottom-0 flex flex-col md:flex-row items-center justify-between mb-3 px-8">
      <div />
      <span className="text-lg text-darkBlue">
        Developed by Yash Bhanushali
      </span>

      <div className="flex gap-3">
        <Link
          className="cursor-pointer"
          target="_blank"
          href="https://medium.com/@bhanushaliyash2000"
        >
          <Image src={MediumDark} alt="medium" width={32} height={32} />
        </Link>

        <Link
          className="cursor-pointer"
          target="_blank"
          href="mailto:bhanushaliyash2000@gmail.com"
        >
          <Image src={GmailDark} alt="gmail" width={30} height={30} />
        </Link>

        <Link
          className="cursor-pointer"
          target="_blank"
          href="https://github.com/yashbhanu"
        >
          <Image src={GithubDark} alt="github" width={32} height={32} />
        </Link>

        <Link
          target="_blank"
          className="cursor-pointer"
          href="https://www.linkedin.com/in/yash-bhanushali-024301212/"
        >
          <Image src={LinkedInDark} alt="linkedin" width={32} height={32} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
