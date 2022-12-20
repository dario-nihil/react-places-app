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
            inputId === "address"
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
    default:
      return state;
  }
};

// const initialFormState: IFormState = {
//   inputs: {
//     title: {
//       value: "",
//       isValid: false,
//     },
//     description: {
//       value: "",
//       isValid: false,
//     },
//     address: {
//       value: "",
//       isValid: false,
//     },
//   },
//   isValid: false,
// };

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

  return [formState, inputHandler] as const;
};
