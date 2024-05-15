"use client";
import Link from "next/link";
import React, { useState } from "react";
import close from "../../public/logos/Close.svg";
import Image from "next/image";
import GithubDark from "../../public/logos/GitHubDark.svg";
import GmailDark from "../../public/logos/GmailDark.svg";
import MediumDark from "../../public/logos/MediumDark.svg";
import LinkedInDark from "../../public/logos/LinkedInDark.svg";
import FriesMenu from "../../public/logos/FriesMenu.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="absolute w-full">
      <nav className="md:px-24 md:py-6 px-4 py-3 flex justify-between">
        <span className="text-darkBlue text-2xl">Yash</span>
        <div className="md:flex hidden gap-12 text-medGrey text-xl">
          <Link href="#about">/about</Link>
          <Link href="#projects">/projects</Link>
          <Link href="/blog">/blog</Link>
          <Link href="#contact">/contact</Link>
        </div>
        <button
          className="md:hidden inline-block"
          onClick={() => setShowMenu(true)}
        >
          <Image src={FriesMenu} alt="menu" />
        </button>
      </nav>
      <aside
        className={`bg-lightBlue fixed top-0 right-0 bg-[#F5FBFF] drop-shadow-xl h-screen sm:w-1/2 w-4/6 transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } transition-all`}
      >
        <div className="p-3 flex justify-end">
          <button onClick={() => setShowMenu(false)}>
            <Image
              className=""
              src={close}
              width={25}
              height={25}
              alt="close"
            />
          </button>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-col gap-6 px-3 text-medGrey text-2xl mt-16">
            <Link href="#about">/about</Link>
            <Link href="#about">/projects</Link>
            <Link href="/blog">/blog</Link>
            <Link href="#contact">/contact</Link>
          </ul>
        </div>
        <div className="flex gap-3 justify-center w-full bottom-0 absolute py-3 px-2">
          <Link
            target="_blank"
            className="cursor-pointer"
            href="https://medium.com/@bhanushaliyash2000"
          >
            <Image src={MediumDark} alt="medium" width={32} height={32} />
          </Link>

          <Link
            target="_blank"
            className="cursor-pointer"
            href="mailto:bhanushaliyash2000@gmail.com"
          >
            <Image src={GmailDark} alt="gmail" width={30} height={30} />
          </Link>

          <Link
            target="_blank"
            className="cursor-pointer"
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
      </aside>
    </header>
  );
};

export default Header;
