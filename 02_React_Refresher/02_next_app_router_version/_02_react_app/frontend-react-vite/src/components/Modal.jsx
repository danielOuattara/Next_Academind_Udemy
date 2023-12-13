import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

export default function Modal(props) {
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/");
  };
  return (
    <>
      <div className={styles.backdrop} onClick={closeModal} />
      <dialog open className={styles.modal}>
        {props.children}
      </dialog>
    </>
  );
}
