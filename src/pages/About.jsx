function About() {
  return (
    <div className="about">
      <div className="about-page">
        <div className="hero">
          <h1>ABOUT</h1>
          <img
            id="hero-img"
            src="src/assets/images/neurotox-background(3).png"
            alt="Lab"
          />
          <p>
            Neurolytica Labs develops analytical tools and biomarker workflows
            that support neurological and toxicological research through
            data-driven interpretation and scientific transparency.
          </p>
        </div>
        <div className="content">
          <div className="our-missions">
            <div className="missions-column">
              <h2>OUR MISSIONS</h2>
              <div className="mission-statement">
                Our mission is to improve how researchers interpret complex
                neurobiological data by developing analytical systems focused on
                precision, transparency, and scientific usability.
              </div>
              <div className="collaborate-wrapper"></div>
              <button id="collaborate">Collaborate with us</button>
            </div>

            <div className="values-column">
              <h3>OUR SCIENTIFIC VALUES</h3>
              <div className="values-cards">
                <div className="integrity">
                  <h3>
                    SCIENTIFIC INTEGRITY -
                    <p>Transparent and reproducible analytical workflows.</p>
                  </h3>
                </div>
                <div className="precision">
                  <h3>
                    DATA PRECISION -{" "}
                    <p>
                      High-confidence interpretation of neurological datasets.
                    </p>
                  </h3>
                </div>
                <div className="innovation">
                  <h3>
                    ETHICAL INNOVATION -{" "}
                    <p>
                      Responsible development of neuroanalytical technologies.
                    </p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default About;
