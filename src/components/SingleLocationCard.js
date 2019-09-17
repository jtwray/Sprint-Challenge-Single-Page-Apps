import React, {useState, useEffect} from 'react';
import {NavLink, Route} from 'react-router-dom';
import styled from 'styled-components';
import Axios from 'axios';

export default function SingleLocationCard(props) {
	const [location, setLocation] = useState({});
	console.log(props.match);
	const locationid = props.match.params.locationID;

	useEffect(
		() => {
			Axios.get(`https://rickandmortyapi.com/api/location/${locationid}`)
				.then(res => setLocation(res.data))
				.then(res => console.log(res))
				.catch(error => console.log(error));
		},
		[locationid,setLocation]
	);
	return (
		<div>
			<LCard>
				<h1> {location.name} </h1>

				<h4>dimension: {location.dimension} </h4>
				<h4>type: {location.type} </h4>
			</LCard>
		</div>
	);
}
const LCard = styled.div`
	border-radius: 42px;
	box-shadow: 1px 1px 6px 1px #020000, inset -3px -2px 20px 3px black;
	display: flex;
	flex-direction: column;
	padding: 20px;
	background-color: papayawhip;
`;
