import React, { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    const { value, name } = event.target;

    setFullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };
  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <input
              type="text"
              placeholder="Name"
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br />
            <input
              type="text"
              placeholder="Lastname"
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={inputEvent}
              value={fullName.email}
              autoComplete="off"
            />
            <br />
            <input
              type="number"
              placeholder="Contact"
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
              autoComplete="off"
            />
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
