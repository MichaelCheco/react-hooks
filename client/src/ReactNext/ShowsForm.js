import React, { useState } from 'react';

const ShowsForm = ({ handleSubmit }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleChange = e => {
		setSearchTerm(e.target.value);
	};
	return (
		<form onSubmit={handleSubmit}>
			<p>Search for TV Shows</p>
			<input
				type="text"
				name="searchTerm"
				value={searchTerm}
				onChange={handleChange}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default ShowsForm;
