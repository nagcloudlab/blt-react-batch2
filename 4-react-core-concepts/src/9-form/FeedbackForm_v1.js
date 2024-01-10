import React, { useRef } from "react";

function FeedbackForm(props) {
  const ratingRef = useRef();
  const messageRef = useRef();
  const nameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const rating = ratingRef.current.value;
    const message = messageRef.current.value;
    const name = nameRef.current.value;
    const feedback = {
      rating: rating,
      message: message,
      name: name,
    };
    console.log(feedback);
    ratingRef.current.value = "";
    messageRef.current.value = "";
    nameRef.current.value = "";
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
                <select className="form-control" ref={ratingRef}>
                  {[1, 2, 3, 4, 5].map((n) => {
                    return <option key={n}>{n}</option>;
                  })}
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" ref={messageRef}></textarea>
              </div>
              <div className="form-group">
                <label>Name</label>
                <input className="form-control" ref={nameRef} />
              </div>
              <hr />
              <button>Submit</button>
              <hr />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
