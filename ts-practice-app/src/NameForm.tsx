import { useState } from "react";

const NameForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name Submitted : Hello, ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name :
        <input
          placeholder="enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NameForm;
