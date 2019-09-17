import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList({episodes, setEpisodes}) {
	useEffect(() => {
		Axios.get(`https://rickandmortyapi.com/api/episode`)
			.then(res => {
				console.log(res.data.results);
				setEpisodes(res.data.results);
			})
			.catch(error => {
				console.log(error);
			});

		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
	}, [setEpisodes]);

	return (
		<section className="character-list grid-view">
			{episodes &&
				episodes.map((episode, index) => (
					<div key={episode.name}>
						<EpisodeCardContainer>
							<EpisodeCard
								name={episode.name}
								created={episode.created}
								episode={episode.episode}
								characters={episode.characters}
								id={episode.id}
							/>
						</EpisodeCardContainer>
					</div>
				))}
		</section>
	);
}

const EpisodeCardContainer = styled.div`
	height: auto;
	max-width: 300px;
	margin: auto 1%;
	padding: 10px;
	width: 29%;
	min-width: 200px;
	flex: 1 2 200px;
`;
