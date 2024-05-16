import Header from "@/components/Header";
import React from "react";
import rightArrow from "../../../public/logos/RightArrow.svg";
import Image from "next/image";

const Blog = () => {
  return (
    <main className="w-full flex min-h-screen flex-col">
      <Header />
      <section
        id="projects"
        className="max-w-screen-xl mx-auto w-full sm:p-8 p-2 m-auto text-center md:mt-0 sm:mt-6 !mt-10"
      >
        <div className="flex flex-col">
          <span className="text-3xl text-medGrey mt-8">blogs</span>
          <span className="text-xl text-medGrey mt-6">
            Explore my blogs to discover insights, tutorials, and stories from
            the world of software development
          </span>
        </div>
        <div className="w-full sm:px-24 lg:px-0 px-3 !mt-10 grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-8 xl:gap-16 w-4/5 place-items-center md:m-auto text-center mb-6">
          {[1, 2, 3, 4].map((blog) => (
            <div className="rounded-3xl border-2 border-medGrey w-full flex flex-col">
              <div className="p-1 border-b-2 border-medGrey">
                <div className="flex p-2 gap-2 justify-end mr-2">
                  <div className="h-3 w-3 rounded-full bg-medGrey" />
                  <div className="h-3 w-3 rounded-full bg-medGrey" />
                  <div className="h-3 w-3 rounded-full bg-medGrey" />
                </div>
              </div>

              <div className="flex flex-col gap-5 text-medGrey p-6">
                <span className="text-2xl sm:text-3xl text-left">
                  Implementing an Auth Guard with JWT tokens in Nest.js
                </span>
                <p className="text-left">
                  Authentication guards allow you to control access to routes
                  and controllers in a NestJS application based on user
                  authentication......
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex-shrink-0 border-2 border-medGrey rounded-full text-darkBlue px-3 py-1 flex justify-center items-center">
                    <p className="text-medGrey sm:text-sm text-xs">
                      Javascript
                    </p>
                  </div>

                  <div className="flex-shrink-0 border-2 border-medGrey rounded-full text-darkBlue px-3 py-1 flex justify-center items-center">
                    <p className="text-medGrey sm:text-sm text-xs">ReactJs</p>
                  </div>

                  <div className="flex-shrink-0 border-2 border-medGrey rounded-full text-darkBlue px-3 py-1 flex justify-center items-center">
                    <p className="text-medGrey sm:text-sm text-xs">NextJs</p>
                  </div>

                  <div className="flex-shrink-0 border-2 border-medGrey rounded-full text-darkBlue px-3 py-1 flex justify-center items-center">
                    <p className="text-medGrey sm:text-sm text-xs">NestJS</p>
                  </div>
                </div>
              </div>

              <div className="p-1 border-t-2 border-medGrey w-full py-3">
                <div className="mr-5 flex gap-2 justify-end items-center">
                  <span className="text-2xl text-darkBlue">Read Post</span>
                  <Image src={rightArrow} alt="arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
