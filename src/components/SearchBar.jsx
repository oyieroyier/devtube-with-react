import React from 'react';

const SearchBar = ({ fetchResults, searchResult, setSearchResult }) => {
	const label = 'Search';

	return (
		<div className="search">
			<form method="get" onSubmit={fetchResults}>
				<label>{label}</label>
				<input
					type="text"
					placeholder={label}
					value={searchResult}
					onChange={(e) => setSearchResult(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
