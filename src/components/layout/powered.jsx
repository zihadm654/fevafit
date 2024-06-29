import MaxWidthWrapper from "../shared/max-width-wrapper"

const Powered = () => {
  return (
    <section className="py-14 text-muted-foreground">
      <MaxWidthWrapper>
        <h2 className="text-center text-2xl font-bold uppercase">
        Trusted by Leading Organisations 
        </h2>
        <div className="mt-10 flex items-center justify-center space-x-16 max-md:space-x-6">
          <img src="/image 39.png" alt="icons" className="object-cover aspect-auto max-h-12" />
          <img src="/image 38.png" alt="icons" className="object-cover max-h-12" />
          <img src="/reczm7ynHnFrnUpS2logowellx-logo (1).png" alt="icons" className="object-cover max-h-12" />
        </div>
        </MaxWidthWrapper>
</section>
  )
}

export default Powered