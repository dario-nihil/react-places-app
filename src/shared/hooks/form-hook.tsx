import { useCallback, useReducer } from "react";

import IFormState from "../interfaces/IFormState";
import PLACE_ACTION_TYPE from "../types/PlacesActionType";

const formReducer = (
  state: IFormState,
  action: PLACE_ACTION_TYPE
): IFormState => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          if (
            inputId === "title" ||
            inputId === "description" ||
            inputId === "address" ||
            inputId === "email" ||
            inputId === "password"
          ) {
            formIsValid = formIsValid && state.inputs[inputId]!.isValid;
          }
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    case "SET_DATA ":
      return { inputs: action.inputs, isValid: action.formIsValid };
    default:
      return state;
  }
};

export const useForm = (
  initialInput: IFormState,
  initialFormValidity: boolean
) => {
  const initialFormInput = initialInput;
  initialFormInput.isValid = initialFormValidity;

  const [formState, dispatch] = useReducer(formReducer, initialFormInput);

  const inputHandler = useCallback(
    (id: string, value: string, isValid: boolean) => {
      dispatch({ type: "INPUT_CHANGE", inputId: id, value, isValid });
    },
    []
  );

  const setFormData = useCallback(
    (inputData: IFormState["inputs"], formValidity: boolean) => {
      dispatch({
        type: "SET_DATA ",
        inputs: inputData,
        formIsValid: formValidity,
      });
    },
    []
  );

  return [formState, inputHandler, setFormData] as const;
};
