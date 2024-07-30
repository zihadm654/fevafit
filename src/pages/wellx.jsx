import Footer from "../components/footer";
import Engage from "../components/layout/engage";
import NavMobile from "../components/mobile-nav";
import Navbar from "../components/navbar";
import Client from "../components/pages/client";
import Hero from "../components/pages/hero";
import Metric from "../components/pages/metric";
const data = [
  {
    title: "15% ",
    sub: "Reduce Absenteism",
    desc: "Trained 750 staff members and helped reduce absenteeism by 15%",
  },
  {
    title: "$1,850",
    sub: "Insurance",
    desc: "Through investing in our wellness program, Wellx saved $1,850,000 in insurance claims in 2024",
  },
  {
    title: "95%",
    sub: " Engagement Satisfaction",
    desc: "Lorem ipsum dolor sit amet consectetur. Adipiscing volutpat vulputate aliquet mauris amet in.",
  },
];
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
        <Metric data={data} />
        <Engage />
      </main>
      <Footer />
    </div>
  );
};

export default Wellx;
