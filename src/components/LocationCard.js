import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LocationCard(props) {
  const { name, dimension, type } = props.location;
  console.log(`key=${name}`, { props });
  return (
    <div>
      <L>
        <h2>name:{name}</h2>
        <h3>dimension: {dimension} </h3>
        <h4>type: {type} </h4>

        <Link to={`/rickandmorty/locations/${props.location.id}`}>
          Location #{props.location.id}
        </Link>
        <img src={props.location.residents[0]} />
        {console.log("residents",props.location.residents[0])}
      </L>
    </div>
  );
}

const L = styled.div`
  border-radius: 12px;
  box-shadow: 1px 1px 6px 1px #020000, inset -3px -2px 20px 3px black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 3rem;
  font-size: 1rem;
  background-color: #f0f0ff;
  white-space: nowrap;
  min-width: 300px;
  width: max-content;
  border: groove darkgray 0.5rem;
  height: auto;
  margin: 10%;
`;
