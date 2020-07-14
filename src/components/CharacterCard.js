import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function CharacterCard(props) {
	return (
		
		<Card>
		<Link
		to={`/rickandmorty/characters/${props.character.id}`}
		key={`${props.character.name}${props.character.id}`}
		>
		<h1> {props.character.name} </h1>
		</Link>
				<img src={props.character.image} alt={props.character.name} />

				<span>status: {props.character.status} </span>
				<span>gender: {props.character.gender} </span>
				<span>species: {props.character.species} </span>
			</Card>
	);
}

const Card = styled.div`
	border-radius: 42px;
	box-shadow: 1px 1px 6px 1px #020000, inset -3px -2px 20px 3px black;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-content;
	padding: 1.0rem;
	font-size:1.0rem;
	background-color: #f0f0ff;
	white-space:nowrap;
	width:30vw;
    height: auto;
    margin: 1%;
    
    flex: 1 2 200px;

`;
