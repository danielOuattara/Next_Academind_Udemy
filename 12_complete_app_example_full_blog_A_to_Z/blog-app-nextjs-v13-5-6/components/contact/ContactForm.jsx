import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <section className={styles.contact}>
      <h1>How can I help you ?</h1>
      <form className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" required />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your message</label>
          <textarea name="message" id="message" rows="6"></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
