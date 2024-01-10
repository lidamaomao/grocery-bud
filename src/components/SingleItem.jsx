import React from "react";

export const SingleItem = ({ item, handleCheckboxChange, removeItem }) => {
  const { id, value, state } = item;

  return (
    <div className="single-item">
      <input
        type="checkbox"
        name="singleItem"
        checked={state}
        onChange={() => handleCheckboxChange(id)}
        id={id}
      />
      <label htmlFor={id}>
        <p>{value}</p>
      </label>
      <button className="remove-btn" onClick={() => removeItem(id)}>
        Delete
      </button>
    </div>
  );
};
