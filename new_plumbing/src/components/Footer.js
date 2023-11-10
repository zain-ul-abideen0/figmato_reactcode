import { useMemo } from "react";
import styles from "./Footer.module.css";

const Footer = ({ footerPosition, footerTop, footerLeft }) => {
  const footerStyle = useMemo(() => {
    return {
      position: footerPosition,
      top: footerTop,
      left: footerLeft,
    };
  }, [footerPosition, footerTop, footerLeft]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.groupParent}>
        <div className={styles.textWrapper}>
          <div
            className={styles.text}
          >{`Copyright © 2023 Procore Estimators Designed By  `}</div>
        </div>
        <div className={styles.text1}>
          <span>MF</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.bzone}>Bzone</span>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.groupChild} />
          <div className={styles.r}>R</div>
        </div>
      </div>
      <div className={styles.procoreEstimatorsAreContainer}>
        <span className={styles.procoreEstimatorsAreContainer1}>
          <b>PROCORE Estimators</b>
          <span className={styles.span}>
            {" "}
            are an industry leader in providing accurate and reliable
            construction cost estimation services. We specialize in Quantity and
            Material Takeoff, Scheduling, and Planning for your project
            management needs. Our experts use advanced softwares and we pay
            close attention to detail to ensure accurate estimates. We provide
            you with accurate information in a timely manner, enabling you to
            make informed decisions and execute projects efficiently. Rely on
            PROCORE Estimators for precise and prompt cost estimation in
            construction.
          </span>
        </span>
      </div>
      <img
        className={styles.procoreLogoFileCopy1Icon}
        alt=""
        src="/procorelogofilecopy-1@2x.png"
      />
      <b className={styles.navigation}>Navigation</b>
      <b className={styles.contact}>Contact</b>
      <div className={styles.link}>{`Service    `}</div>
      <div className={styles.link1}>About us</div>
      <div className={styles.link2}>Payment</div>
      <div className={styles.link3}>Sample</div>
      <img className={styles.footerChild} alt="" src="/group-2481.svg" />
      <div className={styles.div}>+1 917 300 1079</div>
      <img className={styles.footerItem} alt="" src="/group-2461.svg" />
      <div className={styles.daveprocoreestimatorscom}>
        Dave@procoreestimators.com
      </div>
      <img className={styles.footerInner} alt="" src="/group-247.svg" />
      <div className={styles.bedfordAveBrooklynNy1122Wrapper}>
        <div className={styles.bedfordAveBrooklyn}>
          2505 Bedford Ave, Brooklyn, NY 11226, USA
        </div>
      </div>
    </div>
  );
};

export default Footer;
