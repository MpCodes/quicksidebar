import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled.div`
	&&& {
		display: flex;
		color: #e1e9fc;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		list-style: none;
		height: 10px;
		text-decoration: none;
		font-size: 14px;

		&:hover {
			background: #252831;
			border-left: 4px solid #0079c1;
			cursor: pointer;
		}
	}
`;

const SingleMenu = styled(Link)`
	&&& {
		display: flex;
		color: #e1e9fc;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		list-style: none;
		height: 10px;
		text-decoration: none;
		font-size: 14px;

		&:hover {
			background: #252831;
			border-left: 4px solid #0079c1;
			cursor: pointer;
		}
	}
`;

const SidebarLabel = styled.span`
	&&& {
		margin-left: 16px;
	}
`;

const DropdownLink = styled(Link)`
	&&& {
		background: #252831;
		height: 40px;
		padding-left: 3rem;
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #f5f5f5;
		font-size: 14px;

		&:hover {
			background: #0079c1;
			cursor: pointer;
		}
	}
`;

const SubMenu = ({ item }) => {
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	let menudiv;

	if (item.subNav) {
		menudiv = (
			<SidebarLink onClick={item.subNav && showSubnav}>
				<div>
					{item.icon}
					<SidebarLabel>{item.title}</SidebarLabel>
				</div>
				<div>
					{item.subNav && subnav
						? item.iconOpened
						: item.subNav
						? item.iconClosed
						: null}
				</div>
			</SidebarLink>
		);
	} else {
		menudiv = (
			<SingleMenu to={item.path}>
				<div>
					{item.icon}
					<SidebarLabel>{item.title}</SidebarLabel>
				</div>
			</SingleMenu>
		);
	}

	return (
		<>
			{menudiv}
			{subnav &&
				item.subNav.map((item, index) => {
					return (
						<DropdownLink to={item.path} key={index}>
							{item.icon}
							<SidebarLabel>{item.title}</SidebarLabel>
						</DropdownLink>
					);
				})}
		</>
	);
};

export default SubMenu;
