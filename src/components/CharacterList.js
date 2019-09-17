import React, {useEffect, useState, useRef} from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

import {Route} from 'react-router-dom';


export default function CharacterList({characters, setCharacters}) {

	useEffect(() => {
		Axios.get(`https://rick-api.herokuapp.com/api/character`)
			.then(res => {
				console.log(res.data);
				setCharacters(res.data.results);
				console.log(`charsApiResponse.current:${res.data.results}`);
			})
			.catch(error => {
				console.log(error);
			});

		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
	}, [setCharacters]);

	return (
		<section className="character-list grid-view">
			{characters &&
				characters.map((character, index) => (
					<CharacterCardContainer key={character.name}>
						<CharacterCard character={character} />
					</CharacterCardContainer>
				))}
			
		</section>
	);
}

const CharacterCardContainer = styled.div`
	height: auto;
	margin: 1%;
	white-space: pre-wrap;
	flex: 1 2 200px;
`;
