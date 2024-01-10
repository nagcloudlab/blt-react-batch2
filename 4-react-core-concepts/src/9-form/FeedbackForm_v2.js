import React, { useRef, useState } from "react";

function FeedbackForm(props) {
  const [feedback, setFeedback] = useState({
    rating: "5",
    message: "",
    name: "Nag",
  });
  const { rating, message, name } = feedback;
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFeedback({ ...feedback, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedback);
  };
  return (
    <div className="row">
      <div className="col-6">
        <div className="card">
          <div className="card-header">Feedback Form</div>
          <div className="card-body">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <label>Rating</label>
                <select
                  id="rating"
                  className="form-control"
                  value={rating}
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4, 5].map((n) => {
                    return <option key={n}>{n}</option>;
                  })}
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  value={message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label>Name</label>
                <input
                  id="name"
                  value={name}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <hr />
              <button disabled={rating < 3}>Submit</button>
              <hr />
              {rating < 3 && (
                <div className="alert alert-danger">
                  Rating should be greater than 3
                </div>
              )}
              <hr />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
