import React from "react";

function VotingItem(props) {
  console.log("VoteItem render");
  let { item = "Unknown", onVote } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item}</h5>
        <hr />
        <div className="d-flex">
          <button
            onClick={(e) => onVote({ item, vote: "up" })}
            className="btn btn-outline-success me-2"
          >
            Upvote
          </button>
          <button
            onClick={(e) => onVote({ item, vote: "down" })}
            className="btn btn-outline-danger"
          >
            Downvote
          </button>
        </div>
      </div>
    </div>
  );
}

export default VotingItem;
