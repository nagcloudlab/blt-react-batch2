import React, { useState } from "react";

// useState with object-type

function VotingBox_v3(props) {
  console.log("Voting::render()");
  let [upVote, setUpVote] = useState(0);
  let [downVote, setDownVote] = useState(0);
  const upVoteHandler = (v) => {
    setUpVote((prevState) => prevState + v);
  };
  const downVoteHandler = (v) => {
    setDownVote((prevState) => prevState + v);
  };
  return (
    <div className="card">
      <div className="card-header">Voting Box</div>
      <div className="card-body">
        <hr />
        Up: {upVote} , Down: {downVote}
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

export default VotingBox_v3;
