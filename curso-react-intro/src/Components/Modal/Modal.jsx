import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

export default function Modal({ children }) {
  return createPortal(
    <div className="modal__container">{children}</div>,
    document.getElementById("modal")
  );
}
