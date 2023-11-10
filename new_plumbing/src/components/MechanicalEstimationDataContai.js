import Mechanical1 from "./Mechanical1";
import Mechanical2 from "./Mechanical2";
import Mechanical3 from "./Mechanical3";
import styles from "./MechanicalEstimationDataContai.module.css";

const MechanicalEstimationDataContai = () => {
  return (
    <div className={styles.mechanicalEstimationDataParent}>
      <div className={styles.mechanicalEstimationData}>
        Mechanical Estimation Data
      </div>
      <div className={styles.instanceParent}>
        <Mechanical1
          imageDimensions="/rectangle-2181@2x.png"
          property1DefaultPosition="absolute"
          property1DefaultTop="0px"
          property1DefaultLeft="0px"
          hVACFontWeight="600"
        />
        <Mechanical2
          imageDimensions="/rectangle-2191@2x.png"
          property1DefaultPosition="absolute"
          property1DefaultTop="0px"
          property1DefaultLeft="300px"
        />
        <Mechanical3
          imageDimensions="/rectangle-2204@2x.png"
          property1DefaultPosition="absolute"
          property1DefaultTop="0px"
          property1DefaultLeft="600px"
        />
      </div>
    </div>
  );
};

export default MechanicalEstimationDataContai;
