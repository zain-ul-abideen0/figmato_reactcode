import { useMemo } from "react";
import styles from "./Mechanical3.module.css";

const Mechanical3 = ({
  imageDimensions,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default3Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div className={styles.property1default} style={property1Default3Style}>
      <div className={styles.property1defaultChild} />
      <img
        className={styles.property1defaultItem}
        alt=""
        src={imageDimensions}
      />
      <div className={styles.energyEfficiencyUpgrades}>
        Energy Efficiency Upgrades
      </div>
    </div>
  );
};

export default Mechanical3;
