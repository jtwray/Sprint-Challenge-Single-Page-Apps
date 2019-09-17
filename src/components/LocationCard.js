import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';
import SingleLocationCard from './SingleLocationCard';

export default function LocationCard({name, type, dimension},props){ 







console.log(`key=${name}`)

	return (
		<div>
		<L>
		<h4>name:{name}</h4>
		<h4>dimension: {dimension} </h4>
		<h4>type: {type} </h4>
		
		
		<Link  to={`/rickandmorty/locations/${props.id}`} >Location #{props.id}</Link>
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
