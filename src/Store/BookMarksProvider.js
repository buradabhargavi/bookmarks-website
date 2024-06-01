import React, { useState } from "react";
import BookMarksContext from "./BookMarksContext";

function BookMarksProvider(props) {
  const [bookMarks, SetBookMarks] = useState([]);
  const addURL = (item) => {
    const newItem = {
      item: item,
      id: Date.now(),
    };
    console.log("Item Successfully added");
    SetBookMarks((prev) => {
      return [...prev, newItem];
    });
  };
  // console.log(bookMarks);

  const deleteItem = (id) => {
    console.log(id);
    SetBookMarks(
      bookMarks.filter((bookMark) => {
        return bookMark.id !== id;
      })
    );
  };

  const updateItem = (item, id) => {
    console.log(item, id);
    SetBookMarks(
      bookMarks.map((bookmark) => {
        //  console.log("this is bookmark id", bookmark.id, item.id);
        return bookmark.id === id ? { ...bookmark, item } : bookmark;
      })
    );
  };

  const val = {
    addItem: addURL,
    bookMarks: bookMarks,
    deleteItem: deleteItem,
    update: updateItem,
  };
  return (
    <BookMarksContext.Provider value={val}>
      {props.children}
    </BookMarksContext.Provider>
  );
}

export default BookMarksProvider;
