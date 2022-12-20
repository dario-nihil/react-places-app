import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";
import IPlace from "../../shared/interfaces/IPlace";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/utli/validators";
import styles from "./PlaceForm.module.css";
import IFormState from "../../shared/interfaces/IFormState";
import React from "react";

type UpdatedPlaceParam = {
  placeId: string;
};

const DUMMY_PLACES: IPlace[] = [
  {
    id: "p1",
    creatorId: "u1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2022-06/iStock-937427130%20%281%29.jpg?itok=osCyvhw5",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.748817,
      lng: -73.985428,
    },
  },
  {
    id: "p2",
    creatorId: "u2",
    title: "Emp. State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2022-06/iStock-937427130%20%281%29.jpg?itok=osCyvhw5",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 37.1040067,
      lng: -68.1145473,
    },
  },
];

let initialFormState: IFormState = {
  inputs: {
    title: {
      value: "",
      isValid: false,
    },
    description: {
      value: "",
      isValid: false,
    },
  },
  isValid: false,
};

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams<UpdatedPlaceParam>().placeId;

  /**
   * #FIXME
   * identifiedPlace is used before check potential null,
   * because cannot use a hook conditionally limitation rule
   */

  const [formState, inputHandler, setFormData] = useForm(
    initialFormState,
    initialFormState.isValid
  );

  const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      initialFormState = {
        inputs: {
          title: {
            value: identifiedPlace!.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace!.description,
            isValid: true,
          },
        },
        isValid: true,
      };

      setFormData(initialFormState.inputs, initialFormState.isValid);
      setIsLoading(false);
    }
  }, [identifiedPlace, setFormData]);

  const placeUpdateSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className={styles["place-form"]} onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialIsValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 character long)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialIsValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
