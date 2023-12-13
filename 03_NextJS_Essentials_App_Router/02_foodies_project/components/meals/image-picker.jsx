"use client";

import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker(props) {
  const imageInputRef = useRef();
  const [selectedImage, setSelectedImage] = useState(undefined);

  const handlePickImage = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return setSelectedImage(undefined);
    }

    const fileReader = new FileReader();
    fileReader.progress = () => console.log("Hello");
    fileReader.onload = () => setSelectedImage(fileReader.result);
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className={styles.controls}>
        <input
          type="file"
          id={props.name}
          accept="image/png, image/jpeg"
          name={props.name}
          className={styles.input}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />

        <button
          className={styles.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
        <div className={styles.preview}>
          {!selectedImage && <p>No Image Picked Yet</p>}
          {selectedImage && (
            <Image src={selectedImage} fill alt="image selected by user" />
          )}
        </div>
      </div>
    </div>
  );
}
