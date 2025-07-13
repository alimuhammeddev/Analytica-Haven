import project from "../assets/project1.svg";

const Project1 = () => {
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
            7 DAYS FREE GRAPHICS DESIGN BOOT CAMP{" "}
          </h2>

          <div>
            <p>No experience? No problem.</p>
            <p>No laptop? We’ve got mobile-friendly tools.</p>
            <p>No design sense? That’s what we are here for.</p>
          </div>
          <p>
            At Analytica Haven, we believe design should be accessible to
            everyone. That’s why we are offering a 7 days of free, hands on
            graphics design training with no gatekeeping, no jargon, just pure
            creative energy.
          </p>
          <p>In just one week, you will learn how to:</p>
          <ul className="space-y-3">
            <li>🎨 Create stunning designs using easy tools like Canva</li>
            <li>
              🎨 Understand color, balance, and layout (without feeling
              overwhelmed)
            </li>
            <li>
              🎨 Design flyers, carousels, social media posts, and personal
              brand banners.
            </li>
            <li>
              🎨 Bring your ideas to life, even if all you have is your phone.
            </li>
          </ul>

          <p>
            You will walk away with practical skills, not textbook theory.
            <span className="block">
              This isn’t a boring class, it’s a creative movement, and you are
              highly invited.
            </span>
          </p>

          <p>
            Be it you want to start freelancing, glow up your business page, or
            simply stop disturbing your graphics guy every weekend, this
            bootcamp will give you the tools and confidence to design like a
            pro.
          </p>

          <p>7 days. Zero cost. Maximum impact.</p>

          <p>
            Ready to tap into your creative side?
            <span className="block">Come learn, design, and vibe with us.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project1;
