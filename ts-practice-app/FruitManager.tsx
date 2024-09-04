import { useState } from "react";
import datas from "./data.json";

function FruitManager() {
  const [nData, setNData] = useState(datas);

  const handleRemove = (itemId: number) => {
    setNData(nData.filter((item) => item.id != itemId));
  };

  const handleUpdate = (itemId: number) => {
    setNData(
      nData.map((item) => {
        if (item.id === itemId) {
          return { ...item, name: "New Name" };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div>
      <ul>
        {nData.map((items) => (
          <li key={items.id}>
            {items.name}
            <br />
            <button onClick={() => handleUpdate(items.id)}>Update</button>
            <button onClick={() => handleRemove(items.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={() => setNData([])}>Clear All</button>
    </div>
  );
}

export default FruitManager;
