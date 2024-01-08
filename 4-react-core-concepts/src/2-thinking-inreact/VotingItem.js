import React, { useState } from "react";

function VotingItem(props) {
  console.log("VoteItem render");
  const { item = "Unknown", onVote } = props;

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleUpVote = (e) => {
    console.log("handleUpVote");
    setLikes(likes + 1);
    onVote({ item, vote: "up" });
  };

  const handleDownVote = (e) => {
    console.log("handleDownVote");
    setDislikes(dislikes + 1);
    onVote({ item, vote: "down" });
  };

  return (
    <div className={likes < dislikes ? "card bg-warning" : "card"}>
      <div className="card-body">
        <h5 className="card-title">{item}</h5>
        <hr />
        <h6 className="card-subtitle mb-2 text-muted">Votes: {likes}</h6>
        <hr />
        <div className="d-flex">
          <button
            onClick={handleUpVote}
            className="btn btn-outline-success me-2"
          >
            Upvote
          </button>
          <button onClick={handleDownVote} className="btn btn-outline-danger">
            Downvote
          </button>
        </div>
      </div>
    </div>
  );
}

export default VotingItem;
