import { useMemo } from "react";
import styles from "./Abovethenavbar.module.css";

const Abovethenavbar = ({ groupDivPosition, groupDivTop, groupDivLeft }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft]);

  return (
    <div className={styles.groupParent} style={groupDiv1Style}>
      <div className={styles.groupWrapper}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupChild} />
        </div>
      </div>
      <div className={styles.turnaroundTime2448HoursParent}>
        <div className={styles.turnaroundTime2448Container}>
          <p className={styles.turnaroundTime2448}>
            TURNAROUND TIME 24-48 HOURS!
          </p>
        </div>
        <div className={styles.blinker}>
          <div className={styles.blinkerChild} />
          <div
            className={styles.affordableEstimate30}
          >{`Affordable Estimate (30% off) `}</div>
        </div>
      </div>
      <img className={styles.componentChild} alt="" src="/group-319.svg" />
      <img className={styles.componentItem} alt="" src="/group-248.svg" />
      <div className={styles.div}>+1 917 300 1079</div>
      <div className={styles.groupContainer}>
        <img className={styles.groupItem} alt="" src="/group-246.svg" />
        <div className={styles.daveprocoreestimatorscom}>
          Dave@procoreestimators.com
        </div>
      </div>
    </div>
  );
};

export default Abovethenavbar;
