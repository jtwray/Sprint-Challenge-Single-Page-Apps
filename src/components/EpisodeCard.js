import React from 'react';
import styled from 'styled-components';
import { Link, Route} from 'react-router-dom';


export default function EpisodeCard( props) {
	return (
		<Card>
			<Link
			 to={`/rickandmorty/episodes/${props.episode.id}`}
			 key={`${props.episode.name}${props.episode.id}`}
			 >
			 <h2> {props.episode.name} </h2>
			</Link>
			<div>episode: {props.episode.episode} </div>
			<div>created: {props.episode.created} </div>
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
