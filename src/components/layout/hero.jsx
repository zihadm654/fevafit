import MaxWidthWrapper from "../shared/max-width-wrapper"
import { IoIosArrowRoundForward } from "react-icons/io"

const Hero = () => {
  return (
    <div>
      <MaxWidthWrapper className='max-lg:mx-auto'>
          <div className="max-md:mx-auto relative overflow-hidden rounded-xl border md:rounded-lg max-md:h-[60vh] h-[80vh]">
            <img
              className="size-full object-cover object-center absolute top-0 left-0 -z-10"
              src="/MOX03479 1.jpg"
              alt="preview landing"
            />
              <div className="text-white flex flex-col items-center justify-center h-full text-center gap-4 space-y-5 px-2">
              <h1 className="text-6xl max-md:text-4xl font-bold">Tailored Corporate Wellness Programs🤑</h1>
              <p>Elevate Your Employees Well-Being</p>
              <button className="flex items-center justify-center bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ready for the Challenge <IoIosArrowRoundForward className="size-6"/>
              </button>
            </div>
          </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Hero