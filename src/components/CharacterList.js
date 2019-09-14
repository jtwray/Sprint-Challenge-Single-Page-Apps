import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList({characters, setCharacters}) {
	useEffect(() => {
		Axios.get(`https://rickandmortyapi.com/api/character/`)
			.then(res => {
				setCharacters(res.data.results);
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
			{characters &&
				characters.map((character, index) => (
					<div key={index}>
						<CharacterCard character={character} />
					</div>
				))}
		</section>
	);
}
