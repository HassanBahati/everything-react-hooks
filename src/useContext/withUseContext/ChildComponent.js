import React from "react";
import SubChildComponent from "./SubChildComponent";

const ChildComponent = (props) => {
  return (
    <div>
      <h2>This is Child Component</h2>
      <hr />
      <SubChildComponent userDetails={props.userDetails}></SubChildComponent>
    </div>
  );
};

export default ChildComponent;
