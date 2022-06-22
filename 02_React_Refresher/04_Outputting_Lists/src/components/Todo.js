import { useState } from "react";
import BackDrop from "./BackDrop";
import Modal from "./Modal";

export default function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={() => setShowModal(true)}>
          Delete
        </button>
      </div>
      {showModal && <BackDrop onClose={() => setShowModal(false)} />}
      {showModal && (
        <Modal text="Are you sure?" onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
