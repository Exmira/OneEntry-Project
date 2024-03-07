"use client";

export default function CommentReplay() {
  return (
    <div className="comment-respond">
      <h3 className="comment-reply-title">Leave a Reply</h3>
      <form onSubmit={(e) => e.preventDefault()} className="comment-form">
        <p className="comment-notes">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control style-border"
                name="name"
                id="name"
                placeholder="Full name*"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control style-border"
                name="email"
                id="email"
                placeholder="Email address*"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Write your comment *"
                id="contactForm"
                className="form-control style-border style2"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="form-btn col-12">
          <button type="submit" className="btn mt-25">
            <span className="link-effect">
              <span className="effect-1">POST COMMENT</span>
              <span className="effect-1">POST COMMENT</span>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
