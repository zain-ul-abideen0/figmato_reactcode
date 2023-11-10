import { useMemo } from "react";
import styles from "./AboveNavbar.module.css";

const AboveNavbar = ({
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultRight,
  property1DefaultBottom,
  property1DefaultLeft,
}) => {
  const property1Default6Style = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      right: property1DefaultRight,
      bottom: property1DefaultBottom,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultRight,
    property1DefaultBottom,
    property1DefaultLeft,
  ]);

  return (
    <div className={styles.property1default} style={property1Default6Style}>
      <div className={styles.property1defaultChild} />
      <div
        className={styles.affordableEstimate30}
      >{`Affordable Estimate (30% off) `}</div>
    </div>
  );
};

export default AboveNavbar;
