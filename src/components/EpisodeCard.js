import React from "react";

export default function EpisodeCard({ name, type, dimension, residents }) {
 	return (
		<div>
			<h1> {name} </h1> 
      <span> {type} </span> 
     
        <h4>gender: {dimension} </h4>
			<h4>species: {residents} </h4>  
		</div>
	);
}
