"use client";
import { useState } from "react";
import Drawer from "./components/drawer";
import { FaSearch, FaSearchengin } from "react-icons/fa";
import WorkItemSearch from "./components/workitemsearch";

const Boards = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="ml-80">
      <Drawer open={drawerOpen} />
      <div className="mx-12 mt-11">
        <p className="text-3xl font-semibold text-slate-700">Project Name</p>
        <div className="my-3">
          <p className="text-xl mt-4">Boards</p>
        </div>
        <br />
        <div>
          <p className=" text-slate-600">View all items</p>
          <WorkItemSearch placeholder={"Search work items"} />
        </div>
      </div>
    </div>
  );
};

export default Boards;
