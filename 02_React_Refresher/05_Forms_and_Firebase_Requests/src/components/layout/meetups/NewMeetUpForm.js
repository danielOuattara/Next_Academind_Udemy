import { useRef } from "react";
import Card from "../../UI/Card";
import styles from "./NewMeetUpForm.module.css";

function NewMeetUpForm(props) {
  const titleInpuRef = useRef();
  const imageInpuRef = useRef();
  const addressInpuRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInpuRef.current.value;
    const enteredImage = imageInpuRef.current.value;
    const enteredAddress = addressInpuRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetUpData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
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
            ref={titleInpuRef}
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="image"> Image url</label>
          <input
            type="url"
            required
            id="image"
            name="image"
            ref={imageInpuRef}
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="address"> Address</label>
          <input
            type="text"
            required
            id="address"
            name="address"
            ref={addressInpuRef}
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
