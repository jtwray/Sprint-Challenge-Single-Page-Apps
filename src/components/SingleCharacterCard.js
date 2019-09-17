import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Axios from 'axios';

export default function SingleCharacterCard(props) {
	const [card, setCard] = useState({});
	console.log(props.match);

	const charid = props.match.params.characterID;
	useEffect(
		() => {
			Axios.get(`https://rickandmortyapi.com/api/character/${charid}`)
				.then(res => setCard(res.data))
				.then(res => console.log(res))
				.catch(error => console.log(error));
		},
		[charid, setCard]
	);
	return (
		<div>
			<CharCard>
				CharacterDetails
				<h1> {card.name} </h1> <img src={card.image} alt={card.name} />
				<span> {card.status} </span>
				{card.gender}
				{card.species}
			</CharCard>
		</div>
	);
}
const CharCard = styled.div`
	border-radius: 42px;
	box-shadow: 1px 1px 6px 1px #020000, inset -3px -2px 20px 3px black;
	display: flex;
	flex-direction: column;
	padding: 20px;
	background-color: papayawhip;
	justify-content: center;
	max-width: 300px;
	margin: auto 2%;
`;
