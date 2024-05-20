"use client";
import { useState } from "react";

const Academics = () => {
  type Menu = "Education" | "Experience";
  const bars: Menu[] = ["Education", "Experience"];
  const [activeBar, setactiveBar] = useState<Menu>("Education");
  return (
    <div className="flex flex-col md:flex-row 2xl:px-40 xl:px-32 lg:px-20 md:px-10 sm:px-8 px-6 mt-16 w-full md:gap-20 gap-10">
      <div className="md:w-1/5 w-full flex flex-row md:flex-col justify-center md:justify-start">
        {bars.map((bar) => (
          <div
            key={bar}
            className={`${
              activeBar === bar
                ? "md:border-l-4 md:border-t-0 border-t-4 border-darkBlue text-darkBlue"
                : "md:border-l md:border-t-0 border-t border-medGrey text-medGrey"
            } h-14 flex items-center w-full justify-center md:justify-start cursor-pointer`}
            onClick={() => setactiveBar(bar)}
          >
            <p
              className={`text-2xl md:pl-8 lg:pl-12 ${
                activeBar !== bar && "md:ml-[3px] md:mt-0 mt-[3px]"
              }`}
            >
              {bar}
            </p>
          </div>
        ))}
      </div>

      <div className="md:w-4/5 w-full md:m-auto flex flex-col gap-8">
        <div className="flex items-start md:items-center lg:gap-10 gap-6">
          <div className="p-[5px] md:mt-0 mt-3 rounded-full bg-darkBlue" />
          <p className="text-medGrey text-left text-lg">
            {activeBar === "Education"
              ? "Completed Postgraduation & Graduation from Mumbai University with a strong focus on software development, data structures, and algorithm design."
              : "With Over 1.5 years of hands-on experience in developing, and deploying web applications using modern technologies and frameworks, contributing to various successful projects."}
          </p>
        </div>
        <div className="flex items-start md:items-center lg:gap-10 gap-6">
          <div className="p-[5px] rounded-full md:mt-0 mt-3 bg-darkBlue" />
          <p className="text-medGrey text-left text-lg">
            {activeBar === "Education"
              ? "Consistently achieved high academic performance and actively participated in various technical and hackathon events, showcasing problem-solving skills and teamwork."
              : "Experienced working directly with clients to gather requirements, improving performance & user experience of applications while aligning with client requirements."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Academics;
