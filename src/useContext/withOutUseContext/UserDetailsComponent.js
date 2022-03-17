import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function UserDetailsComponent() {
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    age: 23,
  });

  return (
    <div>
      <h1>This is the Parent Component</h1>
      <hr />
      <ChildComponent userDetails={userDetails}></ChildComponent>
    </div>
  );
}

export default UserDetailsComponent;
