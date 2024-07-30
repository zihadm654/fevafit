import Footer from "../components/footer";
import Engage from "../components/layout/engage";
import NavMobile from "../components/mobile-nav";
import Navbar from "../components/navbar";
import Client from "../components/pages/client";
import Hero from "../components/pages/hero";
import Metric from "../components/pages/metric";
const data = [
  {
    title: "20%",
    sub: "Engagement Scores",
    desc: "Trained 350+ staff members significantly improving their  engagement at work since the implementation of the wellness program",
  },
  {
    title: "95%",
    sub: "Employee Satisfaction",
    desc: "High employee satisfaction rates, with many employees expressing appreciation for the well-structured and engaging wellness programs",
  },
  {
    title: "50%+",
    sub: " Engagement Scores",
    desc: "Trained 350+ staff members significantly improving their  engagement at work since the implementation of the wellness program",
  },
];
const Enoc = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavMobile />
      <Navbar scroll={true} />
      <main className="flex-1">
        <Hero
          img="/image 38.png"
          title="Elevate Your Employees Well-Being"
          cta="Book a free consultation"
        />
        <Client />
        <Metric data={data} />
        <Engage />
      </main>
      <Footer />
    </div>
  );
};

export default Enoc;
