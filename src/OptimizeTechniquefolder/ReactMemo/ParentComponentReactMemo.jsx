import React, { useState } from 'react'
import ChildComponentReactMemo from './ChildComponentReactMemo';

function ParentComponentReactMemo() {
     const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);
    return (
    <div className="p-4 border m-4">
      <h2 className="font-bold text-lg mb-2">React.memo Example</h2>
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

      <p>Other: {other}</p>

      {/* Child only re-renders when count changes */}
      <ChildComponentReactMemo count={count} />
    </div>
  );
}

export default ParentComponentReactMemo