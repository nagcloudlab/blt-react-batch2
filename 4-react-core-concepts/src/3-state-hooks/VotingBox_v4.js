import React, { useReducer } from "react";

// state management logic
// must be 'pure' function
const voteReducer = function (state, action) {
  console.log("voteReducer::invoked");
  let { type } = action;
  switch (type) {
    case "UP": {
      // state change logic
      return { ...state, up: state.up + 1 };
    }
    case "DOWN": {
      return { ...state, down: state.down + 1 };
    }
    default:
      return state;
  }
};

// UI logic
function VotingBox_v4(props) {
  console.log("VotingBox::render()");

  const [state, dispatch] = useReducer(voteReducer, { up: 0, down: 0 });

  const upVoteHandler = (v) => {
    dispatch({ type: "UP" });
  };
  const downVoteHandler = (v) => {
    dispatch({ type: "DOWN" });
  };

  return (
    <div className="card">
      <div className="card-header">Voting Box</div>
      <div className="card-body">
        <hr />
        Up: {state.up} , Down: {state.down}
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

export default VotingBox_v4;
