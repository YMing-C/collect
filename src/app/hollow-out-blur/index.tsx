import React from "react";
import styles from "./index.module.less";

const HollowOutBlur: React.FC = () => {
  return (
    <div>
      <div className={styles.navWrap}>
        <div className={styles.nav}>
          <div className={styles.logo}>LOGO</div>
        </div>
      </div>
      <div className={styles.main}>111</div>
    </div>
  );
};

export default HollowOutBlur;
