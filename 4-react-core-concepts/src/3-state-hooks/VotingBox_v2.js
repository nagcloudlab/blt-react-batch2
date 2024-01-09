import React, { useState } from "react";

// useState with object-type

function VotingBox_v1(props) {
  console.log("Voting::render()");
  let [vote, setVote] = useState({ up: 0, down: 0 });
  const upVoteHandler = (v) => {
    setVote({ ...vote, up: vote.up + v });
  };
  const downVoteHandler = (v) => {
    setVote({ ...vote, down: vote.down + v });
  };
  return (
    <div className="card">
      <div className="card-header">Voting Box</div>
      <div className="card-body">
        <hr />
        Up: {vote.up} , Down: {vote.down}
        <hr />
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-around">
              <button onClick={(e) => upVoteHandler(1)}>Up</button>
              <button onClick={(e) => downVoteHandler(-1)}>Down</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VotingBox_v1;
