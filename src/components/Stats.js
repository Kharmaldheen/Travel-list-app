import React from "react";

const Stats = ({ travelList }) => {
  if (!travelList.length)
    return (
      <p className="stats">
        <em>Start hiding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = travelList.length;
  const numPacked = travelList.reduce(
    (acc, cur) => (cur.packed ? acc + 1 : acc),
    0
  );
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go 🛫"
          : `💼You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
