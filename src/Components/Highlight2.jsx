import project from "../assets/project2.svg";

const Highlight2 = () => {
  return (
    <section className="max-w-7xl mx-auto font-campton pb-10">
      <div className="flex flex-col">
        <div className="my-10">
          <img
            src={project}
            alt="Project Highlight"
            className="mx-auto md:w-[40%] w-full md:px-0 px-5 rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-[70%] w-full md:px-0 px-5 mx-auto space-y-5">
          <h2 className="font-bold text-xl md:text-4xl text-center">
            TRANSFORM YOUR PROJECT MANAGEMENT GAME{" "}
          </h2>

          <p>
            Project management is not just about ticking boxes or following
            timelines, it’s about clarity, flow, and results.
          </p>

          <p>
            At Analytica Haven, we are not here to give you old methods wrapped
            in techy buzzwords. We are here to redefine the way you approach
            projects be it you are managing a startup idea, leading a team, or
            working solo.
          </p>

          <p>
            We teach you how to integrate AI, digital tools, and smart systems
            to move from being overwhelm to structure, from being confused to
            being confidence. No more chasing deadlines blindly. You will also
            learn how to automate boring stuff, stay ahead of tasks, and get
            real work done without burning out.
          </p>

          <p>
            Even if you are just starting out or already neck deep in your
            workflow, we will show you how to:
          </p>
          <ul className="space-y-3">
            <li>🔸 Plan with precision</li>
            <li>🔸 Execute with clarity</li>
            <li>🔸 Track progress like a boss</li>
            <li>🔸 Finish strong every time</li>
          </ul>

          <p>
            Project management, the Analytica way, is not just about staying
            organized. It’s all about getting future ready because that’s where
            the world is heading, and you deserve to be ahead of the curve.
          </p>

          <p>
            Let’s upgrade the way you work.
            <span className="block">
              Let’s transform your project management game.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Highlight2;
