import React, { Suspense, useState } from 'react';
import Loader from 'react-loader-spinner';
import ShowsForm from './ShowsForm';
import ShowList from './ShowList';

export const ShowsView = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const handleSubmit = e => {
		e.preventDefault();
		setSearchTerm(e.target.elements.searchTerm.value);
	};
	return (
		<div>
			<h1>Shows {'🍿'}</h1>
			<ShowsForm handleSubmit={handleSubmit} />
			{searchTerm ? (
				<Suspense
					fallback={
						<Loader type="Ball-Triangle" color="red" height="90" width="60" />
					}>
					<ShowList searchTerm={searchTerm} />
				</Suspense>
			) : (
				<h3>Go aheaad and add a search term {'🏄‍♂️'}</h3>
			)}
		</div>
	);
};
