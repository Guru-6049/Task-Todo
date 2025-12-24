import React, { useState, useCallback } from "react";
import ChildButtonUseCallback from "./ChildButtonUseCallback";

export default function ParentComponentUseCallback() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // useCallback ensures function reference doesn't change
  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="p-4 border m-4">
      <h2 className="font-bold text-lg mb-2">useCallback Example</h2>
      <p>Count: {count}</p>
      <p>Other: {other}</p>
      <button
        className="p-2 bg-green-500 text-white rounded mr-2"
        onClick={() => setOther(other + 1)}
      >
        Increment Other
      </button>

      {/* ChildButton won't re-render if function reference doesn't change */}
      <ChildButtonUseCallback onClick={incrementCount} />
    </div>
  );
}
