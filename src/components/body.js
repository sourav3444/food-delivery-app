import { RestaurantCard } from "./restaurantCard";
import { useState, useEffect } from "react";
import SkeletonCard from "./cardSkeleton";
import { Link } from "react-router-dom";

function filterRestaurants(searchInput, allRestaurants) {
  return (data = allRestaurants.filter((obj) => {
    return obj?.data?.name.toLowerCase().includes(searchInput.toLowerCase());
  }));
}

export const Body = () => {
  const [searchInput, setSearchInput] = useState();
  const [restaurantJi, setRestaurantJi] = useState([]);
  const [allRestaurants, setallRestaurants] = useState([]);
  // console.log("render")
  useEffect(() => {
    getRestaurant();
    // console.log("useEffect")
  }, []);
  async function getRestaurant() {
    const apidata = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.666773&lng=77.2742782&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await apidata.json();
    // console.log(jsonData);
    setRestaurantJi(jsonData?.data?.cards[2]?.data?.data?.cards);
    setallRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  }
  return restaurantJi.length === 0 ? (
    <div className="flex flex-wrap">
      {Array.from({ length: 20 }, (_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  ) : (
    <>
      <div>
        <input
          type="text"
          className="border font-sans p-2 mx-2 my-2"
          placeholder="Search.."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => {
            const dataji = filterRestaurants(searchInput, allRestaurants);
            setRestaurantJi(dataji);
          }}>
          {" "}
          Search{" "}
        </button>
        <input
          placeholder="Name"
          className="border font-sans p-2 mx-2 my-2"
          onChange={(e) => e.target.value}></input>
        <input
          placeholder="email"
          className="border font-sans p-2 mx-2 my-2"
          onChange={(e) => e.target.value}></input>
      </div>
      <div className="flex flex-wrap">
        {restaurantJi.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant?.data?.id}
              key={restaurant.data.id}>
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
