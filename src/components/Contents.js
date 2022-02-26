import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// routes config
import routes from './routes';

const loading = <div className='spinCenter'>{/* <Spin size='large' /> */}</div>;

const Contents = () => {
	const content = {
		padding: '1px 16px',
		height: '1000px',
		marginTop: '40px',
	};

	return (
		<div style={content}>
			<Suspense fallback={loading}>
				<Routes>
					{routes.map((route, idx) => {
						return (
							<Route
								key={idx}
								path={route.path}
								exact={route.exact}
								name={route.name}
								element={route.component}
							/>
						);
					})}
					{/* <Redirect from='/' to='/dashboard' /> */}
				</Routes>
			</Suspense>
		</div>
	);
};

export default Contents;
