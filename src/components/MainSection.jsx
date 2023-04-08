import React from 'react';
import VideosList from '../pages/Home/VideosList';

const MainSection = ({ videos, playVideo }) => {
	return (
		<main>
			<VideosList videos={videos} playVideo={playVideo}/>
		</main>
	);
};

export default MainSection;
