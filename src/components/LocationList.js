import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import LocationCard from './LocationCard';
import {NavLink} from 'react-router-dom';
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
	const newKey=(key)=>{
		return key.split(" ").splice(" ").join("");
	}
	return (
		<section className="character-list grid-view">
			{locations &&
				locations.map((location, index) => (
					<CardContainer  >
						<LocationCard  key={`${location.id}${index}${newKey(location.created)}${newKey(location.name)}`}
							name={location.name}
							created={location.created}
							dimension={location.dimension}
							residents={location.residents}
							id={location.id}
							index={index}
						/>
					</CardContainer>
				))}
		</section>
	);
}

const CardContainer = styled.div`
	height: auto;
	max-width: 300px;
	margin: auto 1%;
	padding: 10px;
	width: 29%;
	min-width: 100px;
`;
