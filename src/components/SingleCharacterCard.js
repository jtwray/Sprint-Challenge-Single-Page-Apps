import React,{useState,useEffect} from 'react';
import {NavLink, Route} from 'react-router-dom';
import styled from 'styled-components';
import Axios from 'axios';

export default function SingleCharacterCard(props) {
    const[card,setCard]=useState({});
	console.log(props.match);
	
    useEffect(()=>{
            const id= props.match.params.characterID;
			Axios.get(`https://rickandmortyapi.com/api/character/${id}`)
			.then(res=>setCard(res.data))
				.then(res=>console.log(res))
			.catch(error => console.log(error))
        },[props.match.params.characterID])
	return (
		<div>{card.name}
		<Card>
			<h1> {card.name} </h1> <img src={card.image} alt={card.name} />
			<span> {card.status} </span>
			<h4>gender: {card.gender} </h4>
			<h4>species: {card.species} </h4>
		</Card></div>
	)
}
const Card = styled.div`
	border-radius: 42px;
	box-shadow: 1px 1px 6px 1px #020000, inset -3px -2px 20px 3px black;
	display: flex;
	flex-direction: column;
	padding: 20px;
	background-color: papayawhip;
`;
{/**useEffect(() => {
  Axios.get(`https://rick-api.herokuapp.com/api/character/${id}`)
  .then(res => {
    console.log(res.data)
    charsApiResponse.current=res.data.result;
				setCharacter(charsApiResponse.current);
				console.log(`charsApiResponse.current:${res.data.results}`);
			})
			.catch(error => {
				console.log(error);
			});

		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
	}, []);*/}



	{/** */}