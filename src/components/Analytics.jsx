import { useEffect } from "react";
import ReactGA from "react-ga4";
const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize("G-4HG3ZV15DV");
  }, []);
  return null;
};

export default Analytics;
