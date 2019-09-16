import React from 'react';
import {Tab, Menu, Icon} from 'semantic-ui-react';
import {NavLink,Route} from 'react-router-dom';
import CharacterList from './CharacterList';
import EpisodeList from './EpisodeList';
import LocationList from './LocationList';
import CharacterCard from './CharacterCard';
import SingleCharacterCard from './SingleCharacterCard';


// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav({characters, setCharacters,locations,setLocations,episodes,setEpisodes}) {
   return (
       <>
            <nav>
                <NavLink to={`/rickandmorty/characters`}>Characters</NavLink>
                <NavLink to={`/rickandmorty/locations`}>Location</NavLink>
                <NavLink to={`/rickandmorty/episodes`}>Episode</NavLink>
            </nav>
            
            <Route exact path="/rickandmorty/characters/:characterID" component={SingleCharacterCard}/>


            <Route exact path="/rickandmorty/characters/" render={ props => <CharacterList characters={characters} setCharacters={setCharacters} {...props} /> } />
            <Route path="/rickandmorty/locations/"  render={ props => <LocationList    locations={locations}   setLocations={setLocations} {...props} /> } />
            <Route path="/rickandmorty/episodes/"   render={ props => <EpisodeList       episodes={episodes}     setEpisodes={setEpisodes} {...props} /> } />
       </>
) 
};

{/**
    
<nav>
    <NavLink to={`/movies/${movie.id}/Metascore`}>MetaScore</NavLink>
    <NavLink to={`/movies/${movie.id}/Director` }>Director </NavLink>
    <NavLink to={`/movies/${movie.id}/Starring` }>Starring </NavLink>
</nav> 
    <Route path="/movies/:movieID/Director"  render={props => <Director  movie={movie} {...props} />} />
    <Route path="/movies/:movieID/Metascore" render={props => <MetaScore movie={movie} {...props} />} />
    <Route path="/movies/:movieID/Starring"  render={props => <Stars     movie={movie} {...props} />} />
</div> */}