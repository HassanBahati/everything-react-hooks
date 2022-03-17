import React, { useState } from "react";

const WithOutUseContext = () => {
  const [userDetails, setUserDetails] = useState({
    name: "John Deo",
    age: "20",
  });
  return (
    <div>
      <h1>This is the parent component</h1>
    </div>
  );
};

export default WithOutUseContext;
