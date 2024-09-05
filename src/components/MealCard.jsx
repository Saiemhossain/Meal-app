/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react'
import Details from './Details';
import { Link } from 'react-router-dom';

export default function MealCard({data}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-10 mt-10 py-4 gap-20">
      {data && data.length > 0 ? (
        data.map(item => (
          <div key={item.idMeal}>
            <img className="w-[400px]" src={item.strMealThumb} />
            <h2 className="text-center text-[20px]">{item.strMeal}</h2>
            <h4> {item.strInstructions.slice(0, 80)}... </h4>
            <Link to={`/${item.idMeal}`}>
              <button className="btn mx-auto text-black block mt-6 hover:bg-slate-200 ">
                View More Recipy Detail
              </button>
            </Link>
          </div>
        ))
      ) : (
        <h2 className="text-center text-2xl">something went wrong!</h2>
      )}
    </div>
  );
}
