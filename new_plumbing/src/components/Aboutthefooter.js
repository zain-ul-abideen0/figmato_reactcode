import { useMemo } from "react";
import styles from "./Aboutthefooter.module.css";

const Aboutthefooter = ({
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
  rectangleIconRight,
  rectangleIconLeft,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft]);

  const rectangleIconStyle = useMemo(() => {
    return {
      right: rectangleIconRight,
      left: rectangleIconLeft,
    };
  }, [rectangleIconRight, rectangleIconLeft]);

  return (
    <div
      className={styles.uploadYourPlanAndGetQuoteParent}
      style={groupDivStyle}
    >
      <div
        className={styles.uploadYourPlan}
      >{`Upload your plan and get quote with 30% `}</div>
      <div className={styles.rectangleParent}>
        <img
          className={styles.groupChild}
          alt=""
          src="/rectangle-163@2x.png"
          style={rectangleIconStyle}
        />
        <div className={styles.groupParent}>
          <div className={styles.ellipseParent}>
            <img className={styles.groupItem} alt="" src="/ellipse-6@2x.png" />
            <img className={styles.groupInner} alt="" src="/ellipse-5@2x.png" />
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div
                className={styles.uploadYourPlans}
              >{`Upload your Plans  `}</div>
            </div>
          </div>
          <div className={styles.forAQuickContainer}>
            <span className={styles.forAQuickContainer1}>
              <span className={styles.forAQuick}>
                For a quick quote based on your project scope, call us at +1 917
                300 1079
              </span>
              <b>{` `}</b>
              <span className={styles.forAQuick}>{`or email us at `}</span>
              <b>Dave@procoreestimators.com</b>
              <span className={styles.forAQuick}>{` `}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutthefooter;
