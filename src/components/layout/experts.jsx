import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Card, CardDescription, CardTitle } from "../ui/card"

const Experts = () => {
  return (
    <div className="container text-center p-12">
        <div className="flex items-center justify-between gap-3 w-full text-center py-4 mb-5">
            <h1 className="text-4xl max-md:text-lg max-md:text-start font-bold">Meet Our Industry Experts</h1>
            <Button className="bg-purple-700">  
                <Link target="blank" to="https://www.instagram.com/fevafit.corporate" >View Our Experts</Link></Button>
        </div>
        <div className="grid grid-cols-4 gap-10 max-md:grid-cols-2">
        <Card className="rounded-xl overflow-hidden">
            <img className="h-56 object-cover aspect-video object-left-top w-full" src="/Image Placeholder.jpg" alt=""/>
            <CardTitle className="py-2">Mohamed Khaidi</CardTitle>
            <CardDescription>Partnership and Community Manager</CardDescription>
        </Card>
        <Card className="rounded-xl overflow-hidden">
            <img  className="h-56 object-cover aspect-video object-left-top w-full" src="/IMG_4116 1.jpg" alt=""/>
            <CardTitle className="py-2">Badar Al Tamami</CardTitle>
            <CardDescription>Founder and Elite Fitness Trainer</CardDescription>
        </Card>
        <Card className="rounded-xl overflow-hidden">
            <img  className="h-56 object-cover aspect-video object-left-top w-full" src="/Image Placeholder2.jpg" alt=""/>
            <CardTitle className="py-2">Dr. Naser Ali Riyami</CardTitle>
            <CardDescription className="px-3">Clinical Psychologist</CardDescription>
        </Card>
        <Card className="rounded-xl overflow-hidden">
            <img  className="h-56 object-cover aspect-video object-left-top w-full" src="/Snapinsta.app_445464562_756110420039933_5348426809057636_n_1024 1.jpg" alt=""/>
            <CardTitle className="py-2">Husam Mohamed</CardTitle>
            <CardDescription className="px-3">Transform Coach and Asics Athlete (lost47kg!)</CardDescription>
        </Card>
        </div>
        </div>
  )
}

export default Experts