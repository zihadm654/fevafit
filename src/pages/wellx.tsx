import { IoIosArrowRoundUp } from "react-icons/io";
import Footer from "../components/footer";
import Engage from "../components/layout/engage";
import NavMobile from "../components/mobile-nav";
import Navbar from "../components/navbar";
import Client from "../components/pages/client";
import Hero from "../components/pages/hero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "../components/ui/card";

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
          background="/30 landscape.jpg"
        />
        <Client
          link={"https://www.youtube.com/embed/k4C5tLYtfJk"}
          title={
            "Sophia from the Wellx team shares her thoughts on our bootcamps 💪 #corporateevents #wellness"
          }
        />
        <section className="container p-12 max-md:px-6 max-md:py-10">
          <h1 className="text-3xl text-center font-bold py-6">Gallery</h1>
          <Gallery />
        </section>
        <Engage />
      </main>
      <Footer />
    </div>
  );
};

export default Wellx;

export function Gallery() {
  const config = [
    {
      id: 1,
      img: "/CE01843F-4936-4F1E-82FB-9FE95089D41F.jpeg.jpg",
    },
    {
      id: 2,
      img: "/67130B0D-1769-4112-AEA7-4AC64212E49E.jpeg.jpg",
    },
    {
      id: 3,
      img: "/DC5E48EE-8300-4563-88EA-7C746CF8AAF7.jpeg.jpg",
    },
    {
      id: 4,
      img: "/DC5E48EE-8300-4563-88EA-7C746CF8AAF7.jpeg.jpg",
    },
  ];
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full"
    >
      <CarouselContent>
        {config.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-3">
                  <img src={item.img} alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
