import { useMemo } from "react";
import styles from "./Mechanical1.module.css";

const Mechanical1 = ({
  imageDimensions,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  hVACFontWeight,
}) => {
  const property1Default5Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  const hVACStyle = useMemo(() => {
    return {
      fontWeight: hVACFontWeight,
    };
  }, [hVACFontWeight]);

  return (
    <div className={styles.property1default} style={property1Default5Style}>
      <div className={styles.property1defaultChild} />
      <img
        className={styles.property1defaultItem}
        alt=""
        src={imageDimensions}
      />
      <div className={styles.hvac} style={hVACStyle}>
        HVAC
      </div>
    </div>
  );
};

export default Mechanical1;
