import styles from "../../styles/Onboarding.module.css";
import React from "react";

const FormCard = ({ children, currentStep, prevFormStep }) => {
  return (
    <div>
      {currentStep < 3 && (
        <div>
          {currentStep > 0 && (
            <button
              className={styles.back}
              onClick={prevFormStep}
              type="button"
            >
              back
            </button>
          )}

          <span>Step {currentStep + 1} of 3</span>
        </div>
      )}
      {children}
    </div>
  );
};

export default FormCard;
