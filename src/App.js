import React, { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      if (name === "fName") {
        return { fname: value, lname: preValue.lname };
      } else if (name === "lName") {
        return { fname: preValue.fname, lname: value };
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
            <input
              type="text"
              placeholder="Name"
              name="fName"
              onChange={inputEvent}
              // value={fullName.fname}
            />
            <br />
            <input
              type="text"
              placeholder="Lastname"
              name="lName"
              onChange={inputEvent}
              // value={fullName.lname}
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
