import { useState } from "react";
import { Form } from "./components/Form";
import { Items } from "./components/Items";
import { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [items, setItems] = useState([]);

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    toast.success("🙂删除成功~");
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <main className="section-center">
      <Form items={items} setItems={setItems} />
      <Items items={items} setItems={setItems} removeItem={removeItem} />
      <ToastContainer position="top-center" autoClose={300} />
    </main>
  );
};

export default App;
