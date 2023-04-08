import React from 'react'
import { Link } from 'react-router-dom';


const VideoItem = ({video, playVideo}) => {
	return (
		<li onClick={playVideo}>
			<Link to={'#'}>
				<h4>{video.snippet.title}</h4>
				<img
					src={video.snippet.thumbnails.default.url}
					alt={video.snippet.title}
				/>
				<p>{video.snippet.description}</p>
			</Link>
		</li>
	);
}

export default VideoItem