import { Button } from "../ui/button"
import { Card, CardDescription, CardTitle } from "../ui/card"
import { IoIosArrowRoundForward } from "react-icons/io"

const Engage = () => {
  return (
    <div className="container max-w-6xl py-6">
        <Card className="bg-purple-800 text-white text-center flex flex-col items-center justify-center space-y-6 p-12 max-md:p-4 relative">
            <img src="/Vector.svg" alt="" className="absolute top-18 left-0 object-contain w-full " />
            <CardTitle className="z-20 text-5xl">Engage with Feva Fit</CardTitle>
            <CardDescription className="z-20 px-24 text-lg mb-5 text-white max-md:px-6">Partner with Feva Fit for corporate wellness programs as unique as your team. Don't just take steps; leap forward in your organization's health and vitality journey</CardDescription>
            <Button className="bg-yellow-600 z-20 text-lg rounded-full p-7">Discover Custom Wellness
                {' '}<IoIosArrowRoundForward className="size-6"/>
            </Button>
        </Card>
    </div>
  )
}

export default Engage