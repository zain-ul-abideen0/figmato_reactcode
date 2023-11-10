import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tradeslook from "../components/Tradeslook";
import Abovethenavbar from "../components/Abovethenavbar";
import Aboutthefooter from "../components/Aboutthefooter";
import MechanicalEstimationDataContai from "../components/MechanicalEstimationDataContai";
import Plumbing1 from "../components/Plumbing1";
import Plumbing2 from "../components/Plumbing2";
import Drainage3 from "../components/Drainage3";
import styles from "./MechanicalPlumbing.module.css";

const MechanicalPlumbing = () => {
  return (
    <div className={styles.mechanicalplumbing}>
      <Navbar naveBarPosition="absolute" naveBarTop="113px" naveBarLeft="0px" />
      <div className={styles.rectangleParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-195@2x.png" />
        <div className={styles.groupItem} />
      </div>
      <div className={styles.mechanicalplumbing1}>Mechanical/Plumbing</div>
      <Footer footerPosition="absolute" footerTop="4030px" footerLeft="0px" />
      <div className={styles.atProcoreEstimatorsContainer}>
        <span>{`At `}</span>
        <b className={styles.procoreEstimators}>Procore Estimators</b>
        <span>
          , our area of expertise lies in delivering precise and dependable
          mechanical and plumbing estimates. Our seasoned team of estimators
          grasps the complexities of mechanical and plumbing systems, offering
          all-encompassing and thorough estimates for your projects. Catering to
          both residential and commercial constructions, we factor in equipment,
          materials, labor, and project-specific requirements. Our unwavering
          commitment to providing vital information enables our clients to make
          well-informed decisions to ensure the success of their projects. Our
          mechanical and plumbing estimates form the bedrock of a triumphant
          construction project.
        </span>
      </div>
      <Tradeslook />
      <Abovethenavbar
        groupDivPosition="absolute"
        groupDivTop="0px"
        groupDivLeft="0px"
      />
      <Aboutthefooter
        groupDivPosition="absolute"
        groupDivTop="3644px"
        groupDivLeft="-2px"
        rectangleIconRight="-0.13%"
        rectangleIconLeft="0.13%"
      />
      <MechanicalEstimationDataContai />
      <div className={styles.plumbingEstimationData}>
        Plumbing Estimation Data
      </div>
      <div className={styles.benefitsOfMechanical}>
        Benefits of Mechanical Estimating
      </div>
      <div className={styles.ourPlumbingEstimating}>
        Our Plumbing Estimating Services
      </div>
      <div className={styles.instanceParent}>
        <Plumbing1
          imageDimensions="/rectangle-2205@2x.png"
          property1DefaultPosition="absolute"
          property1DefaultTop="0px"
          property1DefaultLeft="0px"
        />
        <Plumbing2
          imageDimensions="/rectangle-2206@2x.png"
          property1DefaultPosition="absolute"
          property1DefaultTop="0px"
          property1DefaultLeft="297px"
        />
        <Drainage3
          imageDimensions="/rectangle-2207@2x.png"
          property1DefaultPosition="absolute"
          property1DefaultTop="0px"
          property1DefaultLeft="600px"
        />
      </div>
      <div className={styles.gettingAccessToContainer}>
        <ul className={styles.gettingAccessToTheIndustry}>
          <li className={styles.gettingAccessTo}>
            Getting access to the industry standards insights.
          </li>
          <li className={styles.gettingAccessTo}>
            Understanding the internal project cost.
          </li>
          <li className={styles.gettingAccessTo}>
            Getting the most reliable mechanical estimates.
          </li>
          <li className={styles.gettingAccessTo}>
            Increasing the probability of high profit.
          </li>
          <li className={styles.gettingAccessTo}>
            Boosting their win-bid ratio.
          </li>
          <li className={styles.gettingAccessTo}>
            Streamlining their project activities with more confidence.
          </li>
          <li className={styles.gettingAccessTo}>
            Identifying the errors and flaws in their mechanical project.
          </li>
          <li>
            Mitigating the potential risk while saving their time and money.
          </li>
        </ul>
      </div>
      <div className={styles.coldWaterPipesContainer}>
        <ul className={styles.gettingAccessToTheIndustry}>
          <li className={styles.gettingAccessTo}>Cold Water Pipes</li>
          <li className={styles.gettingAccessTo}>Hot Water Pipes</li>
          <li className={styles.gettingAccessTo}>Vent Pipes</li>
          <li className={styles.gettingAccessTo}>Gas Pipes</li>
          <li className={styles.gettingAccessTo}>Sanitary Pipes</li>
          <li className={styles.gettingAccessTo}>Underground Pipes</li>
          <li>Pipe Fittings</li>
        </ul>
      </div>
      <div className={styles.pipeConcealmentInsulationsContainer}>
        <ul className={styles.gettingAccessToTheIndustry}>
          <li className={styles.gettingAccessTo}>Pipe Concealment</li>
          <li className={styles.gettingAccessTo}>Insulations</li>
          <li className={styles.gettingAccessTo}>Valves</li>
          <li className={styles.gettingAccessTo}>Hangers</li>
          <li className={styles.gettingAccessTo}>Struts</li>
          <li>Supports</li>
        </ul>
      </div>
      <img
        className={styles.mechanicalplumbingChild}
        alt=""
        src="/rectangle-247@2x.png"
      />
      <div className={styles.mechanicalplumbingInner}>
        <div className={styles.areYouReadyToGetStartedWParent}>
          <b className={styles.areYouReady}>
            Are You Ready To Get Started With Us!
          </b>
          <div className={styles.toUploadYour}>
            {" "}
            to upload your plans. we accept PDF format and your plans can be Bid
            set, Schematic, Design Development, Construction document, or
            conceptual drawings.
          </div>
          <b className={styles.clickHere}>Click here</b>
          <b className={styles.getAQuote}>2- Get a Quote</b>
          <b className={styles.receiveEstimate}>3- Receive Estimate</b>
          <div
            className={styles.quotesWillBe}
          >{`Quotes will be based on invoice, delivery date, and turnaround time. `}</div>
          <div className={styles.estimatesWillBe}>
            Estimates will be delivered to you in EXCEL sheets comprising all
            the material and labor pricing with cut reports either in
            MasterFormat or your customized format.
          </div>
          <b className={styles.uploadYouPlans}>1- Upload you Plans</b>
        </div>
      </div>
    </div>
  );
};

export default MechanicalPlumbing;
