import React from 'react';
import SideBar from './SideBar';
import Contents from './Contents';
import TopHeader from './TopHeader';

const TheLayout = () => {
	return (
		<div>
			<SideBar />
			<div className='maincontent'>
				<TopHeader />
				<Contents />
			</div>
		</div>
	);
};

export default TheLayout;
