import React from 'react';
import PageTitle from './PageTitle';
import SearchBar from './SearchBar';

const Header = ({ pageName, fetchResults, searchResult, setSearchResult }) => {
	return (
		<div className='header'>
			<PageTitle pageName={pageName} />
			<SearchBar fetchResults={fetchResults} searchResult={searchResult} setSearchResult={setSearchResult}/>
		</div>
	);
};

export default Header;
