import React from "react";

function VotingTable(props) {
  console.log("VoteTable render");
  let { votingLines = [] } = props;
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Voting Table</h5>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Item</th>
              <th>Likes</th>
              <th>Disikes</th>
            </tr>
          </thead>
          <tbody>
            {votingLines.map((line, index) => (
              <tr key={index}>
                <td>{line.item}</td>
                <td>{line.likes}</td>
                <td>{line.dislikes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VotingTable;
