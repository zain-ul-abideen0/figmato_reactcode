import { useMemo } from "react";
import styles from "./Plumbing1.module.css";

const Plumbing1 = ({
  imageDimensions,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default2Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div className={styles.property1default} style={property1Default2Style}>
      <div className={styles.property1defaultChild} />
      <img
        className={styles.property1defaultItem}
        alt=""
        src={imageDimensions}
      />
      <div className={styles.pipingSystems}>Piping Systems</div>
    </div>
  );
};

export default Plumbing1;
