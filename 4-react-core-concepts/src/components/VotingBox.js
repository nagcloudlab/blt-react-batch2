import React, { useState } from "react";
import VotingItem from "./VotingItem";
import VotingTable from "./VotingTable";

function VotingBox(props) {
  console.log("VoteBox render");
  let [votingItems, setVotingItems] = useState(["foo", "bar", "baz"]); // ["foo", "bar", "baz"
  let [votingLines, setVotingLines] = useState([
    { item: "foo", likes: 0, dislikes: 0 },
    { item: "bar", likes: 0, dislikes: 0 },
    { item: "baz", likes: 0, dislikes: 0 },
  ]);
  const handleVote = (e) => {
    let { item, vote } = e;
    let newVotingLines = votingLines.map((line) => {
      if (line.item === item) {
        if (vote === "up") {
          return { ...line, likes: line.likes + 1 };
        } else {
          return { ...line, dislikes: line.dislikes + 1 };
        }
      }
      return line;
    });
    setVotingLines(newVotingLines);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Voting Box</h5>
      </div>
      <div className="card-body">
        <div className="d-flex flex-wrap justify-content-around">
          {votingItems.map((item, index) => (
            <VotingItem key={index} item={item} onVote={handleVote} />
          ))}
        </div>
        <hr />
        <VotingTable votingLines={votingLines} />
      </div>
    </div>
  );
}

export default VotingBox;
