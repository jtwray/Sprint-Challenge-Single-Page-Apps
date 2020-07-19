import React, {useEffect} from 'react';
import Axios from 'axios';
import LocationCard from './LocationCard';
import styled from 'styled-components';

export default function LocationList({locations, setLocations}) {
	useEffect(() => {
		Axios.get(`https://rickandmortyapi.com/api/location/`)
			.then(res => {
				console.log(res.data);
				setLocations(res.data.results);
			})
			.catch(error => {
				console.log(error);
			});

		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
	}, []);
	const newKey = key => {
		return key
			.split(' ')
			.splice(' ')
			.join('');
	};
	return (
		<section className="character-list grid-view">
			{locations &&
				locations.map((location) => (
					<div key={`${location.name}`}>
						<LocationCardContainer>
							<LocationCard location={location}/>
						</LocationCardContainer>
					</div>
				))}
		</section>
	);
}

const LocationCardContainer = styled.div`
	height: auto;
	margin: 1%;
	white-space: pre-wrap;
	flex: 1 2 200px;
`;
