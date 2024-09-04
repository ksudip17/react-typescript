import { ChangeEvent, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          Name :
          <input
            name="name"
            placeholder="enter your name"
            type="text"
            value={formData.name}
            onChange={handleForm}
          />
        </label>
      </p>

      <p>
        <label>
          Email :
          <input
            name="email"
            placeholder="enter your email"
            type="email"
            value={formData.email}
            onChange={handleForm}
          />
        </label>
      </p>

      <p>
        <label>
          Password :
          <input
            name="password"
            placeholder="enter your password"
            type="password"
            value={formData.password}
            onChange={handleForm}
          />
        </label>
      </p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
