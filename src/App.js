import React, { Suspense } from 'react';
import TheLayout from './components/TheLayout';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const loading = <div className='spinCenter'>{/* <Spin size='large' /> */}</div>;

function App() {
	return (
		<Router>
			<Suspense fallback={loading}>
				<Routes>
					<Route exact path='/login' element={<Login />} />
					<Route path='*' name='Home' element={<TheLayout />} />
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
