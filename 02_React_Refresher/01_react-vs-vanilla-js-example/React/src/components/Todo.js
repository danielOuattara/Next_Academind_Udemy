import { useState } from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={() => setShowModal(true)}>
          Delete
        </button>
      </div>
      {showModal && <Backdrop onClick={() => setShowModal(false)} />}
      {showModal && <Modal text="Are you sure?" onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Todo;
