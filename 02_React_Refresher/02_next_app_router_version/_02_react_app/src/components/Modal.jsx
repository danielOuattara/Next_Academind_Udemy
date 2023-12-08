import styles from "./Modal.module.css";

export default function Modal(props) {
  return (
    <>
      <div className={styles.backdrop} onClick={props.toggleModalHandler} />
      <dialog open className={styles.modal}>
        {props.children}
      </dialog>
    </>
  );
}
