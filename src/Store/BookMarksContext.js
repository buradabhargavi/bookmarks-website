import React from "react";
const BookMarksContext = React.createContext({
  addURL: (url) => {},
  deleteItem: (id) => {},
  update: (id, item) => {},
});

export default BookMarksContext;
