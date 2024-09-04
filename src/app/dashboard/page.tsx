const Dashboard = () => {
  return (
    <div className="flex">
      <div className="mx-12 mt-11 flex-[1_1_80%]">
        <p className="text-3xl font-semibold text-slate-700">
          Project Wildflower
        </p>
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
      <div className="mx-12 mt-11 flex-[1_1_20%] border-l-[1px]">
        <p className=" font-semibold text-2xl p-6 border-b-[1px]">Help</p>
        <div>
          <div className="h-[70rem] p-6 overflow-y-scroll">
            {/* Quick Start Guide Section */}
            <section id="quick-start-guide" className="mb-8">
              <h2 className="text-xl font-bold mb-4">Quick Start Guide</h2>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  Getting Started with TaskGrid
                </h3>
                <p className="mb-2">
                  Learn how to create your first task and set up Agile boards.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  View Guide
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Basic Navigation Tips</h3>
                <p className="mb-2">
                  Find out how to navigate the dashboard, Agile boards, and
                  sprints.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  See Tips
                </a>
              </div>
            </section>

            {/* FAQs Section */}
            <section id="faq" className="mb-8">
              <h2 className="text-xl font-bold mb-4">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  How do I create a new task?
                </h3>
                <p className="mb-2">
                  Go to any Agile board or backlog and click on the &rdquo;+ New
                  Task&rdquo; button. Fill in the required details like title,
                  description, priority, and assignee.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  More Details
                </a>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  How do I organize tasks into sprints?
                </h3>
                <p className="mb-2">
                  Drag tasks from the backlog into the current sprint or use the
                  Sprint Planning screen to manage your tasks effectively.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  How do I integrate TaskGrid with GitHub, Slack, and other
                  tools?
                </h3>
                <p className="mb-2">
                  Go to the Integrations section in the settings. Choose the
                  integration you&#34;d like to enable and follow the prompts to
                  connect your accounts.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Learn More
                </a>
              </div>
            </section>

            {/* Video Tutorials Section */}
            <section id="video-tutorials" className="mb-8">
              <h2 className="text-xl font-bold mb-4">Video Tutorials</h2>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  Introduction to TaskGrid
                </h3>
                <p className="mb-2">
                  A quick overview of the main features of TaskGrid.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Watch Video
                </a>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  Managing Tasks and Sprints
                </h3>
                <p className="mb-2">
                  Learn how to effectively manage tasks, assign them to team
                  members, and track sprint progress.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Watch Tutorial
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Using Agile Boards in TaskGrid
                </h3>
                <p className="mb-2">
                  Discover how to customize your Kanban and Scrum boards for
                  better workflow.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  View Tutorial
                </a>
              </div>
            </section>

            {/* Contact Support Section */}
            <section id="contact-support" className="mb-8">
              <h2 className="text-xl font-bold mb-4">Contact Support</h2>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">Need more help?</h3>
                <p>Reach out to our support team with your questions.</p>
                <ul className="list-disc list-inside ml-4 mb-2">
                  <li>
                    <strong>Live Chat:</strong> Get instant help from a support
                    agent.
                  </li>
                  <li>
                    <strong>Email Support:</strong> Drop us an email at{" "}
                    <a
                      href="mailto:support@taskgrid.com"
                      className="text-blue-500 hover:underline"
                    >
                      support@taskgrid.com
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Help Center:</strong> Browse the full list of FAQs
                    and guides.
                  </li>
                </ul>
                <a href="#" className="text-blue-500 hover:underline">
                  Visit Help Center
                </a>
              </div>
            </section>

            {/* Best Practices for Agile Teams Section */}
            <section id="best-practices" className="mb-8">
              <h2 className="text-xl font-bold mb-4">
                Best Practices for Agile Teams
              </h2>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">Setting Up Sprints</h3>
                <p className="mb-2">
                  Learn how to plan your sprints effectively with TaskGrid’s
                  sprint management tools.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read Article
                </a>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  Prioritizing Tasks in Backlog
                </h3>
                <p className="mb-2">
                  Tips on using priority levels and story points to organize
                  tasks in your backlog.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  View Guide
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Tracking Team Progress with Reports
                </h3>
                <p className="mb-2">
                  How to make the most of TaskGrid’s reporting tools, including
                  velocity tracking and burndown charts.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Learn More
                </a>
              </div>
            </section>

            {/* Product Updates & Announcements Section */}
            <section id="product-updates">
              <h2 className="text-xl font-bold mb-4">
                Product Updates & Announcements
              </h2>

              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  New Features in TaskGrid 2.0!
                </h3>
                <p className="mb-2">
                  Explore the latest improvements and additions to TaskGrid.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Coming Soon: Advanced Automations
                </h3>
                <p className="mb-2">
                  Stay updated on upcoming features like AI task recommendations
                  and advanced automations.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Learn More
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
