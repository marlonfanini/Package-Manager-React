import { useEffect, useRef } from "react";
import { useState } from "react";



export const useForm = (initialForm = {}, setValues) => {
    const [formState, setFormState] = useState(initialForm);
  
    const setValuesRef = useRef(setValues);
    setValuesRef.current = setValues;

    const onInputChange = ({target}) => {
      const { name, value } = target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const setInitialForm = () => {
      setFormState(initialForm);
    };


  
      
  
    return {
      ...formState,
      setInitialForm,
      onInputChange,
    };
  };



