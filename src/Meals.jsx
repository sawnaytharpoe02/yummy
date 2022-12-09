import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';
import Loader from './Loader';
import Skeleton from './Skeleton';

const Meals = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [meals, setMeals] = useState([]);
	const [categories, setCategories] = useState([]);
	const [type, setType] = useState('Beef');

	const getMeals = async () => {
		const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`);
		setMeals(data.meals);
		setIsLoading(false);
	};

	const getCategories = async () => {
		const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
		setCategories(data.meals);
	};

	useEffect(() => {
		getMeals();
		getCategories();
	}, [type]);

	return (
		<>
			{isLoading ? (
				<div className="flex flex-wrap justify-center gap-10 py-10">
					{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
						<Skeleton key={el} />
					))}
				</div>
			) : (
				<>
					<div className="flex items-center  gap-2 flex-wrap ">
						{categories?.map((cat) => (
							<button
								className={`py-1 px-5 text-sm rounded-full border border-yellow-500 hover:text-white hover:bg-yellow-500 ${cat.strCategory === type && 'text-white bg-yellow-500'}`}
								key={cat.strCategory}
								onClick={() => setType(cat.strCategory)}>
								{cat.strCategory}
							</button>
						))}
					</div>
					<div className="flex flex-wrap justify-center gap-10 py-10">
						{meals?.map((meal) => (
							<Card key={meal.idMeal} meal={meal} />
						))}
					</div>
				</>
			)}
		</>
	);
};
export default Meals;
