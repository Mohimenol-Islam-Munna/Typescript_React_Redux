import React from "react";
import { myFunc, myFuncTwo } from "./pure";
import { Props } from "../types";

const Home: React.FC<Props> = (props) => {
  const arrowFuncHandler = <T,>(name: T) => {
    console.log("arrow function :", name);
  };

  const mainFuncHandler = (e: React.MouseEvent) => {
    console.log("main function e: ", e.target);
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.data}</p>
      <button type="button" onClick={() => arrowFuncHandler("munna")}>
        Arrow Function
      </button>
      <button onClick={(e) => mainFuncHandler(e)}>Main Function</button>
      <button
        onClick={(e) => {
          myFunc({ name: "munna", isPassed: true, id: 160133 }, "name");
        }}
      >
        My Function
      </button>
    </div>
  );
};

export default Home;
