import useInput from "./hooks/useInput";

function UserFrom() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name :- </label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Last Name :-</label>
          <input type="text" {...bindLastName} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserFrom;
