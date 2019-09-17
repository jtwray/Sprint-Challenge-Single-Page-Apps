import React from 'react';
import {Tab, Menu, Icon} from 'semantic-ui-react';
import {NavLink,Route,Switch} from 'react-router-dom';
import CharacterList from './CharacterList';
import EpisodeList from './EpisodeList';
import LocationList from './LocationList';
import CharacterCard from './CharacterCard';
import SingleCharacterCard from './SingleCharacterCard';
import SingleEpisodeCard from './SingleCharacterCard';
import EpisodeCard from './SingleCharacterCard';
import SingleLocationCard from './SingleCharacterCard';
import LocationCard from './SingleCharacterCard';

import WelcomePage from './WelcomePage';
import styled from 'styled-components';

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav({characters, setCharacters,locations,setLocations,episodes,setEpisodes}) {
   return (
       <>

            <NavMenu>
            
            <NavLink  to={`/rickandmorty/characters`}>Characters</NavLink>
            <NavLink  to={`/rickandmorty/locations`}>Location</NavLink>
            <NavLink  to={`/rickandmorty/episodes`}>Episode</NavLink>
            <NavLink  to={`/`}>Home</NavLink>

            </NavMenu>
          
          <Route  exact path="/rickandmorty/episodes/:episodeID" component={SingleEpisodeCard}/>
          <Route exact path="/rickandmorty/characters/:characterID" component={SingleCharacterCard}/>
          <Route  exact path="/rickandmorty/locations/:locationID" component={SingleLocationCard}/>
          
          

        
          <Route  exact path="/" component={WelcomePage}/>
          
          
          <Route exact path="/rickandmorty/characters/" render={ props => <CharacterList characters={characters} setCharacters={setCharacters} {...props} /> } />
          <Route exact path="/rickandmorty/locations/"  render={ props => <LocationList    locations={locations}   setLocations={setLocations} {...props} /> } />
          <Route exact path="/rickandmorty/episodes/"   render={ props => <EpisodeList       episodes={episodes}     setEpisodes={setEpisodes} {...props} /> } />
         
            
       </>
) 
};

const NavMenu = styled.nav`
	border-radius: 42px;
	box-shadow: 1px 1px 6px 1px #020000, inset -3px -2px 20px 3px black;
	display: flex;
    color:black;
    justify-content:space-evenly;
    font-size:2rem;
	padding: 20px;
	background-color: silver;
`;




