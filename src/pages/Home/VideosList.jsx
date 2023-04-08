import React from 'react';
import VideoItem from '../../components/VideoItem';

const VideosList = ({ videos, playVideo }) => {
	return (
		<ul>
			{videos &&
				videos.items.map((video) => (
					<VideoItem video={video} playVideo={playVideo} key={video.etag} />
				))}
		</ul>
	);
};

export default VideosList;
