import React from 'react';
import { unstable_createResource as createResource } from 'react-cache';
import { fetchShowsBySearchTerm } from '../api/fetchShows';

import Show from './Show';

const shows = createResource(fetchShowsBySearchTerm);

function ShowList({ searchTerm }) {
	const showList = shows.read(searchTerm);
	return (
		<div>
			{showList.map(item => (
				<Show item={item} />
			))}
		</div>
	);
}

export default ShowList;
