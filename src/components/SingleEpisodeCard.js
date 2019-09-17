import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Axios from 'axios';

export default function SingleEpisodeCard(props) {
	const [RMepisode, setRMEpisode] = useState({});
	console.log(props.match);

	const episodeid = props.match.params.episodeID;
	useEffect(
		() => {
			Axios.get(`https://rick-api.herokuapp.com/api/episode/${episodeid}`)
				.then(res => setRMEpisode(res.data))
				.then(res => console.log(res))
				.catch(error => console.log(error));
		},
		[episodeid, setRMEpisode]
	);
	return (
		<div>
			<ECard>
				<h2> {RMepisode.name} </h2>
				<div>episode: {RMepisode.episode} </div>
				<div>created: {RMepisode.created} </div>
			</ECard>
		</div>
	);
}
const ECard = styled.div`
	border-radius: 42px;
	box-shadow: 1px 1px 6px 1px #020000, inset -3px -2px 20px 3px black;
	display: flex;
	flex-direction: column;
	padding: 20px;
	background-color: whitesmoke;
`;
