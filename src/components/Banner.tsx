import { useEffect } from "react";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

const Banner = ({ src }: any) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    };
    img.src = src;
  }, [src]);
  return (
    <>
      {!loaded ? (
        <Blurhash
          hash="LPHyOct6tSsn0FaeM{bH_4WBROWV"
          width="100%"
          height="100%"
          punch={1}
          resolutionX={32}
          resolutionY={32}
        />
      ) : (
        <img
          src={src}
          alt="banner"
          className="h-full w-full object-cover absolute top-0 left-0 -z-10 object-left-top max-md:object-center"
          fetchPriority="high"
        />
      )}
    </>
  );
};

export default Banner;
