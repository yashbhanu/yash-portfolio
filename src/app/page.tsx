import Header from "@/components/Header";
import Image from "next/image";
import GithubDark from "../../public/logos/GitHubDark.svg";
import GmailDark from "../../public/logos/GmailDark.svg";
import MediumDark from "../../public/logos/MediumDark.svg";
import LinkedInDark from "../../public/logos/LinkedInDark.svg";
import GmailBlue from "../../public/logos/GmailBlue.svg";
import GitHubBlue from "../../public/logos/GitHubBlue.svg";
import MediumBlue from "../../public/logos/MediumBlue.svg";
import LinkedInBlue from "../../public/logos/LinkedInBlue.svg";
import Intro from "../../public/images/Intro.svg";

export default function Home() {
  return (
    <>
      <section className="h-screen w-full relative flex">
        <Header />
        <div className="md:inline-block hidden w-1/4 h-full bg-lightBlue">
          <div className="flex flex-col gap-6 justify-center h-full fixed px-4">
            <Image src={MediumDark} alt="github" width={38} height={38} />

            <Image src={GmailDark} alt="github" width={33} height={33} />

            <Image src={GithubDark} alt="github" width={38} height={38} />

            <Image src={LinkedInDark} alt="github" width={38} height={38} />
          </div>
        </div>
        <div className="flex flex-col lg:px-16 md:mt-20 mt-10 sm:px-10 px-6">
          <div className="flex flex-col flex-1 text-medGrey items-start justify-center gap-4 lg:px-20">
            <p className="text-xl lg:text-2xl">
              Hi, I am <span className="text-darkBlue">Yash</span>
            </p>

            <p className="text-2xl lg:text-4xl lg:leading-[3.2rem] leading-[2.5rem] 2xl:w-11/12 w-full">
              I design, code and engineer software applications while writing about code
            </p>

            <button className="border border-darkBlue md:px-10 md:py-3 px-6 py-2 rounded-full text-xl text-darkBlue mt-6">
              Resume
            </button>
          </div>
          <Image className="xl:w-80 lg:w-72 md:w-60" src={Intro} alt="github" />
        </div>
      </section>
    </>
  );
}
