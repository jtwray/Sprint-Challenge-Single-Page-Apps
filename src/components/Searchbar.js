import React, {useRef, useState, useEffect} from 'React';
import {Form, FormButton, FormInput, Label} from 'semantic-ui-react';
import SearchForm from './SearchForm';

export default function Searchbar() {
	const initialValue = '';
	const [searchterm, setSearchTerm] = useState(initialValue);

	const handleSubmit = event => {
		event.preventDefault();
		console.log(event);
		setSearchTerm(initialValue);
	};

	const handleChange = event => {
		setSearchTerm(([event.target.name] = event.target.value));
		console.log(searchterm);
	};

	return (
		<div>
			<Form
				onSubmit={event => {
					handleSubmit(event);
				}}
			>
				<Label>
					SearchBar:
					<FormInput
						type="text"
						name={'search' || ''}
						value={searchterm || ' '}
						onChange={event => {
							handleChange(event);
						}}
					/>
				</Label>
				<FormButton>SEarcH🔍</FormButton>
			</Form>
		</div>
	);
}
