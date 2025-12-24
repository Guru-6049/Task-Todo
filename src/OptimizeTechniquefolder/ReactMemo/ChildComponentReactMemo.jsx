import React from "react";

// React.memo prevents re-render if props don't change
const ChildComponentReactMemo = React.memo(({ count }) => {
  console.log("ChildComponent re-rendered");
  return <p>Child Count: {count}</p>;
});

export default ChildComponentReactMemo ;
