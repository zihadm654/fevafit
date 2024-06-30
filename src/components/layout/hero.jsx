import { IoIosArrowRoundForward } from "react-icons/io"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <section>
      <div className='container'>
          <div className="max-md:mx-auto relative overflow-hidden max-md:h-[65svh] h-[85svh] background">
              <div className="text-white flex flex-col items-center pt-12 max-md:pt-18 h-full text-center gap-4 space-y-3 px-12 max-md:px-6">
              <h1 className="text-7xl max-md:text-4xl font-bold px-4 max-md:px-0">Tailored Corporate Wellness Programs</h1>
              <p className="text-md">Elevate Your Employees Well-Being</p>
              <Button className="bg-[#6733B5] hover:bg-blue-700 text-white p-6 max-md:py-7 py-8 rounded-xl text-lg">
                <Link className="flex items-center justify-center" to="tel:+911543258744">
                Book a consultation call<IoIosArrowRoundForward className="size-6"/>
                </Link>
              </Button>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero