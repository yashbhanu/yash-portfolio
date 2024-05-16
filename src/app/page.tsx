import Header from "@/components/Header";
import Image from "next/image";
import GithubDark from "../../public/logos/GitHubDark.svg";
import GmailDark from "../../public/logos/GmailDark.svg";
import MediumDark from "../../public/logos/MediumDark.svg";
import LinkedInDark from "../../public/logos/LinkedInDark.svg";
import ExternalLink from "../../public/logos/ExternalLink.svg";
import contact from "../../public/images/contact.svg";
import GmailBlue from "../../public/logos/GmailBlue.svg";
import GitHubBlue from "../../public/logos/GitHubBlue.svg";
import MediumBlue from "../../public/logos/MediumBlue.svg";
import LinkedInBlue from "../../public/logos/LinkedInBlue.svg";
import Intro from "../../public/images/Intro.svg";
import scapeHome from "../../public/images/scapeHome.png";
import Academics from "@/components/Academics";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="#" className="h-screen w-full flex">
        <Header />
        <div className="md:inline-block hidden w-1/4 h-full bg-lightBlue">
          <div className="flex flex-col gap-6 justify-center h-full fixed px-4">
            <Link
              className="cursor-pointer"
              target="_blank"
              href="https://medium.com/@bhanushaliyash2000"
            >
              <Image src={MediumDark} alt="medium" width={38} height={38} />
            </Link>

            <Link
              className="cursor-pointer"
              target="_blank"
              href="mailto:bhanushaliyash2000@gmail.com"
            >
              <Image src={GmailDark} alt="gmail" width={38} height={38} />
            </Link>

            <Link
              className="cursor-pointer"
              target="_blank"
              href="https://github.com/yashbhanu"
            >
              <Image src={GithubDark} alt="github" width={33} height={33} />
            </Link>

            <Link
              className="cursor-pointer"
              target="_blank"
              href="https://www.linkedin.com/in/yash-bhanushali-024301212/"
            >
              <Image src={LinkedInDark} alt="linkedin" width={38} height={38} />
            </Link>
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

      <div className="max-w-screen-3xl mx-auto">
        <section
          id="about"
          className="w-full sm:p-8 p-2 m-auto text-center md:mt-0 sm:mt-6 mt-10"
        >
          <span className="text-3xl text-medGrey ">about me</span>

          <div className="flex flex-col md:flex-row gap-16 2xl:px-40 xl:px-32 lg:px-20 md:px-10 sm:px-8 px-6 md:mt-20 mt-10">
            <div className="w-full lg:w-1/2">
              <p className="text-xl text-medGrey text-left">
                I am a Full Stack Developer passionate in creating seamless web
                applications which exceeds expectations with a knack for
                crafting optimized solutions.
              </p>
              <p className="text-xl mt-8 text-medGrey text-left">
                I design, code, and engineer digital experiences with a focus on
                user-centric design create solutions that are not just
                functional, but also beautiful and intuitive.
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

        <section
          id="projects"
          className="w-full sm:p-8 p-2 m-auto text-center md:mt-0 sm:mt-6 !mt-10"
        >
          <span className="text-3xl text-medGrey">projects</span>

          <div className="xl:px-32 lg:px-12 md:px-10 sm:px-8 px-6 my-14">
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-8 xl:gap-12 place-items-center md:m-auto text-center">
              {[1, 2, 3, 4].map((card) => (
                <div className="md:w-4/5 lg:w-full w-full flex flex-row">
                  <div className="sm:w-1/6 w-1/12"></div>
                  <div className="w-full border border-medGrey text-medGrey">
                    <div className="">
                      <img
                        className="sm:-ml-14 -ml-8 mt-8 w-full"
                        src="https://ik.imagekit.io/yashbhanu/scapeHome.png?updatedAt=1715766619875"
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-col sm:gap-6 gap-4 p-4">
                      <span className="text-4xl font-medium text-left">
                        Scape
                      </span>
                      <p className="text-left w-full">
                        Scape is a cutting-edge chat application that brings
                        people together through intuitive and dynamic
                        communication features.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <div className="flex-shrink-0 border-2 bg-medGrey border-medGrey rounded-full text-darkBlue px-3 py-1 flex justify-center items-center">
                          <p className="text-white sm:text-sm text-xs">
                            Javascript
                          </p>
                        </div>

                        <div className="flex-shrink-0 border-2 bg-medGrey border-medGrey rounded-full text-darkBlue px-3 py-1 flex justify-center items-center">
                          <p className="text-white sm:text-sm text-xs">
                            ReactJs
                          </p>
                        </div>

                        <div className="flex-shrink-0 border-2 bg-medGrey border-medGrey rounded-full text-darkBlue px-3 py-1 flex justify-center items-center">
                          <p className="text-white sm:text-sm text-xs">
                            NextJs
                          </p>
                        </div>

                        <div className="flex-shrink-0 border-2 bg-medGrey border-medGrey rounded-full text-darkBlue px-3 py-1 flex justify-center items-center">
                          <p className="text-white sm:text-sm text-xs">
                            NestJS
                          </p>
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

        <section
          id="contact"
          className="w-full sm:p-8 p-2 m-auto text-center md:mt-0 sm:mt-6 !mt-6"
        >
          <span className="text-3xl text-medGrey">get in touch</span>

          <div className="xl:px-40 lg:px-12 md:px-10 sm:px-8 px-6 my-14">
            <div className="md:py-8 py-12 md:px-12 px-8 mt-8 bg-lightBlue">
              <div className="flex flex-col md:flex-row gap-6 justify-evenly items-center">
                <div className="flex flex-col gap-3 text-medGrey text-left md:w-1/3 w-full">
                  <span className="text-4xl">Hey there,</span>
                  <p className="text-xl">
                    Feel free to reach out for any queries or opportunities by
                    dropping an <span className="text-darkBlue">email</span>.
                  </p>
                </div>
                <Image className="md:w-72 w-60" src={contact} alt="contact" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
