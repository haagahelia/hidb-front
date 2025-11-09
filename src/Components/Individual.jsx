import React from 'react';
import { useParams } from 'react-router-dom';
import { mockData } from "../mock_data";

const PlaneIndividual = () => {
//	const { id } = useParams();
	const id = "2";
	const plane = mockData.find(p => p.id === parseInt(id));
	if ( !plane ) {
		return (
		<h2>Not Found</h2>
		);
	}
	return (
		<div>
			<h2>{plane.name}</h2>
			<img src={plane.image} />
			<p>{plane.description}</p>
			<h3>Feature list:</h3>
			<ul>
				{plane.features.map((features, index) => (
					<li key={index}>{features}</li>
				))}
			</ul>
			<p>Year: {plane.year}</p>
		</div>
	);
};

export default PlaneIndividual;
