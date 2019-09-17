import React from 'react';
import {NavLink,Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';

export default function LocationCard({name, type, dimension, residents, url, created, id,index}){ 
console.log(`key=${name}${id}`)
const newKey=(key)=>{
	return key.split(" ").splice(" ").join("");
}
const getCharacterID=(url)=>{
	console.log( url.split("/")[-1])
	return url.split("/")[-1]
}




console.log(`key=${newKey(name)}${id*index}`)

	return (
		
		<Card key={`${newKey(name)}${newKey(dimension)}${newKey(name)}${id*index}`}>
			<h1> {name} </h1>
			<span> {type} </span>
			
			<h4>dimension: {dimension} </h4>
			<h4>residents: {residents} </h4>
			<NavLink to={`/rickandmorty/locations/:locationID/${id}`}>Location #{id}</NavLink>

			{residents && residents.map(res =>
				<>
					<Route path={`/rickandmorty/characters/${res.id}`} component={CharacterCard}/>
					<NavLink 
						to={`/rickandmorty/characters/${res.id}`}  
						key={url} >
						{res.name}
					</NavLink>
					</>
					)
				}
		</Card>
	);
}  

// created: "2017-11-10T12:42:04.162Z"
// dimension: "Dimension C-137"
// id: 1
// name: "Earth (C-137)"
// residents: (27) ["https://rickandmortyapi.com/api/character/38", "https://rickandmortyapi.com/api/character/45", "https://rickandmortyapi.com/api/character/71", "https://rickandmortyapi.com/api/character/82", "https://rickandmortyapi.com/api/character/83", "https://rickandmortyapi.com/api/character/92", "https://rickandmortyapi.com/api/character/112", "https://rickandmortyapi.com/api/character/114", "https://rickandmortyapi.com/api/character/116", "https://rickandmortyapi.com/api/character/117", "https://rickandmortyapi.com/api/character/120", "https://rickandmortyapi.com/api/character/127", "https://rickandmortyapi.com/api/character/155", "https://rickandmortyapi.com/api/character/169", "https://rickandmortyapi.com/api/character/175", "https://rickandmortyapi.com/api/character/179", "https://rickandmortyapi.com/api/character/186", "https://rickandmortyapi.com/api/character/201", "https://rickandmortyapi.com/api/character/216", "https://rickandmortyapi.com/api/character/239", "https://rickandmortyapi.com/api/character/271", "https://rickandmortyapi.com/api/character/302", "https://rickandmortyapi.com/api/character/303", "https://rickandmortyapi.com/api/character/338", "https://rickandmortyapi.com/api/character/343", "https://rickandmortyapi.com/api/character/356", "https://rickandmortyapi.com/api/character/394"]
// type: "Planet"
// url: "http

const Card = styled.div`
	border-radius: 42px;
	box-shadow: 1px 1px 6px 1px #020000, inset -3px -2px 20px 3px black;
	display: flex;
	flex-direction: column;
	padding: 20px;
	background-color: papayawhip;
`;
