import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/utli/validators";
import Input from "../../shared/components/FormElements/Input";
import React from "react";
import IFormState from "../../shared/interfaces/IFormState";
import styles from "./Auth.module.css";

const initialFormState: IFormState = {
  inputs: {
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  },
  isValid: false,
};

const Auth = () => {
  const [formState, inputHandler] = useForm(
    initialFormState,
    initialFormState.isValid
  );

  const authSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className={styles["authentication"]}>
      <h2>Login Require</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          id="email"
          type="email"
          element="input"
          label="E-Mail"
          errorText="Please enter a valid email address."
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
        />
        <Input
          id="password"
          type="password"
          element="input"
          label="Password"
          errorText="Please enter a valid password (at least 5 characters long.)"
          validators={[VALIDATOR_MINLENGTH(5)]}
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          LOGIN
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
