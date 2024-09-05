/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { idMeal } = useParams();
  const [detail , setDetail] = useState()
  console.log(idMeal);
  const getDetails =  async() => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
    const data = await response.json();
    console.log(data.meals[0])
    setDetail(data.meals[0]);
  }
  
  useEffect(() => {
    getDetails();
  },[])

  return (
    <div>
      {detail ? (
        <div>
          <h1 className="text-primary text-2xl text-center font-bold mt-6">
            {' '}
            Here Is Your Meal 😍{' '}
          </h1>
          <img className="w-[400px] mx-auto mt-10" src={detail.strMealThumb} />

          <h2 className="text-center"> MealName: {detail.strMeal}</h2>
          <h3>About Ingredient : {detail.strInstructions.slice(0,350)}... </h3>
        </div>
      ) : (
        <h2>no data found</h2>
      )}
    </div>
  );
}
