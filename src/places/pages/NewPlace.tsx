import React, { useCallback, useReducer } from "react";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utli/validators";
import styles from "./NewPlace.module.css";

type FormState = {
  inputs: {
    title: {
      value: string;
      isValid: boolean;
    };
    description: {
      value: string;
      isValid: boolean;
    };
    address: {
      value: string;
      isValid: boolean;
    };
  };
  isValid: boolean;
};

type ACTION_TYPE = {
  type: "INPUT_CHANGE";
  inputId: string;
  isValid: boolean;
  value: string;
};

const initialFormState: FormState = {
  inputs: {
    title: {
      value: "",
      isValid: false,
    },
    description: {
      value: "",
      isValid: false,
    },
    address: {
      value: "",
      isValid: false,
    },
  },
  isValid: false,
};

const formReducer = (state: FormState, action: ACTION_TYPE): FormState => {
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
            formIsValid = formIsValid && state.inputs[inputId].isValid;
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

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const inputHandler = useCallback(
    (id: string, value: string, isValid: boolean) => {
      dispatch({ type: "INPUT_CHANGE", inputId: id, value, isValid });
    },
    []
  );

  const placeSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState.inputs); // send to the backend
  };

  return (
    <form className={styles["place-form"]} onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        errorText="Please enter a valid title."
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        errorText="Please enter a valid description (at least 5 characters long.)."
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        errorText="Please enter a valid address.)."
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
