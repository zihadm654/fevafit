import { IoIosArrowRoundUp } from "react-icons/io";
import Footer from "../components/footer";
import Engage from "../components/layout/engage";
import NavMobile from "../components/mobile-nav";
import Navbar from "../components/navbar";
import Client from "../components/pages/client";
import Hero from "../components/pages/hero";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../components/ui/card";

const Enoc = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavMobile />
      <Navbar scroll={true} />
      <main className="flex-1">
        <Hero
          img="/enoc.png"
          title="Elevate Your Employees Well-Being"
          cta="Book a free consultation"
        />
        <Client />
        <section>
          <div className="container p-12 max-md:px-6 max-md:py-10">
            <h1 className="text-center text-3xl font-bold">Results & Metric</h1>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 pt-12">
              <Card className="py-12 px-6">
                <CardTitle className="text-center text-5xl font-medium flex items-center justify-center">
                  20%
                  <IoIosArrowRoundUp />
                </CardTitle>
                <CardContent className="text-center text-xl">
                  Engagement Scores
                </CardContent>
                <CardDescription className="text-center text-xl text-[#6B6B6B]">
                  Trained 350+ staff members significantly improving their
                  engagement at work since the implementation of the wellness
                  program
                </CardDescription>
              </Card>
              <Card className="py-12 px-6">
                <CardTitle className="text-center text-5xl font-medium">
                  95%
                </CardTitle>
                <CardContent className="text-center text-xl">
                  Employee Satisfaction
                </CardContent>
                <CardDescription className="text-center text-xl text-[#6B6B6B]">
                  High employee satisfaction rates, with many employees
                  expressing appreciation for the well-structured and engaging
                  wellness programs
                </CardDescription>
              </Card>
              <Card className="py-12 px-6">
                <CardTitle className="text-center text-5xl font-medium">
                  50%+
                </CardTitle>
                <CardContent className="text-center text-xl">
                  Engagement Scores
                </CardContent>
                <CardDescription className="text-center text-xl text-[#6B6B6B]">
                  Trained 350+ staff members significantly improving their
                  engagement at work since the implementation of the wellness
                  program
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>
        <Engage />
      </main>
      <Footer />
    </div>
  );
};

export default Enoc;
