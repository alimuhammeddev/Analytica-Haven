import project from "../assets/project3.svg";

const Highlight3 = () => {
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
        <h2 className="font-bold text-xl md:text-4xl text-center">Excel for Data Analysis</h2>

<p>You think Excel is just for accountants and office admins?</p>
 
 <p>Well think again.</p>

<p>At Analytica Haven, we take Excel from basic spreadsheets to power packed data analysis tools that help you make smart, and confident decisions.</p>


<p>This isn’t about dragging cells and formatting tables. It's about showing and knowing you how to:</p>

<ul className="list-disc ml-5 space-y-3">
  <li>Clean, organize, and structure raw data like a professional.</li>
  <li>Use formulas, functions, and pivot tables without getting lost.</li>
  <li>Visualize your data with sleek and understandable charts.</li>
  <li>Spot trends, patterns, and insights that can move needle in business or personal projects.</li>
</ul>

<p>The world runs on data and if you can’t read or make sense of it, you would be stuck watching from the sidelines.</p>

<p>
With our training, you won’t just use Excel, you will command it.
  <span className="block">No fluff, no theory overloaded, just practical, real-life application with results you can feel.</span>
</p>

<p>Whether you are a student, freelancer, business owner, or career switcher, Excel is your launchpad into the world of data, and we are here to show you how far you can go.</p>

<p>
Unlock the power of Excel.
  <span>Let your data tell its story and you be the one to read it.</span>
</p>
    </div>
      </div>
    </section>
  )
}

export default Highlight3