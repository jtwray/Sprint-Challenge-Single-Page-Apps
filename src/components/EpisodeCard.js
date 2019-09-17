import React from 'react';
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';

export default function EpisodeCard({name, episode, created, characters}) {
	return (
		<Card>
			<h2> {name} </h2>
			<div>episode: {episode} </div>
			<div>created: {created} </div>
			<div>characters: {characters && characters.map(char => <Link to={`${char}`}>{char}</Link>)} </div>
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
