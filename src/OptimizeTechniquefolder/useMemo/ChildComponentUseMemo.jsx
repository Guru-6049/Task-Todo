import React from "react";

const ChildComponentUseMemo = ({ expensiveValue }) => {
  console.log("ChildComponent re-rendered");
  return <p>Expensive Value: {expensiveValue}</p>;
};

export default ChildComponentUseMemo ;
