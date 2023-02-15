import React from 'react';
import TheContent from './TheContent';
import TheHeader from './TheHeader';
import TheSidebar from './TheSidebar';
import { CircularProgress } from '@mui/material';

const loadingIndicator = <CircularProgress />;

const TheLayout = () => {
	return (
		<>
			<TheSidebar />
			<main className='content' style={{ overflow: 'auto' }}>
				{/* The Header */}
				<TheHeader />

				<React.Suspense fallback={loadingIndicator}>
					{/* The Content */}
					<TheContent />
				</React.Suspense>
			</main>
		</>
	);
};

export default TheLayout;
