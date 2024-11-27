import { useState, ChangeEvent } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          Name:
          <input
            type="text"
            placeholder="enter your name"
            value={formData.name}
            onChange={handleForm}
          />
        </label>
      </p>

      <p>
        <label>
          Email:
          <input
            type="email"
            placeholder="enter your email"
            value={formData.email}
            onChange={handleForm}
          />
        </label>
      </p>

      <p>
        <label>
          Password:
          <input
            type="password"
            placeholder="enter your password"
            value={formData.password}
            onChange={handleForm}
          />
        </label>
      </p>
    </form>
  );
};

export default Form;
