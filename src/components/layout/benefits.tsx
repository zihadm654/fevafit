import { IoIosArrowRoundUp } from "react-icons/io";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const Benefits = () => {
  return (
    <section className="py-12 max-md:py-6">
      <section>
        <div className="container p-12 max-md:px-6 max-md:py-10">
          <h1 className="text-center text-5xl font-bold">Results & Metric</h1>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 pt-12">
            <Card className="py-12 px-6">
              <CardTitle className="text-center text-5xl font-medium flex items-center justify-center ">
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
                High employee satisfaction rates, with many employees expressing
                appreciation for the well-structured and engaging wellness
                programs
              </CardDescription>
            </Card>
            <Card className="py-12 px-6">
              <CardTitle className="text-center text-5xl font-medium">
                50%+
              </CardTitle>
              <CardContent className="text-center text-xl">
                Employee Participation
              </CardContent>
              <CardDescription className="text-center text-xl text-[#6B6B6B]">
                High engagement rates with over 50% of employees invited
                regularly participating in wellness activities
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Benefits;
