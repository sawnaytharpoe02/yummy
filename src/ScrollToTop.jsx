import { BsArrowUpCircle } from 'react-icons/bs';

const ScrollToTop = () => {
	const scrollTo = () => {
		window.scrollTo(0, 0);
	};
	return (
		<button>
			<BsArrowUpCircle onClick={() => scrollTo()} className=" fixed bottom-3 right-2 text-3xl text-gray-800" />
		</button>
	);
};
export default ScrollToTop;
