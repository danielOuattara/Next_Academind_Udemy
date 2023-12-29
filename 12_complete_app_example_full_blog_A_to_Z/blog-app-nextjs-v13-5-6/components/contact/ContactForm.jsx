import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const sendMessageHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    fetch("/api/contact/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
  };

  return (
    <section className={styles.contact}>
      <h1>How can I help you ?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
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

//----------------------------------------------------------------------

// import styles from "./ContactForm.module.css";

// export default function ContactForm() {
//   const sendMessageHandler = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     fetch("/api/contact/", {
//       method: "POST",
//       headers: {
//         "content-type": "multipart/form-data",
//       },
//       body: formData,
//     });
//   };

//   return (
//     <section className={styles.contact}>
//       <h1>How can I help you ?</h1>
//       <form className={styles.form} onSubmit={sendMessageHandler}>
//         <div className={styles.controls}>
//           <div className={styles.control}>
//             <label htmlFor="email">Your email</label>
//             <input type="email" id="email" name="email" required />
//           </div>
//           <div className={styles.control}>
//             <label htmlFor="name">Your name</label>
//             <input type="text" id="name" name="name" required />
//           </div>
//         </div>
//         <div className={styles.control}>
//           <label htmlFor="message">Your message</label>
//           <textarea name="message" id="message" rows="6"></textarea>
//         </div>
//         <div className={styles.actions}>
//           <button>Send Message</button>
//         </div>
//       </form>
//     </section>
//   );
// }
