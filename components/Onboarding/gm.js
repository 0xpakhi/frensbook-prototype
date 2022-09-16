import React, { useState } from "react";
import styles from "../../styles/Onboarding.module.css";
import Image from "next/image";

const Gm = () => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h1>gm. what should we call you?</h1>
      <br />
      <Image
        className={styles.profileimg}
        src="/profileimg.png"
        alt="bg"
        width="100"
        height="100"
      />
      <br />
      <br />
      <input
        className={styles.inputfield}
        onChange={onChangeHandler}
        value={inputValue}
        type="text"
        id="name"
        name="name"
        required
      />
    </>
  );
};

export default Gm;
