const Filter = ({ onChange }) => {
	const handleChange = e => {};

	return (
		<input
			onChange={onChange}
			className="border-2 border-slate-400 rounded-md mx-auto block mt-5"
			type="text"
			placeholder="Find contact"
		/>
	);
};

export default Filter;
