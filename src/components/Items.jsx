import React from "react";
import { SingleItem } from "./SingleItem";

export const Items = ({ items, setItems, removeItem }) => {
  const handleCheckboxChange = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, state: !item.state };
        }
        return item;
      });
    });
  };
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            handleCheckboxChange={handleCheckboxChange}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
};
