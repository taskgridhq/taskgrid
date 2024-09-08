import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineTask } from "react-icons/md";

const WorkItemSearch = ({ placeholder }: { placeholder: any }) => {
  const [displaySearchResults, setDisplaySearchResults] = useState(false);
  const [isTextEmpty, setTextEmpty] = useState(true);
  return (
    <div>
      <div className="flex">
        <div className=" border rounded-tl-xl w-[30rem] mt-3 flex">
          <FaSearch className=" text-slate-500 text-xl mt-3 ml-3" />
          <input
            type="text"
            onChange={(e) => {
              if (e.target.value === "") {
                setDisplaySearchResults(false);
              } else {
                setDisplaySearchResults(true);
              }
            }}
            placeholder={placeholder}
            maxLength={50}
            className="outline-none text-slate-600 my-[0.625rem] ml-[0.75rem]"
          />
        </div>
        <button className=" bg-blue-600 text-white rounded-tr-xl rounded-br-xl mt-[0.75rem] px-[0.75rem]">
          Search
        </button>
      </div>
      {displaySearchResults ? (
        <div className="w-[30rem]">
          {[{}, {}].map((item, index) => (
            <div
              key={index}
              className={`flex py-3 ${
                index > 0 ? "border t" : ""
              } hover:bg-slate-200 cursor-pointer border-l border-r `}
            >
              <MdOutlineTask className=" text-blue-400 text-4xl mx-2 mt-1" />{" "}
              <div>
                <p className=" text-md text-slate-600">
                  12343 • Todo task example 1
                </p>
                <div className="flex">
                  <div className=" text-sm text-slate-600">Paul Sneed</div>
                  <p className="mx-2 font-mono">•</p>
                  <div className=" text-sm text-slate-600">New</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default WorkItemSearch;
