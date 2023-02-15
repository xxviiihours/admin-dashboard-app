import { Box } from '@mui/system';
import React from 'react';
import BarChart from '../../components/BarChart';
import ContentHeader from './../../components/ContentHeader';

const Bar = () => {
	return (
		<Box m={'20px'}>
			<ContentHeader title={'BAR CHART'} subtitle={'Simple Bar Chart'} />
			<Box height={'75vh'}>
				<BarChart />
			</Box>
		</Box>
	);
};

export default Bar;
