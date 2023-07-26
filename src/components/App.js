import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useEffect, useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [travelList, setTravelList] = useState(function () {
    const travelItems = localStorage.getItem("travelItems");
    return JSON.parse(travelItems);
  });

  console.log(travelList);

  const handleDeleteItem = (id) => {
    setTravelList((items) => items.filter((item) => item.id !== id));
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed) setTravelList([]);
    else setTravelList(travelList);
  };

  const toggleItem = (id) => {
    setTravelList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  useEffect(
    function () {
      localStorage.setItem("travelItems", JSON.stringify(travelList));
    },
    [travelList]
  );

  return (
    <div className="app">
      <Logo />

      <Form travelList={travelList} setTravelList={setTravelList} />

      <PackingList
        Items={travelList}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={toggleItem}
        onClearList={handleClearList}
      />

      <Stats travelList={travelList} />
    </div>
  );
}
