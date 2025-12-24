import React, { useState, useMemo } from "react";
import ChildComponentUseMemo from "./ChildComponentUseMemo";

export default function ParentComponentUseMemo() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // Expensive calculation memoized
  const expensiveValue = useMemo(() => {
    console.log("Calculating expensive value...");
    let sum = 0;
    for (let i = 0; i < 1e7; i++) sum += i;
    return sum + count;
  }, [count]);

  return (
    <div className="p-4 border m-4">
      <h2 className="font-bold text-lg mb-2">useMemo Example</h2>
      <button
        className="p-2 bg-blue-500 text-white rounded mr-2"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
      <button
        className="p-2 bg-green-500 text-white rounded"
        onClick={() => setOther(other + 1)}
      >
        Increment Other
      </button>

      <ChildComponentUseMemo expensiveValue={expensiveValue} />
      <p>Other: {other}</p>
    </div>
  );
}
