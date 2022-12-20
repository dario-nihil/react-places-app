import IFormState from "../interfaces/IFormState";

type PLACE_ACTION_TYPE =
  | {
      type: "INPUT_CHANGE";
      inputId: string;
      isValid: boolean;
      value: string;
    }
  | { type: "SET_DATA "; inputs: IFormState["inputs"]; formIsValid: boolean };

export default PLACE_ACTION_TYPE;
