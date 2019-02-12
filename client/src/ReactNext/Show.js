import React from 'react';

import Img from './Img';

const Show = ({ item }) => (
	<div className="show">
		<div className="show__left">
			{item.show.image && <img src={item.show.image.original} alt="poster" />}
		</div>
		<div className="show__right">
			<div className="show__right__title">{item.show.name}</div>
			<div className="show__right__subtitle">
				Score: {item.show.rating.average}
			</div>
			<div className="show__right__subtitle">Status: {item.show.status}</div>
			<div className="show__right__subtitle">
				Network: {item.show.network ? item.show.network.name : 'N/A'}
			</div>
			<a href={item.show.url} target="_blank" className="show__right__subtitle">
				Link
			</a>
		</div>
	</div>
);

export default Show;
