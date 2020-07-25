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
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone: preValue.phone,
        };
      } else if (name === "phone") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: value,
        };
      }
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
              name="fName"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br />
            <input
              type="text"
              placeholder="Lastname"
              name="lName"
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
