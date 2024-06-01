import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalLayout = (props) => {
  return <div className="modal">{props.children}</div>;
};
const portal = document.getElementById("port");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portal)}
      {ReactDOM.createPortal(
        <ModalLayout>{props.children}</ModalLayout>,
        portal
      )}
    </>
  );
};

export default Modal;
