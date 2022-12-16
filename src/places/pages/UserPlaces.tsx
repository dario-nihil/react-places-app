import IPlace from "../../shared/interfaces/IPlace";
import PlaceList from "../components/PlaceList";

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
      lat: 37.1040067,
      lng: -68.1145473,
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

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
