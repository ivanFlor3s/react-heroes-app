import { useState } from "react";

//Custom hook que se va a encargar del manejo de los formularios
export const useForm = (initialState={}) => {
  const [state, setState] = useState(initialState);

  const reset = ()=> {
    setState(initialState)
  }
  const handleInputChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  return [
      state,
      handleInputChange,
      reset
  ]

};
