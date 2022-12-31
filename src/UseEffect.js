import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [state, setState] = useState({
    name: "",
    selected: true,
  });

  useEffect(() => {
    // logic
    console.log("State change!!");
  }, [state.name, state.selected]);

  useEffect(() => {
    console.log("Effect rendered!!");
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      console.log("Clearing Interval");
      clearInterval(interval);
      console.log("Interval CLeared");
    };
  }, [count]);

  const changeName = () => {
    setState((prev) => ({
      ...prev,
      name: name,
    }));
  };

  const changeState = () => {
    setState((prev) => ({
      ...prev,
      selected: false,
    }));
  };

  return (
    <div>
      <div className="App">
        <input
          autoComplete="off"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button onClick={changeName}>Name</button>
        <button onClick={changeState}>Selected</button>
        <h1>{`{name: ${state.name} ; state: ${state.selected}}`}</h1>
        <h1>{count}</h1>
        <Link to={`/users`}>Go to Users Page</Link>
      </div>
    </div>
  );
};

export default UseEffect;
