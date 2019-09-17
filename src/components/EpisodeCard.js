import React from 'react';
import styled from 'styled-components';
import { Link, Route} from 'react-router-dom';
import SingleEpisodeCard from './SingleEpisodeCard';

export default function EpisodeCard({name, episode, created, characters, id}, props) {
	return (
		<Card>
		<Route exact path="/rickandmorty/episodes/:episodeID" component={SingleEpisodeCard}/>
			<Link to={`/rickandmorty/episodes/${id}`} key={`${name}${id}`}>
				<h2> {name} </h2>
			</Link>
			<div>episode: {episode} </div>
			<div>created: {created} </div>
		</Card>
	);
}
const Card = styled.div`
	border-radius: 42px;
	box-shadow: 1px 1px 6px 1px #020000, inset -3px -2px 20px 3px black;
	display: flex;
	flex-direction: column;
	padding: 20px;
	background-color: papayawhip;
`;
