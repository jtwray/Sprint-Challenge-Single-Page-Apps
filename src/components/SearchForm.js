import React, { useState } from "react";

export default function SearchForm({chars}) {
  // STRETCH TODO: Add stateful logic for query/form data
  const initialSearchValue=""
  const[search,setSearch]=useState(initialSearchValue)
  const onSearch=(event)=>{
    event.preventDefault();
   const onChange = (e) => {
      // const { suggestions } = this.props;
     
      const userInput = e.currentTarget.value;
  
      const filteredSuggestions = chars.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
  }}
  const handleInputChange=(event)=>{
    setSearch([event.target.name]=event.target.value)
    console.log(search)
}
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(search)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={search}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
      {}
    </section>
  );
}