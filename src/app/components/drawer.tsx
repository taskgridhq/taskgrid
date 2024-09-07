"use client";

const Drawer = (props: { open: boolean }) => {
  return (
    <div
      className={` h-full bg-white fixed top-0 right-0 w-2/5 z-[200]  shadow-2xl ${
        props.open ? `translate-x-full` : `translate-x-0`
      }  transition-transform duration-300 ease-out`}
    >
      Sidetray Content
    </div>
  );
};

export default Drawer;
