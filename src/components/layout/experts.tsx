import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";

const config = [
  {
    img: "/IMG_4116 1.jpg",
    name: "Badar Al Tamami",
    position: "Founder and Elite Fitness Trainer",
  },
  {
    img: "/Image Placeholder.jpg",
    name: "Mohamed Al-Khaldi",
    position: " Partnership and Community Manager",
  },
  {
    img: "/Image Placeholder2.jpg",
    name: "Dr. Naser Al Riyami",
    position: "Clinical Psychologist",
  },
  {
    img: "/sara.jpg",
    name: "Sarah Tunstall",
    position: " Head Female Trainer",
  },
  {
    img: "/Snapinsta.app_445464562_756110420039933_5348426809057636_n_1024 1.jpg",
    name: "Husam Mohamed",
    position: "Transformation Coach and Asics Athlete (lost47kg!)",
  },
  {
    img: "/talha.jpg",
    name: "Talal Nasir",
    position: "Advisor on Culture and Talent Management Expert",
  },
];
const Experts = () => {
  return (
    <div className="container text-center p-12 max-md:p-5">
      <div className="flex items-center justify-between gap-3 w-full text-center py-4 mb-5 max-md:gap-1">
        <h1 className="text-4xl max-md:text-lg max-md:text-start font-bold">
          Meet Our Industry Experts
        </h1>
        <Button className="bg-purple-700">
          <Link
            className="underline"
            target="blank"
            to="https://www.instagram.com/fevafit.corporate"
          >
            View Our Experts
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-4">
        {config.map((item) => (
          <Card key={item.name} className="rounded-xl overflow-hidden pb-4">
            <img
              loading="lazy"
              className="h-60 max-md:h-52  object-cover aspect-video object-left-top w-full"
              src={item.img}
              alt="expert"
            />
            <CardTitle className="py-2 max-md:text-xl">{item.name}</CardTitle>
            <CardContent className="text-[#3E3E59] text-base">
              {item.position}
            </CardContent>
          </Card>
        ))}
        {/* <Card className="rounded-xl overflow-hidden pb-4">
          <img
            loading="lazy"
            className="h-56 max-md:h-52  object-cover aspect-video object-left-center w-full"
            src="/Image Placeholder.jpg"
            alt="expert"
          />
          <CardTitle className="py-2 max-md:text-xl">Mohamed Khaidi</CardTitle>
          <CardContent className="text-[#3E3E59]">
            Partnership and Community Manager
          </CardContent>
        </Card>
        <Card className=" rounded-xl overflow-hidden pb-4">
          <img
            loading="lazy"
            className="h-56 max-md:h-52  object-cover aspect-video object-left-top w-full"
            src="/IMG_4116 1.jpg"
            alt=""
          />
          <CardTitle className="py-2 max-md:text-xl">Badar Al Tamami</CardTitle>
          <CardDescription>Founder and Elite Fitness Trainer</CardDescription>
        </Card>
        <Card className="rounded-xl overflow-hidden pb-4">
          <img
            loading="lazy"
            className="h-56 max-md:h-52  object-cover aspect-video object-left-top w-full"
            src="/Image Placeholder2.jpg"
            alt=""
          />
          <CardTitle className="py-2 max-md:text-xl">
            Dr. Naser Ali Riyami
          </CardTitle>
          <CardDescription className="px-3">
            Clinical Psychologist
          </CardDescription>
        </Card>
        <Card className="rounded-xl overflow-hidden pb-4">
          <img
            loading="lazy"
            className="h-56 max-md:h-52  object-cover aspect-video object-left-top w-full"
            src="/sara.jpg"
            alt=""
          />
          <CardTitle className="py-2 max-md:text-xl">Sarah Tunstall</CardTitle>
          <CardDescription className="px-3">
            Head Female Trainer
          </CardDescription>
        </Card>
        <Card className="rounded-xl overflow-hidden pb-4">
          <img
            loading="lazy"
            className="h-56 max-md:h-52 object-cover aspect-video object-left-top w-full"
            src="/Snapinsta.app_445464562_756110420039933_5348426809057636_n_1024 1.jpg"
            alt=""
          />
          <CardTitle className="py-2 max-md:text-xl">Husam Mohamed</CardTitle>
          <CardDescription className="px-3">
            Transformation Coach and Asics Athlete (lost47kg!)
          </CardDescription>
        </Card>
        <Card className="rounded-xl overflow-hidden pb-4">
          <img
            loading="lazy"
            className="h-56 max-md:h-52 object-cover aspect-video object-left-top w-full"
            src="/talha.jpg"
            alt=""
          />
          <CardTitle className="py-2 max-md:text-xl">Talal Nasir</CardTitle>
          <CardDescription className="px-3">
            Advisor on Culture and Talent Management Expert
          </CardDescription>
        </Card> */}
      </div>
    </div>
  );
};

export default Experts;
