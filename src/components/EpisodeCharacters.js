import React from 'react';
import styled from 'styled-components';
import { Link} from 'react-router-dom';

export default function EpisodeCharacters({ characters, id}, props) {
	return (
		<Card>
			
				characters:{' '}
				{characters &&
					characters.map(char => (
						<h3>
							{' '}
							<Link to={`${char}`}>{char}</Link>
						</h3>
					))}{' '}
			
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




