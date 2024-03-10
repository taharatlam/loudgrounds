import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
  } from "react";
  
 
  
  const FormContext = createContext({
    formData: {},
    onHandleBack: () => {},
    onHandleNext: () => {},
    setFormData: () => {},
    step: 1,
  });

  
  export function FormProvider({ children }) {
    const [formData, setFormData] = useState();
    const [step, setStep] = useState(1);
  
    function onHandleNext() {
      console.log('step', step);
      setStep((prev) => prev + 1);
    }
  
    function onHandleBack() {
      setStep((prev) => prev - 1);
    }
  
    return (
      <FormContext.Provider
        value={{ formData, setFormData, onHandleBack, onHandleNext, step }}
      >
        {children}
      </FormContext.Provider>
    );
  }
  
  export function useFormState() {
    return useContext(FormContext);
  }
  