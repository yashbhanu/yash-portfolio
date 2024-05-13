import Header from "@/components/Header";
import Image from "next/image";
import GithubDark from "../../public/logos/GitHubDark.svg";
import GmailDark from "../../public/logos/GmailDark.svg";
import MediumDark from "../../public/logos/MediumDark.svg";
import LinkedInDark from "../../public/logos/LinkedInDark.svg";
import ExternalLink from "../../public/logos/ExternalLink.svg";
import GmailBlue from "../../public/logos/GmailBlue.svg";
import GitHubBlue from "../../public/logos/GitHubBlue.svg";
import MediumBlue from "../../public/logos/MediumBlue.svg";
import LinkedInBlue from "../../public/logos/LinkedInBlue.svg";
import Intro from "../../public/images/Intro.svg";
import scapeHome from "../../public/images/scapeHome.png";
import Academics from "@/components/Academics";

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
              I design, code and engineer software applications while writing
              about code
            </p>

            <button className="border border-darkBlue md:px-10 md:py-3 px-6 py-2 rounded-full text-xl text-darkBlue mt-6">
              Resume
            </button>
          </div>
          <Image className="lg:w-80 w-72" src={Intro} alt="github" />
        </div>
      </section>

      <section className="sm:p-8 p-2 m-auto text-center md:mt-0 sm:mt-6 mt-10">
        <span className="text-3xl text-medGrey ">about me</span>

        <div className="flex flex-col md:flex-row gap-16 2xl:px-40 xl:px-32 lg:px-20 md:px-10 sm:px-8 px-6 md:mt-20 mt-10">
          <div className="w-full lg:w-1/2">
            <p className="text-xl text-medGrey text-left">
              I am a Full Stack Developer passionate in creating seamless web
              applications which exceeds expectations with a knack for crafting
              optimized solutions.
            </p>
            <p className="text-xl mt-8 text-medGrey text-left">
              I design, code, and engineer digital experiences with a focus on
              user-centric design create solutions that are not just functional,
              but also beautiful and intuitive.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <p className="text-2xl text-medGrey text-left">skills</p>
            <div className="flex flex-wrap gap-3">
              <div className="border-2 border-darkBlue rounded-full text-darkBlue px-6 py-1">
                <p className="text-darkBlue">Javascript</p>
              </div>

              <div className="border-2 border-darkBlue rounded-full text-darkBlue px-6 py-1">
                <p className="text-darkBlue">ReactJs</p>
              </div>

              <div className="border-2 border-darkBlue rounded-full text-darkBlue px-6 py-1">
                <p className="text-darkBlue">NextJs</p>
              </div>

              <div className="border-2 border-darkBlue rounded-full text-darkBlue px-6 py-1">
                <p className="text-darkBlue">NodeJs</p>
              </div>

              <div className="border-2 border-darkBlue rounded-full text-darkBlue px-6 py-1">
                <p className="text-darkBlue">MongoDB</p>
              </div>

              <div className="border-2 border-darkBlue rounded-full text-darkBlue px-6 py-1">
                <p className="text-darkBlue">Docker</p>
              </div>

              <div className="border-2 border-darkBlue rounded-full text-darkBlue px-6 flex items-center">
                <p className="text-darkBlue">NestJs</p>
              </div>

              <div className="border-2 border-darkBlue rounded-full text-darkBlue px-6 py-1">
                <p className="text-darkBlue">Git</p>
              </div>
            </div>
          </div>
        </div>

        <Academics />
      </section>

      <section className="m-auto mt-10 text-center">
        <span className="text-3xl text-medGrey ">projects</span>

        <div className="2xl:px-40 xl:px-32 lg:px-20 md:px-10 sm:px-8 px-6 my-12">
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-16 place-items-center md:m-auto text-center">
            {[1, 2, 3, 4].map((card) => (
              <div className="relative w-full flex flex-row">
                <div className="absolute md:top-12 md:right-10 top-6 right-6 max-w-full">
                  <Image className="w-full" src={scapeHome} alt="img" />
                </div>
                <div className=" w-1/5"></div>
                <div className="w-full border border-medGrey text-medGrey p-4">
                  <div className="flex flex-col gap-6 3xl:mt-60 lg:mt-48 md:mt-36 sm:mt-24 mt-12">
                    <span className="text-4xl font-medium text-left">
                      Scape
                    </span>
                    <p className="text-left w-full">
                      Scape is a cutting-edge chat application that brings
                      people together through intuitive and dynamic
                      communication features.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="border-2 bg-medGrey border-medGrey rounded-full text-darkBlue px-3 py-1 flex justify-center items-center">
                        <p className="text-white text-sm">Javascript</p>
                      </div>

                      <div className="border-2 bg-medGrey border-medGrey rounded-full text-darkBlue px-3 flex justify-center items-center">
                        <p className="text-white text-sm">ReactJs</p>
                      </div>

                      <div className="border-2 bg-medGrey border-medGrey rounded-full text-darkBlue px-3 flex justify-center items-center">
                        <p className="text-white text-sm">NextJs</p>
                      </div>

                      <div className="border-2 bg-medGrey border-medGrey rounded-full text-darkBlue px-3 flex justify-center items-center">
                        <p className="text-white text-sm">NestJS</p>
                      </div>
                    </div>

                    <div className="flex gap-3 justify-end">
                      <Image src={GithubDark} alt="github" />
                      <Image src={ExternalLink} alt="github" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
