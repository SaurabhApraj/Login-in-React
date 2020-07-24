import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [fullName, setfullName] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNamenew, setLastNameNew] = useState("");

  const inputEvent = (event) => {
    setName(event.target.value);
  };
  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  };

  const onSubmits = (event) => {
    event.preventDefault();
    setfullName(name);
    setLastNameNew(lastName);
  };
  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName}
              {lastNamenew}
            </h1>
            <input
              type="text"
              placeholder="Name"
              onChange={inputEvent}
              value={name}
            />
            <br />
            <input
              type="text"
              placeholder="Lastname"
              onChange={inputEventTwo}
              value={lastName}
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
