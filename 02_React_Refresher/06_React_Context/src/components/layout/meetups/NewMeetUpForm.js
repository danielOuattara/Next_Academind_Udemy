import { useRef } from "react";
import Card from "../../UI/Card";
import styles from "./NewMeetUpForm.module.css";

function NewMeetUpForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const meetUpData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };

    // console.log(meetUpData);
    props.addMeetupHandler(meetUpData);
  };

  return (
    <Card>
      <form action="" className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title"> Title</label>
          <input
            type="text"
            required
            id="title"
            name="title"
            ref={titleInputRef}
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="image"> Image url</label>
          <input
            type="url"
            required
            id="image"
            name="image"
            ref={imageInputRef}
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="address"> Address</label>
          <input
            type="text"
            required
            id="address"
            name="address"
            ref={addressInputRef}
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="description"> Description</label>
          <textarea
            name="description"
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={styles.actions}>
          <button type="submit"> Add Meetup </button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetUpForm;
