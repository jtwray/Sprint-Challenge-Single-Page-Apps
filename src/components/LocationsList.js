
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList({locations, setLocations}) {
	useEffect(() => {
		Axios.get(`https://rickandmortyapi.com/api/locations/`)
			.then(res => {
				setLocations(res.data.results);
				console.log(res.data.results);
			})
			.catch(error => {
				console.log(error);
			});

		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
	}, []);

	return (
		<section className="character-list grid-view">
			{locations &&
				locations.map((location, index) => (
					<div key={index}>
						<LocationCard name={location.name} type={location.type} dimension={location.dimension} residents={location.residents} />
					</div>
				))}
		</section>
	);
}