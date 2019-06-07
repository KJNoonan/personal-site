import React from "react";
import styles from "./BackgroundAnimation.module.scss";
import { AutoSizer } from "react-virtualized";
import WrappedCanvas from "./WrappedCanvas";

const BackgroundAnimation = () => {
  return (
    <div className={styles["background-animation"]}>
      <AutoSizer>
        {({ height, width }) => <WrappedCanvas height={height} width={width} />}
      </AutoSizer>
    </div>
  );
};
export default BackgroundAnimation;
