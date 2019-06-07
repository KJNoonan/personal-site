import React from "react";
import styles from "./Main.module.scss";
import BackgroundAnimation from "./BackgroundAnimation";

const generateText = () => (
  <div>
    Hello, I'm <span className={styles["name-highlight"]}>Kevin Noonan</span>.
    <br />I build web applications.
  </div>
);

const Main = () => {
  return (
    <>
      <BackgroundAnimation />
      <div className={styles.page}>{generateText()}</div>
    </>
  );
};

export default Main;
