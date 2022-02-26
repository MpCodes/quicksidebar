import React from 'react';

const AboutUs = React.lazy(() => import('../pages/AboutUs'));

const routes = [
	{ path: '/', exact: true, name: 'Home' },
	{ path: '/about-us', name: 'Login', component: <AboutUs /> },
];

export default routes;
