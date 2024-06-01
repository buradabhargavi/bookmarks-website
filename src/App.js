import { useState } from "react";
import "./App.css";
import AddBookMark from "./components/AddBookMark";
import HomeComponent from "./components/HomeComponent";
import BookMarksProvider from "./Store/BookMarksProvider";
import BookMarksList from "./components/Display/BookMarksList";

function App() {
  const [onAdd, setOnAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const openAddModal = () => {
    setOnAdd(true);
  };
  return (
    <BookMarksProvider>
      <div className="App">
        <HomeComponent onTouch={openAddModal} />
        {onAdd && <AddBookMark onClose={() => setOnAdd(false)} />}
        <BookMarksList />
      </div>
    </BookMarksProvider>
  );
}

export default App;
