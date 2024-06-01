import React, { useContext, useState } from "react";
import Modal from "./UI/Modal";
import Button from "./Button";
import "./AddBookMark.css";
import BookMarksContext from "../Store/BookMarksContext";

function AddBookMark(props) {
  const [url, setUrl] = useState("");
  const ctx = useContext(BookMarksContext);
  const handleURL = (e) => {
    //console.log(e.target.value);
    setUrl(e.target.value);
  };

  const handleAdd = () => {
    ctx.addItem(url);
    setUrl("");
    props.onClose();
  };
  // console.log(ctx);
  return (
    <Modal onClose={props.onClose}>
      <div className="input">
        <label htmlFor="url">URL:</label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={handleURL}
          placeholder="ADD URL HERE"
        ></input>
      </div>
      <div className="button">
        <Button onClick={props.onClose}>CLOSE</Button>
        <Button onClick={handleAdd}>ADD URL</Button>
      </div>
    </Modal>
  );
}

export default AddBookMark;
