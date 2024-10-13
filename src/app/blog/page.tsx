import Header from "@/components/Header";
import React from "react";
import rightArrow from "../../../public/logos/RightArrow.svg";
import Image from "next/image";
import { getBlogs } from "@/actions/blogAction";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Blog() {
  const blogs: any = await getBlogs();
  return (
    <main className="w-full flex min-h-screen flex-col">
      <Header />
      <section
        id="projects"
        className="max-w-screen-xl mx-auto w-full sm:p-8 p-2 m-auto text-center md:mt-0 sm:mt-6 !mt-10"
      >
        <div className="flex flex-col">
          <span className="text-4xl text-medGrey mt-8">blogs</span>
          <span className="text-xl text-medGrey mt-6">
            Explore my blogs to discover insights, tutorials, and stories from
            the world of software development
          </span>
        </div>
        <div className="w-full sm:px-24 lg:px-0 px-5 !mt-10 grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-8 xl:gap-16 mb-6">
          {(blogs || []).map((blog: any) => (
            <div
              key={blog._id}
              className="rounded-3xl border-2 border-medGrey w-full flex flex-col justify-between gap-3 sm:gap-4"
            >
              {/* <div className="p-1 border-b-2 border-medGrey">
                <div className="flex p-2 gap-2 justify-end mr-2">
                  <div className="h-3 w-3 rounded-full bg-medGrey" />
                  <div className="h-3 w-3 rounded-full bg-medGrey" />
                  <div className="h-3 w-3 rounded-full bg-medGrey" />
                </div>
              </div> */}

              {blog?.coverImage && (
                <div className="rounded-t-3xl overflow-hidden w-full h-[200px] border-b border-medGrey">
                  <img className="object-cover w-full h-full" src={blog.coverImage} />
                </div>
              )}

              {/* <div className="w-full flex flex-col justify-between gap-3 sm:gap-4"> */}
                <div className="flex flex-col gap-5 text-medGrey sm:px-6 px-4">
                  <span className="text-xl sm:text-2xl font-medium text-left">
                    {blog.blogName}
                  </span>
                </div>
                <div className="flex flex-col gap-5 text-medGrey sm:px-6 px-4">
                  <p className="text-left text-xs sm:text-sm">
                    {blog.description}
                  </p>
                </div>
                <div className="flex flex-col gap-5 text-medGrey sm:px-6 px-4">
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {(blog.tags || []).map((tag: any) => (
                      <div
                        key={tag}
                        className="flex-shrink-0 border-2 border-medGrey rounded-full text-darkBlue px-3 py-1 flex justify-center items-center"
                      >
                        <p className="text-medGrey text-xs">{tag}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-1 border-t-2 border-medGrey w-full py-2 sm:py-3">
                  <div className="mr-5 flex justify-end items-center">
                    <Link
                      className="flex items-center gap-2"
                      href={blog.link}
                      target="_blank"
                    >
                      <span className="text-xl sm:text-2xl text-darkBlue">
                        Read Post
                      </span>
                      <Image src={rightArrow} alt="arrow" />
                    </Link>
                  </div>
                </div>
              {/* </div> */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
