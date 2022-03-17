import React from "react";

const SubChildComponent = (props) => {
  return (
    <div>
      <h3>This is Sub Child Component</h3>
      <h4>User Name: {props.userDetails.name}</h4>
      <h4>User Age: {props.userDetails.age}</h4>
    </div>
  );
};

export default SubChildComponent;
