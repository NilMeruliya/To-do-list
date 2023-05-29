import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
    console.log(state, action);

    if(action.type === "Increment")
  return state + 1;
  if(action.type === "Decrement")
   return state - 1;      
};

const IncDec = () => {
//   const [num, numInc] = useState(0); //useState hook

  // useReducer(1, 2): 1 = reducer function- is a pure function; 2 = initial state
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1 style={{ marginTop: "200px" }}>{state}</h1>
      <br />
      <div className="btn">

      {/* using useState  */}
        {/* <button className="Inc" onClick={() => numInc(num + 1)}> Increment </button>

        <button className="Dec"
          onClick={() => {
            if (num > 0) {
              numInc(num - 1);
            } else {
              alert("Reached the limit!!");}}}>Decrement
        </button> */}

        {/* using useReducer */}
        <button className="Inc" onClick={() => dispatch({type : "Increment"})}> Increment </button>
        <button className="Dec" onClick={() => dispatch({type : "Decrement"})}> Decrement </button>

        {/* dispatch triggers the action method*/}
        {/* unlike the useState, we do not have to define states multiple time. with the use of dispatch we can simply add the type conveniently. */}


      </div>
    </>
  );
};

export default IncDec;
