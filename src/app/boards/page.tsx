"use client";
import { useState } from "react";
import Drawer from "../components/drawer";

const Boards = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <Drawer open={drawerOpen} />
      Content
      <button onClick={() => setDrawerOpen(!drawerOpen)}>Click</button>
    </div>
  );
};

export default Boards;
