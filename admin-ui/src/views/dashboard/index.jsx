import { Box } from '@mui/material';
import React from 'react';
import ContentHeader from './../../components/ContentHeader';

const Dashboard = () => {
	return (
		<Box m={'20px'}>
			<Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
				<ContentHeader title={'DASHBOARD'} subtitle={'Welcome to dashboard'} />
			</Box>
		</Box>
	);
};

export default Dashboard;
