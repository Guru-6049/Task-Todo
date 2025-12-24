import React from "react";

// React.memo to prevent unnecessary re-render
const ChildButtonUseCallback = React.memo(({ onClick }) => {
  console.log("ChildButton re-rendered");
  return (
    <button
      className="p-2 bg-purple-500 text-white rounded mt-2"
      onClick={onClick}
    >
      Increment Count (Child)
    </button>
  );
});

export default ChildButtonUseCallback;
