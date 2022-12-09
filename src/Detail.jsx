import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsYoutube } from 'react-icons/bs';
import Loader from './Loader';

const Detail = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();
	const [meal, setMeal] = useState({});

	const singleMealDetail = async () => {
		const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
		setMeal(data?.meals[0]);
		setIsLoading(false);
	};

	useEffect(() => {
		singleMealDetail();
	}, []);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className="flex flex-col gap-3 py-10">
					<img src={meal.strMealThumb} alt="" className="w-72 rounded shadow-xl" />
					<div className="w-fit px-4 py-1 mt-4 text-center text-sm rounded text-white bg-yellow-400 ">{meal.strCategory}</div>
					<h1 className="text-lg font-bold">{meal.strMeal}</h1>
					<div>
						<h2 className="mb-1 text-lg font-bold">Instruction</h2>
						<p className=" text-gray-700 leading-7 tracking-wide">{meal.strInstructions}</p>
					</div>

					<a href={meal.strYoutube} className="text-gray-600 text-sm">
						<BsYoutube className="text-red-600 text-2xl inline mr-4" />
						Watch on Youtube
					</a>
				</div>
			)}
		</>
	);
};
export default Detail;
