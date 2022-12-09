const Skeleton = () => {
	return (
		<div className="w-56 h-[340px] p-5 shadow-sm rounded flex flex-col items-center cursor-pointer animate-pulse transition-all duration-300">
			<div className="w-full h-[180px] bg-gray-300 rounded"></div>
			<div className="w-full grid gap-2 mt-3  justify-items-center">
				<div className="h-2 rounded w-10/12 bg-gray-300"></div>
				<div className="h-2 rounded w-9/12 bg-gray-300"></div>
			</div>
			<button type="button" className="py-4 px-12 mt-6 bg-gray-300 rounded"></button>
		</div>
	);
};
export default Skeleton;
