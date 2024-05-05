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
          <Link href="#about">/projects</Link>
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
      {showMenu && (
        <div className="transition duration-500 ease-in-out fixed top-0 right-0 bg-lightBlue h-screen w-1/2">
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
            <ul className="flex flex-col gap-4 px-3 text-medGrey text-xl mt-12">
              <Link href="#about">/about</Link>
              <Link href="#about">/projects</Link>
              <Link href="/blog">/blog</Link>
              <Link href="#contact">/contact</Link>
            </ul>
          </div>
          <div className="flex gap-3 justify-center w-full bottom-0 absolute py-3">
            <Image src={MediumDark} alt="github" width={26} height={26} />

            <Image src={GmailDark} alt="github" width={24} height={24} />

            <Image src={GithubDark} alt="github" width={26} height={26} />

            <Image src={LinkedInDark} alt="github" width={26} height={26} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
