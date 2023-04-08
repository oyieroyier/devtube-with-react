import React from 'react';
import { RiVideoFill } from 'react-icons/ri';

const PageTitle = ({pageName}) => {
	
	return (
		<div className="page-title">
			<RiVideoFill />
			{pageName}
		</div>
	);
};

export default PageTitle;
