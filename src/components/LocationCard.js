import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


export default function LocationCard(props){ 
	return (

	<div>
		<L>
		<h4>name:{props.location.name}</h4>
		<h4>dimension: {props.location.dimension} </h4>
		<h4>type: {props.location.type} </h4>
		<h4>props.location.id: {props.location.id} </h4>

		
		<Link  to={`/rickandmorty/locations/${props.location.id}`} 
		key={`${props.location.name}${props.location.id}`}
		>
			Location #{props.location.id}
		</Link>
		</L>				
		</div>
			
	);
}  


const L = styled.div`
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
	
    height: auto;
    margin: 1%;
    
    flex: 1 2 200px;

`;
