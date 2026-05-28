function Home() {
  return (
    <div className="home">
      <div className="home-page">
        <div className="hero">
          <header>
            <h1>Neurotoxicology & Biomarker Research</h1>
            <h3>
              Advancing neurobiological insight through precision analytics.
            </h3>
            <p>
              We develop analytical tools and biomarker workflows that help
              researchers interpret complex neurological and toxicological data
              with clarity and confidence.
            </p>
          </header>
          <img
            id="hero-img"
            src="/src/assets/images/brain-mri.jpg"
            alt="Brain MRI"
          />
        </div>
        <div className="content"></div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Home;
