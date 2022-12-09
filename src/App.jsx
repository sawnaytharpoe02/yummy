import { Routes, Route } from 'react-router-dom';
import Meals from './Meals';
import Detail from './Detail';
import Navbar from './Navbar';
import Skeleton from './Skeleton';
import ScrollToTop from './ScrollToTop';

const App = () => {
	return (
		<div className="container mx-auto px-4 ">
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Meals />}></Route>
				<Route path="/detail/:id" element={<Detail />}></Route>
			</Routes>
		</div>
	);
};
export default App;
