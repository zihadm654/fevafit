import { useEffect } from "react";
import ReactGA from "react-ga4";
const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize("G-BQWJY2Q1M7");
  }, []);
  return null;
};

export default Analytics;
