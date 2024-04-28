import { useState } from "react";

export function userForm(steps) {
    const [currentStep, setcurrentStep] = useState(0)

    function changeStep(indice, event) {
        if (event) event.preventDefault();

        if(indice < 0 || indice >= steps.length) return

        setcurrentStep(indice)
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false
    }
}