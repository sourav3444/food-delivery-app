import { useState,useEffect } from "react";




const RestaurantDetails=()=>{
    const [restaurantMenu,setRestaurantMenu]= useState([]);
    useEffect(()=>{
        getRestaurantDetails();
    },[])

    async function getRestaurantDetails(){
        
        const r_data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.666773&lng=77.2742782&restaurantId=157583&submitAction=ENTER")
        const r_datajson= await r_data.json();
        setRestaurantMenu(Object.values())

    }
}
