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

const Wellx = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavMobile />
      <Navbar scroll={true} />
      <main className="flex-1">
        <Hero
          img="/wellx.png"
          title="Elevate Your Employees Well-Being"
          cta="Book a free consultation call"
        />
        <Client />
        <section>
          <div className="container p-12 max-md:px-6 max-md:py-10">
            <h1 className="text-center text-3xl font-bold">Results & Metric</h1>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 pt-12">
              <Card className="py-12 px-6">
                <CardTitle className="text-center text-5xl font-medium flex items-center justify-center">
                  15%
                  <IoIosArrowRoundUp />
                </CardTitle>
                <CardContent className="text-center text-xl">
                  Reduce Absenteism
                </CardContent>
                <CardDescription className="text-center text-xl text-[#6B6B6B]">
                  Trained 750 staff members and helped reduce absenteeism by 15%
                </CardDescription>
              </Card>
              <Card className="py-12 px-6">
                <CardTitle className="text-center text-5xl font-medium">
                  $1,850
                </CardTitle>
                <CardContent className="text-center text-xl">
                  Insurance
                </CardContent>
                <CardDescription className="text-center text-xl text-[#6B6B6B]">
                  Through investing in our wellness program, Wellx saved
                  $1,850,000 in insurance claims in 2024
                </CardDescription>
              </Card>
              <Card className="py-12 px-6">
                <CardTitle className="text-center text-5xl font-medium">
                  95%
                </CardTitle>
                <CardContent className="text-center text-xl">
                  Engagement Satisfaction
                </CardContent>
                <CardDescription className="text-center text-xl text-[#6B6B6B]">
                  Lorem ipsum dolor sit amet consectetur. Adipiscing volutpat
                  vulputate aliquet mauris amet in.
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

export default Wellx;
