function Contact() {
  return (
    <div className="contact">
      <div className="contact-page">
        <div className="contact-column left-column">
          <img
            id="bg-img"
            src="src/assets/images/Neurolytica-Background-2.png"
            alt="Neurolytica logo on blue background"
          />
        </div>
        <div className="contact-column middle-column">
          <div className="contact-form-wrapper">
            <form>
              <fieldset>
                <legend>Get in Touch</legend>

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend>Your Message</legend>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
              </fieldset>

              <button type="submit" id="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="contact-column right-column">
          <img
            id="bg-img-2"
            src="src/assets/images/Neurolytica-Background-2.png"
            alt="Neurolytica pattern on blue background"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
