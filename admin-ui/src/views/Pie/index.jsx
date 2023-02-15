import React from 'react';
import { Box } from '@mui/material';
import ContentHeader from './../../components/ContentHeader';
import PieChart from '../../components/PieChart';

const Pie = () => {
	return (
		<Box m={'20px'}>
			<ContentHeader title={'PIE CHART'} subtitle={'Simple Pie Chart'} />
			<Box height={'75vh'}>
				<PieChart />
			</Box>
		</Box>
	);
};

export default Pie;
