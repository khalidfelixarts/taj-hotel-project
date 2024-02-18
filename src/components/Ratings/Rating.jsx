import React from "react";
import module from "./rating.module.scss";

const Rating = ({ rating }) => {
  return (
    <div className={module.rating}>
      {Array.from({ length: rating }, (_, i) => i + 1).map((r, index) => (
        <label key={index} className={module.gold} title="text"></label>
      ))}
      {Array.from({ length: 5 - rating }, (_, i) => i + 1).map((r, index) => (
        <label key={index} className={module.dull} title="text"></label>
      ))}

      {/* <label for="star4" title="text"></label> */}
      {/* <label for="star3" title="text"></label> */}
      {/* <label for="star2" title="text"></label> */}
      {/* <label for="star1" title="text"></label> */}
    </div>
  );
};

export default Rating;
