import { RiRestaurant2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Link to={'/'}>
			<div className="flex items-center gap-2 my-4">
				<RiRestaurant2Fill className="text-3xl text-yellow-400" />
				<p className="text-xl">Yummy</p>
			</div>
		</Link>
	);
};
export default Navbar;
