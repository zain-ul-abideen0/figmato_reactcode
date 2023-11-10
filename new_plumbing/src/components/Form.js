import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="/ellipse-6@2x.png" />
        <img className={styles.groupItem} alt="" src="/ellipse-5@2x.png" />
        <div className={styles.rectangleParent}>
          <div className={styles.groupInner} />
          <div className={styles.uploadYourPlans}>{`Upload your Plans  `}</div>
        </div>
      </div>
      <div className={styles.forAQuickContainer}>
        <span className={styles.forAQuickContainer1}>
          <span className={styles.forAQuick}>
            For a quick quote based on your project scope, call us at +1 917 300
            1079
          </span>
          <b>{` `}</b>
          <span className={styles.forAQuick}>{`or email us at `}</span>
          <b>Dave@procoreestimators.com</b>
          <span className={styles.forAQuick}>{` `}</span>
        </span>
      </div>
    </div>
  );
};

export default Form;
