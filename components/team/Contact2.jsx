"use client";

export default function Contact2() {
  return (
    <div className="contact-area-2 text-center space-bottom">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form-wrap">
              <div className="title-area mb-30">
                <h3 className="sec-title">Contact with Me</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="contact-form ajax-contact"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="name"
                        id="name"
                        placeholder="Full name *"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="email"
                        id="email"
                        placeholder="Email address *"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        required
                        name="message"
                        placeholder="Write your comment *"
                        id="contactForm"
                        className="form-control style-border style2"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-btn col-12">
                  <button type="submit" className="btn mt-20">
                    <span className="link-effect">
                      <span className="effect-1">SEND MESSAGE</span>
                      <span className="effect-1">SEND MESSAGE</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
