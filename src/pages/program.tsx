import Banner from "@/components/Banner";
import Footer from "@/components/footer";
import NavMobile from "@/components/mobile-nav";
import Navbar from "@/components/navbar";
import BoostHealth from "@/components/pages/boost_health";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoIosArrowRoundForward, IoIosArrowRoundUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Program = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavMobile />
      <Navbar scroll={true} />
      <main className="flex-1">
        <section>
          <div className="container">
            <div className="max-md:mx-auto relative overflow-hidden max-md:h-[65svh] h-[75svh] bg-gradient-to-tl from-black to-purple bg-blend-darken">
              <Banner src={"/banner.jpg"} />
              <div className="text-white flex flex-col items-center pt-20 max-md:pt-26 h-full text-center gap-4 space-y-3 px-12 max-md:px-5">
                <h1 className="text-6xl font-bold">Our Programs</h1>
                <h4 className="text-xl font-light">
                  Elevate Your Employees Well-Being
                </h4>
                <Link
                  to="https://wa.me/+971522103138"
                  className="relative inline-flex items-center justify-center px-6 py-4 overflow-hidden text-white bg-[#6733B5] rounded-lg group "
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-80 group-hover:h-80"></span>
                  <span className="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                  <span className="relative flex justify-center items-center font-semibold text-lg">
                    Book a free consultation call
                    <IoIosArrowRoundForward className="size-6" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <BoostHealth />
        <section className="bg-[#F1F1F1]">
          <section className="container p-12 max-md:px-6 max-md:py-10">
            <h1 className="text-4xl text-center font-semibold">
              This is what our clients had to say
            </h1>
            <p className="text-center py-2 text-[#6B6B6B]">
              Lorem ipsum dolor sit amet consectetur. Molestie dui at amet
              laoreet. Nisl risus sit sed magna tincidunt a.
            </p>
            <div>
              <Carousel className="py-6 px-3">
                <CarouselContent>
                  <CarouselItem>
                    <div className="aspect-square rounded-2xl overflow-hidden">
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
                  </CarouselItem>
                  <CarouselItem>
                    <div className=" aspect-square rounded-2xl overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/k4C5tLYtfJk"
                        title="Sophia from the Wellx team shares her thoughts on our bootcamps 💪 #corporateevents #wellness"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className=" aspect-square rounded-2xl overflow-hidden">
                      <CarouselItem>
                        <div className=" aspect-square rounded-2xl overflow-hidden">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/3ChKfZ6ruts"
                            title="HR Testimonial- Qassim Al Awadhi"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </CarouselItem>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="-left-6" />
                <CarouselNext className="-right-6" />
              </Carousel>
            </div>
          </section>
        </section>
        <section className="py-12 max-md:py-6">
          <section>
            <div className="container p-12 max-md:px-6 max-md:py-10">
              <h1 className="text-center text-5xl font-bold">
                Benefits Snapshot
              </h1>
              <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 pt-12">
                <Card className="py-12 px-6">
                  <CardTitle className="text-center text-5xl font-medium flex items-center justify-center ">
                    21%
                    <IoIosArrowRoundUp />
                  </CardTitle>
                  <CardContent className="text-center text-xl mt-4">
                    Reduce Absenteism
                  </CardContent>
                  <CardDescription className="text-center text-xl text-[#6B6B6B]">
                    Poor health increases absenteeism and lowers productivity.
                    We improve your teams metabolic health 🩸
                  </CardDescription>
                </Card>
                <Card className="py-12 px-6">
                  <CardTitle className="text-center text-5xl font-medium">
                    80%+
                  </CardTitle>
                  <CardContent className="text-center text-xl pt-4">
                    Engagement Scores
                  </CardContent>
                  <CardDescription className="text-center text-xl text-[#6B6B6B]">
                    With program participants surveys expressing that their
                    company values their health and well-being 📊
                  </CardDescription>
                </Card>
                <Card className="py-12 px-6">
                  <CardTitle className="text-center text-5xl font-medium">
                    95%
                  </CardTitle>
                  <CardContent className="text-center text-xl pt-4">
                    Employee Satisfaction
                  </CardContent>
                  <CardDescription className="text-center text-xl text-[#6B6B6B]">
                    The majority of our clients employees enjoyed the sessions
                    we offer and gave it a five star rating ⭐
                  </CardDescription>
                </Card>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Program;
