const Sucess = () => {
  return (
    <div className="container text-center p-12 max-md:p-6 bg-[#F1F1F1] max-md:py-12">
      <h1 className="text-5xl max-md:text-3xl font-bold">Sucess Story</h1>
      <p className="py-3">
        Discover how Feva Fit helped ENOC (Emirates National Oil Company)
        significantly improve employee well-being
      </p>
      <div className="aspect-video w-full rounded-2xl overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/3ChKfZ6ruts?si=ZVK0lHPTGMvy06ws"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Sucess;
