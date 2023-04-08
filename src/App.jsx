// import { useState } from 'react'
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import MainSection from './components/MainSection';

function App() {
	const pageName = 'DevTube';
	const apiKey = 'AIzaSyAeEknscJNtuNE1OHys1LJ8lgiLDoMuURQ';

	const [searchResult, setSearchResult] = useState('');
	const [videos, setVideos] = useState('');

	const fetchResults = (e) => {
		e.preventDefault();

		fetch(
			`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=2&q=${searchResult}`
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setVideos(data);
				setSearchResult('');
			});
	};

	const playVideo = () => {};

	return (
		<div className="App">
			<Router>
				<Header
					pageName={pageName}
					fetchResults={fetchResults}
					searchResult={searchResult}
					setSearchResult={setSearchResult}
				/>
				<MainSection videos={videos} playVideo={playVideo} />
			</Router>
		</div>
	);
}

export default App;
