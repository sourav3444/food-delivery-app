import { IMG_CDN_URL } from "../constant";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

export const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravel,
  cloudinaryImageId,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-60 mx-2 my-2 px-3 py-3 bg-sky-200 drop-shadow-lg font-serif items-center overflow-hidden">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{lastMileTravel}</h3>
      <h4>{user.name}</h4>
      <h4>{user.email}</h4>
    </div>
  );
};
