const Dashboard = () => {
  return (
    <div className="flex">
      <div className="mx-12 mt-11 flex-[1_1_80%]">
        <p className="text-3xl font-semibold text-slate-700">Project Name</p>
        <p className="my-6 text-slate-700">
          Here goes the project description Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Deserunt repellat, molestiae est alias
          dolor quae tempora voluptatem sunt aliquid molestias, mollitia
          delectus ipsam accusamus aspernatur
        </p>
        <br />

        <div className="grid grid-flow-col">
          <div>
            <p className=" text-xl text-blue-500">Project Summary</p>
          </div>
          <div>
            <p className=" text-xl text-blue-500">Project Burndown</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
