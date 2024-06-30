import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Card, CardDescription, CardTitle } from "../ui/card"
import { IoIosArrowRoundForward } from "react-icons/io"

const Engage = () => {
  return (
    <div className="container px-12 py-28 max-md:px-6 max-md:py-16">
        <Card className="bg-[#6733B5] text-white text-center flex flex-col items-center justify-center space-y-6 p-20 max-md:p-8 relative rounded-2xl overflow-hidden">
            <img src="/Vector.svg" alt="" className="absolute top-18 left-0 object-contain w-full " />
            <CardTitle className="z-20 text-5xl max-md:text-3xl">Engage with Feva Fit</CardTitle>
            <CardDescription className="z-20 px-24 text-lg mb-5 text-white max-md:px-2">Partner with Feva Fit for corporate wellness programs as unique as your team. Don't just take steps; leap forward in your organization's health and vitality journey</CardDescription>
            <Button className="bg-[#E28B24] z-20 text-lg max-md:text-base rounded-full p-7 max-md:p-6">
              <Link to="https://www.instagram.com/fevafit.corporate/" target="blank" className="flex items-center justify-center border-b-2"> 
              Discover Custom Wellness
                {' '}<IoIosArrowRoundForward className="size-7"/>
              </Link>
            </Button>
        </Card>
    </div>
  )
}

export default Engage