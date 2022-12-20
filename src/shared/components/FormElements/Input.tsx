import React, { useReducer, useEffect } from "react";

import { validate } from "../../utli/validators";
import styles from "./Input.module.css";

type InputState = {
  value: string;
  isValid: boolean;
  isTouched: boolean;
};

type ACTION_TYPE =
  | {
      type: "CHANGE";
      payload: string;
      validators: [{ type: string; val?: string | number }];
    }
  | { type: "TOUCH" };

const inputReducer = (state: InputState, action: ACTION_TYPE): InputState => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.payload,
        isValid: validate(action.payload, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

type InputProps = {
  id: string;
  element: string;
  label?: string;
  type?: string;
  placeholder?: string;
  rows?: number;
  errorText?: string;
  validators: [{ type: string; val?: number }];
  onInput: (id: string, value: string, isValid: boolean) => void;
  initialValue?: string;
  initialIsValid?: boolean;
};

const Input = (props: InputProps) => {
  const {
    id,
    element: elementType,
    label,
    placeholder,
    type,
    rows,
    errorText,
    validators,
    onInput,
    initialValue,
    initialIsValid,
  } = props;

  const initialState: InputState = {
    value: initialValue || "",
    isValid: initialIsValid || false,
    isTouched: false,
  };

  const [inputsState, dispatch] = useReducer(inputReducer, initialState);

  const { value, isValid } = inputsState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    dispatch({
      type: "CHANGE",
      payload: event.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const element =
    elementType === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputsState.value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputsState.value}
      />
    );

  return (
    <div
      className={`${styles["form-control"]} ${
        !inputsState.isValid &&
        inputsState.isTouched &&
        styles["form-control--invalid"]
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {element}
      {!inputsState.isValid && inputsState.isTouched && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
