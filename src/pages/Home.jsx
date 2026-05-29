import { NavLink } from "react-router-dom";

function Home() {
  function handleClick() {}
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
            <NavLink to="/technology">
              <button id="view-button">View Technology</button>
            </NavLink>

            <NavLink to="/publications">
              <button id="explore-button" onClick={handleClick}>
                Explore Publications
              </button>
            </NavLink>
          </header>
          <img
            id="hero-img"
            src="/src/assets/images/brain-mri.jpg"
            alt="Brain MRI"
          />
        </div>
        <div className="content">
          <div className="reference-section">
            <div className="reference-text">
              Trusted by researchers at
              <div className="reference-images">
                <img
                  id="reference-1"
                  src="src/assets/images/Screenshot 2026-05-28 172503.png"
                  alt="Lab"
                ></img>
                <img
                  id="reference-2"
                  src="src/assets/images/Screenshot 2026-05-28 172526.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="card-section">
          <div className="card-container">
            <div className="card-1">
              <h3>NEUROTOXICOLOGY SCREENING</h3>
              <img
                src="src/assets/images/neurotox-background(3).png"
                alt="Neurotoxicology screening laboratory equipment"
              />
            </div>
            <div className="card-2">
              <h3>BIOMARKER ANALYSIS</h3>
              <img
                src="src/assets/images/Biomarkers-Masthead-1380x1035(2).jpg"
                alt="Biomarker analysis data visualization"
              />
            </div>
            <div className="card-3">
              <h3>NEUROLOGICAL DATA INTERPRETATION</h3>
              <img
                src="src/assets/images/Screenshot 2026-05-27 165849.png"
                alt="Neurological data interpretation charts and graphs"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer" />
    </div>
  );
}

export default Home;
