import React, { useContext, useState } from "react";
import Button from "../Button";
import "./List.css";
import AddBookMark from "../AddBookMark";
import DisplayEdit from "../DisplayEdit";
import BookMarksContext from "../../Store/BookMarksContext";

function BookMark(props) {
  // console.log(props.val);
  const ctx = useContext(BookMarksContext);
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <div className="BookMark">
      <span>{props.item.item}</span>
      <Button
        onClick={() => {
          setOpenEdit(true);
        }}
      >
        Edit
      </Button>
      <Button
        onClick={() => {
          ctx.deleteItem(props.item.id);
        }}
      >
        Delete
      </Button>
      {openEdit && (
        <DisplayEdit item={props.item} onClose={() => setOpenEdit(false)} />
      )}
    </div>
  );
}

export default BookMark;
