import React, {useEffect, useState, useRef} from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import {Route} from 'react-router-dom';


export default function CharacterList({characters, setCharacters}) {
	const charsApiResponse = useRef();
	useEffect(() => {
		Axios.get(`https://rick-api.herokuapp.com/api/character`)
			.then(res => {
				console.log(res.data);
				charsApiResponse.current = res.data.results;
				setCharacters(charsApiResponse.current);
				console.log(`charsApiResponse.current:${res.data.results}`);
			})
			.catch(error => {
				console.log(error);
			});

		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
	}, []);

	return (
		<section className="character-list grid-view">
			{characters &&
				characters.map((character, index) => (
					<CardContainer key={index}>
						<CharacterCard character={character} />
					</CardContainer>
				))}
				<Route path="/rickandmorty/characters/"   render={ props => <SearchForm     chars={characters}      {...props} /> } />
		</section>
	);
}

const CardContainer = styled.div`
	height: auto;
	margin: 1%;
	white-space: pre-wrap;
	flex: 1 2 200px;
`;
