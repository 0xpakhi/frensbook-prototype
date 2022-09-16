import { useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Gm from "../components/Onboarding/gm";
import Username from "../components/Onboarding/username";
import Work from "../components/Onboarding/work";
import FormCard from "../components/Onboarding/FormCard";

const Onboarding = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div className={styles.onboarding}>
      <div className={styles.bgimgdiv}>
        <Image
          className={styles.bgimg}
          src="/background.png"
          alt="bg"
          width="400"
          height="400"
        />
      </div>
      <div>
        <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
          {formStep >= 0 && (
            <Gm formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 1 && (
            <Username formStep={formStep} nextFormStep={nextFormStep} />
          )}
          {formStep >= 2 && (
            <Work formStep={formStep} nextFormStep={nextFormStep} />
          )}

          {/* {formStep > 2 && <FormCompleted />} */}
        </FormCard>
      </div>
    </div>
  );
};

export default Onboarding;
