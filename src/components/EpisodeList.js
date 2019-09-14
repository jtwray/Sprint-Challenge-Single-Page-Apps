
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList({episodes, setepisodes}) {
	useEffect(() => {
		Axios.get(`https://rickandmortyapi.com/api/episode/`)
			.then(res => {
				setepisodes(res.data.results);
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
			{episodes &&
				episodes.map((episode, index) => (
					<div key={index}>
						<EpisodeCard name={episode.name} type={episode.type} dimension={episode.dimension} residents={episode.residents} />
					</div>
				))}
		</section>
	);
}