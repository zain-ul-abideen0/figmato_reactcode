import { useMemo } from "react";
import styles from "./Trades1.module.css";

const Trades1 = ({
  imageDimensions,
  requirementDescription,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  generalRequirementHeight,
  generalRequirementWidth,
  generalRequirementTop,
  generalRequirementFontWeight,
  generalRequirementDisplay,
  generalRequirementAlignItems,
  generalRequirementLeft,
  generalRequirementTextAlign,
}) => {
  const property1Default7Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  const generalRequirementStyle = useMemo(() => {
    return {
      height: generalRequirementHeight,
      width: generalRequirementWidth,
      top: generalRequirementTop,
      fontWeight: generalRequirementFontWeight,
      display: generalRequirementDisplay,
      alignItems: generalRequirementAlignItems,
      left: generalRequirementLeft,
      textAlign: generalRequirementTextAlign,
    };
  }, [
    generalRequirementHeight,
    generalRequirementWidth,
    generalRequirementTop,
    generalRequirementFontWeight,
    generalRequirementDisplay,
    generalRequirementAlignItems,
    generalRequirementLeft,
    generalRequirementTextAlign,
  ]);

  return (
    <div className={styles.property1default} style={property1Default7Style}>
      <img
        className={styles.property1defaultChild}
        alt=""
        src={imageDimensions}
      />
      <div className={styles.property1defaultItem} />
      <div
        className={styles.generalRequirement}
        style={generalRequirementStyle}
      >
        {requirementDescription}
      </div>
    </div>
  );
};

export default Trades1;
