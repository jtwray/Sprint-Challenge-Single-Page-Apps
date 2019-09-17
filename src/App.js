import React, {useState} from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';

export default function App() {
	const [characters, setCharacters] = useState([]);
	const [episodes, setEpisodes] = useState([]);
	const [locations, setLocations] = useState([]);
	return (
		<main>
			<Header />
			<TabNav
				characters={characters}
				setCharacters={setCharacters}
				episodes={episodes}
				setEpisodes={setEpisodes}
				locations={locations}
				setLocations={setLocations}
			/>
		</main>
	);
}
