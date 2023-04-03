import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resData, setResData] = useState();

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.666773&lng=77.2742782&restaurantId=140505"
    );
    const jsonData = await data.json();
    setResData(jsonData);
    console.log(jsonData);
  }
  return (
    <div>
      <h1>Restaurant Name</h1>
      <h2>Restaurant ID: {resId}</h2>
      <h3>Here is the Menu</h3>
    </div>
  );
};
export default RestaurantMenu;
