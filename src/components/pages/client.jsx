const Client = () => {
  return (
    <section className="bg-gray-200">
      <div className="container p-12 max-md:px-6 max-md:py-10">
        <h1 className="text-center text-3xl font-bold">Client Overview</h1>
        <div className="aspect-video w-full rounded-2xl overflow-hidden my-7">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/OYYfYsO3Mt4?si=cihUuOX14RNvOEJo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          Based on industry benchmarks, every $10,000 invested in employee
          well-being can yield up to $42,700 in returns. Our wellness program
          has the potential to deliver substantial ROI by improving health and
          reducing stress
        </p>
      </div>
    </section>
  );
};

export default Client;
