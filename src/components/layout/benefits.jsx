import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const Benefits = () => {
  return (
    <section className="py-12 max-md:py-6">
      <div className="container p-12 max-md:p-6 text-center">
        <h1 className="text-3xl font-bold">Benefits Snapshot</h1>
        <div className="py-12 grid grid-cols-3 gap-7 max-md:grid-cols-1">
          <Card className="p-8">
            <CardTitle className="text-5xl max-md:text-4xl">21%</CardTitle>
            <CardContent className="font-semibold text-lg p-3">
              Reduce Absenteism
            </CardContent>
            <CardDescription className="text-lg">
              Poor health increases absenteeism and lowers productivity. We
              improve your teams metabolic health 🩸
            </CardDescription>
          </Card>
          <Card className="p-8">
            <CardTitle className="text-5xl max-md:text-4xl">80%+</CardTitle>
            <CardContent className="font-semibold text-lg p-3">
              Engagement Scores
            </CardContent>
            <CardDescription className="text-lg">
              With program participants surveys expressing that their company
              values their health and well-being 📊
            </CardDescription>
          </Card>
          <Card className="p-8">
            <CardTitle className="text-5xl max-md:text-4xl">95%</CardTitle>
            <CardContent className="font-semibold text-lg p-3">
              Employee Satisfaction
            </CardContent>
            <CardDescription className="text-lg">
              The majority of our clients employees enjoyed the sessions we
              offer and gave it a five star rating ⭐
            </CardDescription>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
