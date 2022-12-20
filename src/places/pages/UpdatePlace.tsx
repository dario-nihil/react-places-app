import { useParams } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";

import Input from "../../shared/components/FormElements/Input";
import IPlace from "../../shared/interfaces/IPlace";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/utli/validators";
import styles from "./PlaceForm.module.css";

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
    title: "Empire State Building",
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

const UpdatePlace = () => {
  const placeId = useParams<UpdatedPlaceParam>().placeId;

  const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className={styles["place-form"]}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        inputValue={identifiedPlace.title}
        inputIsValid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 character long)."
        onInput={() => {}}
        inputValue={identifiedPlace.description}
        inputIsValid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
