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
              <button id="view-button">
                View Technology
                <div className="view-button-mask">
                  <div className="view-button-glow"></div>
                </div>
              </button>
            </NavLink>

            <NavLink to="/publications">
              <button id="explore-button" onClick={handleClick}>
                Explore Publications
                <div className="explore-button-mask">
                  <div className="explore-button-glow"></div>
                </div>
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
                  src="src\assets\images\Screenshot 2026-05-28 172503.png"
                ></img>
                <img
                  id="reference-2"
                  src="src\assets\images\Screenshot 2026-05-28 172526.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Home;
