import ICoord from "./ICoord";

interface IPlace {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  address: string;
  creatorId: string;
  location: ICoord;
}

export default IPlace;
