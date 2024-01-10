import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export const Form = ({ items, setItems }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      toast.error("你没有输入内容哦~🙂");
      return;
    }
    const id = nanoid();
    setItems([...items, { id, value, state: false }]);
    setValue("");
    toast.success("🎉添加成功~");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Add item
        </button>
      </div>
    </form>
  );
};
