import React, { useState, createContext } from "react";
import ChildComponent from "./ChildComponent";

function UserDetailsComponent() {
  let userDetailContext = createContext(null);
  let [userDetails, setUserDetails] = useState({
    name: "John Doe",
    age: 23,
  });

  return (
    <userDetailContext.Provider value={userDetails}>
      <div>
        <h1>This is the Parent Component</h1>
        <hr />
        <ChildComponent userDetails={userDetails}></ChildComponent>
      </div>
    </userDetailContext.Provider>
  );
}

export default UserDetailsComponent;
