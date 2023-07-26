import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ Items, onDeleteItem, onUpdateItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = Items;

  if (sortBy === "description")
    sortedItems = Items.slice().sort((a, b) =>
      a.description.localeCompare(b.description)
    );

  if (sortBy === "packed")
    sortedItems = Items.slice().sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );

  const handleChange = (e) => {
    setSortBy(e.target.value);
    console.log(sortBy);
  };
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select onChange={handleChange} value={sortBy}>
          <option value="input">Sort by Input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>

        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
