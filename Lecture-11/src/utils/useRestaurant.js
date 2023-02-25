import { useState, useEffect } from "react";
import { GET_MENU_URL } from "./config";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState([])

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        let res = await fetch(`${GET_MENU_URL}=${id}`);
        let data = await res.json();
        setRestaurant(data.data);
    }

    return restaurant;
}

export default useRestaurant;