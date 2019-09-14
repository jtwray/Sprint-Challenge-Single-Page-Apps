import React from 'react';

export default function CharacterCard(props) {
	return (
		<div>
			<h1> {props.character.name} </h1> <img src={props.character.image} alt={props.character.name}></img>
      <span> {props.character.status} </span> 
     
        <h4>gender: {props.character.gender} </h4>
			<h4>species: {props.character.species} </h4>  
		</div>
	);
}
