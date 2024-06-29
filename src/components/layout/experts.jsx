import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Card, CardDescription, CardTitle } from "../ui/card"

const Experts = () => {
  return (
    <div className="container max-w-6xl text-center py-4">
        <div className="flex items-center justify-between gap-3 w-full text-center py-4 mb-5">
            <h1 className="text-4xl max-md:text-lg max-md:text-start">Meet Our Industry Experts</h1>
            <Button className="bg-purple-700">
                <Link target="blank" to="https://www.instagram.com/fevafit.corporate" >View Our Experts</Link></Button>
        </div>
        <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1">
        <Card >
            <img className="h-56 object-cover aspect-video object-left-top w-full" src="/IMG_4116 1.jpg" alt=""/>
            <CardTitle className="py-2">Mohamed Khaidi</CardTitle>
            <CardDescription>Clinical Psychologist</CardDescription>
        </Card>
        <Card >
            <img  className="h-56 object-cover aspect-video object-left-top w-full" src="/Snapinsta.app_445464562_756110420039933_5348426809057636_n_1024 1.jpg" alt=""/>
            <CardTitle className="py-2">Dr. Naser Ali Riyami</CardTitle>
            <CardDescription>Clinical Psychologist</CardDescription>
        </Card>
        <Card >
            <img  className="h-56 object-cover aspect-video object-left-top w-full" src="/Image Placeholder.jpg" alt=""/>
            <CardTitle className="py-2">Dr. Naser Ali Riyami</CardTitle>
            <CardDescription className="px-3">Transformation Coach and Asics Athlete (lost 47kgs!)</CardDescription>
        </Card>
        </div>
        </div>
  )
}

export default Experts