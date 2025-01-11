import Header from "@/components/Header";
import Image from "next/image";
import GithubDark from "../../public/logos/GitHubDark.svg";
import GmailDark from "../../public/logos/GmailDark.svg";
import MediumDark from "../../public/logos/MediumDark.svg";
import LinkedInDark from "../../public/logos/LinkedInDark.svg";
import ExternalLink from "../../public/logos/ExternalLink.svg";
import contact from "../../public/images/contact.svg";
import Intro from "../../public/images/Intro.svg";
import Academics from "@/components/Academics";
import Link from "next/link";
import { getProjects } from "@/actions/projectAction";

export const dynamic = "force-dynamic";

export default async function Home() {
  const projects: any = await getProjects();
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
            <p className="text-4xl lg:text-5xl font-medium">
              Hi, I am <span className="text-darkBlue">Yash, a Full Stack Developer</span>
            </p>

            <p className="text-xl lg:text-2xl lg:leading-[2.4rem] leading-[2rem] tracking-wide 2xl:w-11/12 w-full">
              I design, code and engineer software applications focusing on creating efficient scalable solutions while writing
              about code
            </p>

            <Link
              href="https://drive.google.com/file/d/1r3mDsziCiEu5J5tXf2Od4TvTh-_Gwyxi/view?usp=sharing"
              className="border border-darkBlue md:px-9 md:py-3 px-6 py-2 rounded-full text-xl text-darkBlue mt-6"
              target="_blank"
            >
              Resume
            </Link>
          </div>
          <Image className="lg:w-80 w-72" src={Intro} alt="github" />
        </div>
      </section>

      <div className="max-w-screen-3xl mx-auto">
        <section
          id="about"
          className="w-full sm:p-8 p-2 m-auto text-center md:mt-0 sm:mt-6 mt-10"
        >
          <span className="text-4xl text-medGrey ">about me</span>

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
              <div className="flex flex-wrap gap-3 text-sm sm:text-base">
                <div className="border-2 border-darkBlue rounded-full text-darkBlue sm:px-6 px-4 py-1">
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
          <span className="text-4xl text-medGrey">projects</span>

          <div className="xl:px-32 lg:px-12 md:px-10 sm:px-8 px-6 my-14">
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-8 xl:gap-12">
              {(projects || []).map((card: any) => (
                <div
                  key={card._id}
                  className="md:w-4/5 lg:w-full w-full flex flex-row"
                >
                  <div className="sm:w-1/6 w-1/12"></div>
                  <div className="w-full rounded-2xl text-medGrey flex flex-col justify-between"
                  style={{boxShadow : "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px, rgba(0, 0, 0, 0.07) 0px -3px 6px -2px"}}
                  >
                    <div className="sm:-ml-14 -ml-8 mt-8 w-full drop-shadow-lg overflow-hidden relative group">
                      <img
                        className="transition-transform duration-500 group-hover:scale-[1.2]"
                        src={card.image}
                        alt="img"
                      />
                      <a className="absolute bg-slate-800/30 group-hover:opacity-100 opacity-0 flex justify-center items-center bottom-0 left-0 w-full h-full" href={card?.projectLink || card?.githubLink} target="_blank" />
                    </div>
                    <div className="flex flex-col w-full gap-2 p-4">
                      <span className="sm:text-4xl text-3xl font-medium text-left">
                        {card.projectName}
                      </span>
                      <p className="text-left w-full text-sm sm:text-base">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 justify-end p-4">
                      <div className="flex flex-wrap gap-2">
                        {card.technologies.map((tag: any) => (
                          <div
                            key={tag}
                            className="flex-shrink-0 border-2 bg-medGrey border-medGrey rounded-full text-darkBlue px-3 py-1 flex justify-center items-center"
                          >
                            <p className="text-white sm:text-sm text-xs">
                              {tag}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-end items-center gap-3">
                        <Link href={card.githubLink}>
                          <Image src={GithubDark} alt="github" />
                        </Link>
                        {card?.projectLink && (
                          <Link href={card.projectLink}>
                            <Image src={ExternalLink} alt="projectLink" />
                          </Link>
                        )}
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
          <span className="text-4xl text-medGrey">get in touch</span>

          <div className="xl:px-40 lg:px-12 md:px-10 sm:px-8 px-6 my-14">
            <div className="md:py-8 py-12 md:px-12 px-8 mt-8 bg-lightBlue rounded-2xl"
            style={{
              boxShadow: "rgba(173, 216, 230, 0.4) 0px 10px 15px -3px, rgba(173, 216, 230, 0.3) 0px 4px 6px -2px"
            }}
            >
              <div className="flex flex-col md:flex-row gap-6 justify-evenly items-center">
                <div className="flex flex-col gap-3 text-medGrey text-left md:w-1/3 w-full">
                  <span className="text-4xl">Hey there,</span>
                  <p className="text-xl">
                    Feel free to reach out for any queries or opportunities by
                    dropping an{" "}
                    <span className="text-darkBlue">
                      <Link
                        className="cursor-pointer"
                        target="_blank"
                        href="mailto:bhanushaliyash2000@gmail.com"
                      >
                        email
                      </Link>
                    </span>
                    .
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
