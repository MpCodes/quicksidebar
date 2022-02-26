import React from 'react';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const SideBar = () => {
	const maintop = {
		backgroundColor: '#0079c1',
		position: 'fixed',
		top: 0,
		width: '200px',
		height: '50px',
		color: '#ffffff',
		zIndex: 1000,
		padding: '15px',
		boxSizing: 'border-box',
	};

	const dropmenu = {
		marginTop: '30px',
	};

	return (
		<>
			<div className='sidebar'>
				<div style={maintop}>SMIS</div>
				<div style={dropmenu}>
					{SidebarData.map((item, index) => {
						return <SubMenu item={item} key={index} />;
					})}
				</div>
			</div>
		</>
	);
};

export default SideBar;
