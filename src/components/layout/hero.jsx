import { IoIosArrowRoundForward } from "react-icons/io"

const Hero = () => {
  return (
    <section>
      <div className='container'>
          <div className="max-md:mx-auto relative overflow-hidden max-md:h-[65svh] h-[80svh]">
            <img
              className="size-full object-cover object-center absolute top-0 left-0 -z-10 bg-blend-darken"
              src="/MOX03479 1.jpg"
              alt="preview landing"
            />
              <div className="text-white flex flex-col items-center justify-center h-full text-center gap-4 space-y-5 px-12">
              <h1 className="text-7xl max-md:text-4xl font-bold px-4 max-md:px-0">Tailored Corporate Wellness Programs🤑</h1>
              <p className="text-md">Elevate Your Employees Well-Being</p>
              <button className="flex items-center justify-center bg-purple-600 hover:bg-blue-700 text-white font-semibold p-4 rounded-xl">
                Ready for the Challenge? <IoIosArrowRoundForward className="size-6"/>
              </button>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero