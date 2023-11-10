import { useMemo } from "react";
import styles from "./Drainage3.module.css";

const Drainage3 = ({
  imageDimensions,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <div className={styles.property1defaultChild} />
      <img
        className={styles.property1defaultItem}
        alt=""
        src={imageDimensions}
      />
      <div className={styles.drainageAndWater}>Drainage and Water Supply</div>
    </div>
  );
};

export default Drainage3;
