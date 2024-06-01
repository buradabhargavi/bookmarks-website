import React from "react";
import Button from "./Button";

function HomeComponent(props) {
  return (
    <div>
      <h1>Book Marks</h1>
      <Button onClick={props.onTouch}>Add Book Mark</Button>
    </div>
  );
}

export default HomeComponent;
