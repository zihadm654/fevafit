import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../ui/card"
import {Button} from "../ui/button"
import { GoRocket } from "react-icons/go"
import { GiBrain, GiHumanTarget } from "react-icons/gi"

const Benefits = () => {
  return (
    <div className="container max-w-6xl text-center py-4 my-3">
        <h1 className="text-3xl font-bold">Benefits Snapshot</h1>
        <div className="py-12 grid grid-cols-3 gap-4 max-md:grid-cols-1">
          <Card className="p-5">
            <CardTitle>21%</CardTitle>
            <CardContent>Reduce Absenteism</CardContent>
            <CardDescription>Poor health increases absenteeism and lowers productivity. We improve your teams metabolic health 🩸</CardDescription>
          </Card>
          <Card className="p-5">
            <CardTitle>80%+</CardTitle>
            <CardContent>Engagement Scores</CardContent>
            <CardDescription>With program participants surveys expressing that their company values their health and well-being 📊</CardDescription>
          </Card>
          <Card  className="p-5">
            <CardTitle>95%</CardTitle>
            <CardContent>Employee Satisfaction</CardContent>
            <CardDescription>The majority of our clients employees enjoyed the sessions we offer and gave it a five star rating ⭐</CardDescription>
          </Card>
        </div>
        <h1 className="text-3xl font-bold py-3 mb-4">Benefits Snapshot</h1>
    <div className="flex justify-around items-center max-md:items-stretch py-4 max-md:flex-col gap-3">
      <Button className='bg-purple-700 p-6 text-lg'>
      <GoRocket className="pr-2 size-6"/> Boost Employee Engagement</Button>
      <Button variant="outline" className=' p-6 text-lg'><GiBrain className="pr-2 size-6"/>{" "} Reduce Stress</Button>
      <Button variant="outline" className='p-6 text-lg'><GiHumanTarget className="pr-2 size-6"/>{" "}  Lower Employee Turn over</Button>
    </div>
    <div className="flex items-center justify-between gap-4 py-4 max-md:flex-col-reverse">
      <article className="text-start">
        <h1 className="text-3xl font-bold py-3 ">Boost Employee Engagement</h1>
        <p>Programs designed to significantly increase engagement scores and drive productivity throughout your entire organization. These initiatives foster a positive work environment, enhancing overall employee satisfaction and retention.</p>
      </article>
      <img src="/12427686_4955273-removebg-preview (1) 1.png" alt="" />
    </div>
  </div>
  )
}

export default Benefits