import React, { useRef, useState } from "react";

function ReviewForm({ onNewReview }) {
  const [isOpened, setIsOpened] = useState(false);
  const [review, setReview] = useState({
    stars: "5",
    body: "",
    author: "Nag",
  });
  const { stars, body, author } = review;
  const handleChange = (e) => {
    const { id, value } = e.target;
    setReview({ ...review, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onNewReview(review);
    setReview({
      stars: "5",
      body: "",
      author: "Nag",
    });
    setIsOpened(false);
  };
  const toggleForm = () => {
    setIsOpened(!isOpened);
  };
  if (!isOpened) {
    return (
      <div className="row mt-2 mb-2">
        <div className="col-8">
          <button onClick={toggleForm} className="btn btn-primary btn-sm">
            Add Review
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-8">
          <div className="card">
            <div className="card-header">Review Form</div>
            <div className="card-body">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                  <label>Stars</label>
                  <select
                    id="stars"
                    className="form-control"
                    value={stars}
                    onChange={handleChange}
                  >
                    {[1, 2, 3, 4, 5].map((n) => {
                      return <option key={n}>{n}</option>;
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label>Body</label>
                  <textarea
                    id="body"
                    className="form-control"
                    value={body}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Author</label>
                  <input
                    id="author"
                    value={author}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <hr />
                <button>Submit</button>
                <button type="button" onClick={toggleForm}>
                  Cancel
                </button>
                <hr />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
