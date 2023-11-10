import Trades1 from "./Trades1";
import styles from "./Tradeslook.module.css";

const Tradeslook = () => {
  return (
    <div className={styles.takeALookAtOurTradesParent}>
      <div className={styles.takeALook}>Take a look at our Trades</div>
      <Trades1
        imageDimensions="/rectangle-186@2x.png"
        requirementDescription="General Requirement"
        property1DefaultPosition="absolute"
        property1DefaultTop="90px"
        property1DefaultLeft="0px"
        generalRequirementHeight="unset"
        generalRequirementWidth="unset"
        generalRequirementTop="80.97%"
        generalRequirementFontWeight="bold"
        generalRequirementDisplay="inline-block"
        generalRequirementAlignItems="unset"
        generalRequirementLeft="15.36%"
        generalRequirementTextAlign="left"
      />
      <Trades1
        imageDimensions="/rectangle-1861@2x.png"
        requirementDescription="Site Works"
        property1DefaultPosition="absolute"
        property1DefaultTop="90px"
        property1DefaultLeft="300px"
        generalRequirementHeight="unset"
        generalRequirementWidth="unset"
        generalRequirementTop="80.97%"
        generalRequirementFontWeight="bold"
        generalRequirementDisplay="inline-block"
        generalRequirementAlignItems="unset"
        generalRequirementLeft="32.14%"
        generalRequirementTextAlign="center"
      />
      <Trades1
        imageDimensions="/rectangle-1862@2x.png"
        requirementDescription="Concrete"
        property1DefaultPosition="absolute"
        property1DefaultTop="90px"
        property1DefaultLeft="600px"
        generalRequirementHeight="unset"
        generalRequirementWidth="unset"
        generalRequirementTop="80.97%"
        generalRequirementFontWeight="bold"
        generalRequirementDisplay="inline-block"
        generalRequirementAlignItems="unset"
        generalRequirementLeft="35%"
        generalRequirementTextAlign="center"
      />
      <Trades1
        imageDimensions="/rectangle-1863@2x.png"
        requirementDescription="Masonry"
        property1DefaultPosition="absolute"
        property1DefaultTop="90px"
        property1DefaultLeft="900px"
        generalRequirementHeight="unset"
        generalRequirementWidth="unset"
        generalRequirementTop="80.97%"
        generalRequirementFontWeight="bold"
        generalRequirementDisplay="inline-block"
        generalRequirementAlignItems="unset"
        generalRequirementLeft="35.36%"
        generalRequirementTextAlign="center"
      />
    </div>
  );
};

export default Tradeslook;
