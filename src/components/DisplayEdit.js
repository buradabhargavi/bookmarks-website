import React, { useContext, useState } from "react";
import Modal from "./UI/Modal";
import Button from "./Button";
import BookMarksContext from "../Store/BookMarksContext";

function DisplayEdit(props) {
  console.log(props.item.item);
  const ctx = useContext(BookMarksContext);
  const [URL, setURL] = useState(props.item.item);
  const handleEditSub = () => {
    ctx.update(URL, props.item.id);
    props.onClose();
  };
  return (
    <Modal onClose={props.onClose}>
      <div className="input">
        <label htmlFor="url">URL:</label>
        <input
          type="url"
          id="url"
          placeholder="ADD URL HERE"
          value={URL}
          onChange={(e) => setURL(e.target.value)}
        ></input>
      </div>
      <div className="button">
        <Button onClick={props.onClose}>CLOSE</Button>
        <Button onClick={handleEditSub}>UPDATE</Button>
      </div>
    </Modal>
  );
}

export default DisplayEdit;
