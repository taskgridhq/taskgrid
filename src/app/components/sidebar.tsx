"use client";

import { AiOutlineTeam } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { CgBoard, CgLink, CgMiniPlayer } from "react-icons/cg";
import { GoProject } from "react-icons/go";
import { GrTask } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
import { PiChartBarFill } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";

export function SidebarComponent() {
  const sidebarItems = [
    {
      label: "Dashboard",
      link: "/dashboard",
      icon: <PiChartBarFill className="text-blue-500" />,
    },
    {
      label: "Boards",
      link: "/boards",
      icon: <CgBoard className="text-blue-500" />,
    },
    {
      label: "Backlogs",
      link: "/backlogs",
      icon: <CgMiniPlayer className="text-blue-500" />,
    },
    {
      label: "Sprints",
      link: "/sprints",
      icon: <GrTask className="text-blue-500" />,
    },
    {
      label: "Reports",
      link: "/reports",
      icon: <TbReportAnalytics className="text-blue-500" />,
    },
    {
      label: "Team",
      link: "/team",
      icon: <AiOutlineTeam className="text-blue-500" />,
    },
    {
      label: "Integrations",
      link: "/integrations",
      icon: <CgLink className="text-blue-500" />,
    },
    {
      label: "Settings",
      link: "/settings",
      icon: <IoSettings className="text-blue-500" />,
    },
  ];
  return (
    <div className="h-screen w-80 border-r-[1px] absolute grid">
      <div className="flex flex-col justify-between">
        <div className="border-b-[1px]">
          <div className="flex mb-5  hover:bg-slate-200 text-slate-600 px-4 py-4 cursor-pointer border-b-[1px]">
            <GoProject className="text-4xl mt-1 mx-3 text-blue-500" />
            <div>
              <p className=" text-sm text-blue-500 ">Current Project</p>
              <p>
                <b>Epic 001</b>
              </p>
            </div>
          </div>

          {sidebarItems.map((item, index) => {
            return (
              <div
                className=" my-5 mx-2 hover:bg-slate-200 text-slate-600 rounded-md px-7 py-4 cursor-pointer"
                key={index}
              >
                <a href={item.link}>
                  <div className="flex gap-4">
                    <p className="text-2xl text-gray-500">{item.icon}</p>
                    <p>{item.label}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        <div className=" hover:bg-slate-200 text-slate-600 rounded-md px-7 py-4 cursor-pointer">
          <div className="flex gap-3">
            <p className="text-5xl text-gray-500 my-1">
              {/* todo: replace this icon with display picture */}
              <BiUserCircle className="text-blue-500" />
            </p>

            <div>
              <p className="my-1">Paul Sneed</p>
              <p className="my-1 text-sm">paul@taskgrid.io</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
