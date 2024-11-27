import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Name Submitted : Hello ,${name}`);
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
    </form>
  );
}

export default NameForm;
