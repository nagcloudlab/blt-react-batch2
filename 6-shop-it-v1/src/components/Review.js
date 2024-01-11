import React from "react";

function Review({ value: review }) {
  const renderStars = (count) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      let starClass = "fa fa-star";
      if (i > count) starClass += "-o";
      stars.push(<i key={i} className={starClass}></i>);
    }
    return stars;
  };
  return (
    <div>
      <div className="alert alert-danger">
        <div>Author: {review.author}</div>
        <div>Stars: {renderStars(review.stars)}</div>
        <div>Body: {review.body}</div>
      </div>
    </div>
  );
}

export default Review;
