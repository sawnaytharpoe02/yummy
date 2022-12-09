import { Link } from 'react-router-dom';

const Card = ({ meal }) => {
	const excerpt = (str) => {
		if (str.length >= 30) {
			return str.slice(0, 45) + '...';
		} else {
			return str;
		}
	};
	return (
		<div className="w-56 h-[340px] p-5 shadow rounded flex flex-col items-center cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300">
			<img src={meal.strMealThumb} alt="" className="rounded" />
			<h3 className="mt-3">{excerpt(meal.strMeal)}</h3>
			<Link to={`/detail/${meal.idMeal}`} className="mt-auto">
				<button
					type="button"
					className="inline-block tracking-widest px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">
					DETAIL
				</button>
			</Link>
		</div>
	);
};
export default Card;
