import React from 'react';
import TheContent from './TheContent';
import TheHeader from './TheHeader';
import TheSidebar from './TheSidebar';

const TheLayout = () => {
	return (
		<>
			<TheSidebar />
			<main className='content'>
				{/* The Header */}
				<TheHeader />
				{/* The Content */}
				<TheContent />
			</main>
		</>
	);
};

export default TheLayout;
