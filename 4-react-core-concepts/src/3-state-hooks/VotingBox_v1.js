import React, { useState } from "react";

// useState with primitive-type

function VotingBox_v1(props) {
  console.log("Voting::render()");
  //let [vote, setVote] = useState(0);
  let [vote, setVote] = useState(() => {
    console.log("computing intial state");
    return 100;
  });
  const voteHandler = (v) => {
    //setVote(vote + v); //
    setVote((prevVote) => prevVote + v);
  };
  return (
    <div className="card">
      <div className="card-header">Voting Box</div>
      <div className="card-body">
        <hr />
        {vote}
        <hr />
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-around">
              <button onClick={(e) => voteHandler(1)}>Up</button>
              <button onClick={(e) => voteHandler(-1)}>Down</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VotingBox_v1;
