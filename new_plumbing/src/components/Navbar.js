import { useMemo } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ naveBarPosition, naveBarTop, naveBarLeft }) => {
  const naveBarStyle = useMemo(() => {
    return {
      position: naveBarPosition,
      top: naveBarTop,
      left: naveBarLeft,
    };
  }, [naveBarPosition, naveBarTop, naveBarLeft]);

  return (
    <div className={styles.naveBar} style={naveBarStyle}>
      <div className={styles.naveBarChild} />
      <img className={styles.logo51} alt="" src="/logo-5-1@2x.png" />
      <div className={styles.home}>
        <b className={styles.home1}>Home</b>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.getEstimate}>Get Estimate</div>
      </div>
      <div className={styles.service}>
        <b className={styles.home1}>Service</b>
      </div>
      <div className={styles.aboutUs}>
        <b className={styles.home1}>About us</b>
      </div>
      <div className={styles.payment}>
        <b className={styles.home1}>Payment</b>
      </div>
      <div className={styles.testimonials}>
        <b className={styles.home1}>Testimonials</b>
      </div>
      <div className={styles.testimonials2}>
        <b className={styles.home1}>Samples</b>
      </div>
      <div className={styles.estimationFee}>
        <b className={styles.home1}>Estimation fee</b>
      </div>
      <div className={styles.contactUs}>
        <b className={styles.home1}>Contact us</b>
      </div>
    </div>
  );
};

export default Navbar;
