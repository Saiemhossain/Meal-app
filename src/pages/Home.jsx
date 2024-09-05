/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import MealCard from "../components/MealCard";
import Loader from "../components/Loader";

export default function Home() {

  const [food, setFood] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
 
  

  const handleInput=(e) =>{
   setSearch(e.target.value)
  }

  const showFood = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      
      const data = await response.json();
      console.log(data.meals);
      setLoading(false)
      setFood(data.meals);
    } catch (error) {
      return <h2> No data found </h2>
    }
  }

  useEffect(() => {
    showFood();
  }, []);

  if (loading) {
    return <Loader/>
  }
  return (
    <>
      
      <div className="container">
      <h2 className="text-center font-bold mt-10 text-2xl">Search Your Favorite Dish!!🍽</h2>
      <div className="searchItem">
        <input className="text-2xl border-none text-black" type="text" placeholder="search dishes.." onChange={handleInput} />
        <button className="btn" onClick={showFood}> Search </button>
      </div>
    </div>
      <div>
      <MealCard data={food} />
      </div>
    </>
  );
}
