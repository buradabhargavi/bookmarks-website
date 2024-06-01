import React, { useContext } from "react";
import BookMarksContext from "../../Store/BookMarksContext";
import BookMark from "./BookMark";
import "./List.css";

function BookMarksList() {
  const ctx = useContext(BookMarksContext);

  return ctx.bookMarks.length > 0 ? (
    <ul className="list">
      {ctx.bookMarks.map((val) => {
        return <BookMark item={val} key={val.id}></BookMark>;
      })}
    </ul>
  ) : (
    ""
  );
}

export default BookMarksList;
