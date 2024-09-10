import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const BoostHealth = () => {
  return (
    <section className="pt-12 max-md:py-6">
      <section className="container p-12 max-md:px-6 max-md:py-10">
        <div className="flex items-center justify-between gap-12 text-lg flex-wrap max-md:flex-col">
          <div className="flex-1 ">
            <h1 className="text-3xl font-bold">
              Boost Employee Health and Engagement
            </h1>
            <h5 className="font-normal py-6">
              Discover the ultimate fitness experience with FevaFit Corporate
              Wellness Bootcamps!{" "}
            </h5>
            <ol className="list-disc pl-5 py-3 text-xl flex flex-col space-y-4 items-center">
              <li>
                <b>Check Vitals and Medical Advice:</b> Ensuring your health is
                our priority, we check the employees Blood Pressure, Weight and
                Glucose levels 🩺
              </li>
              <li>
                <b>Advice and Knowledge:</b>
                Ensure your team stays healthy, informed, and injury-free with
                expert insights 👩‍⚕️
              </li>
              <li>
                <b>Group Fitness Classes:</b>
                Boost team cohesion with fun and engaging 45 minute workouts 👏🏻
              </li>
              <li>
                <b>Stretches and Hydration:</b>
                Essential for flexibility and preventing injuries. 🙆🏼{" "}
              </li>
            </ol>
          </div>
          <div className="flex-1 max-h-fit w-full">
            <div className=" aspect-square w-full rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/R6vmPZqA6WM"
                title="This is how our fitness bootcamps look like #corporatewellness #sports #corporatewellnesscoach"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <h1 className="text-4xl text-center font-bold">
            Our Wellness Program
          </h1>
          <h5 className="text-center py-4 text-xl font-medium">
            Discover <span className="text-[#6733B5]"> FevaFit’s</span>{" "}
            Comprehensive Wellness Solutions for a Healthier, Happier Workplace.
          </h5>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 pt-12">
            <Card className="p-6 rounded-2xl">
              <img
                src="/image 45.jpg"
                alt="45"
                loading="lazy"
                className="h-60 max-md:h-52  object-cover aspect-video object-left-top w-full rounded-2xl"
              />
              <CardTitle className=" text-2xl font-medium py-3">
                Weekly Fitness Bootcamp
              </CardTitle>
              <CardDescription className=" text-lg text-[#6B6B6B]">
                Drive team spirit and weness with engaging, all-level fitness
                sessions
              </CardDescription>
            </Card>
            <Card className=" p-6 rounded-2xl">
              <img
                src="/Screenshot 2024-08-22 at 7.11.32 PM 1.jpg"
                alt="45"
                loading="lazy"
                className="h-60 max-md:h-52  object-cover aspect-video object-left-top w-full rounded-2xl"
              />
              <CardTitle className=" text-2xl font-medium py-3">
                Metabolic Tracking
              </CardTitle>
              <CardDescription className=" text-lg text-[#6B6B6B]">
                Employee health across time, including: Blood Pressure, BMI,
                Glucose levels and much more
              </CardDescription>
            </Card>
            <Card className="p-6 rounded-2xl">
              <Link to="/dashboard">
                <img
                  src="/mockuuups-clean-desk-with-dell-display-mockup 1.jpg"
                  alt="45"
                  loading="lazy"
                  className="h-60 max-md:h-52  object-cover aspect-video object-left-top w-full rounded-2xl"
                />
                <CardTitle className="text-2xl font-medium py-3">
                  HR Dashboard
                </CardTitle>
                <CardDescription className=" text-lg text-[#6B6B6B]">
                  Track your team's engagement, feedback and progress
                </CardDescription>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BoostHealth;
