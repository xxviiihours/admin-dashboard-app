import React from 'react';
import { Box } from '@mui/material';
import ContentHeader from './../../components/ContentHeader';
import LineChart from './../../components/LineChart';

const Line = () => {
	return (
		<Box m={'20px'}>
			<ContentHeader title={'Line Chart'} subtitle={'Simple Line Chart'} />
      <Box height={"75vh"} >
        <LineChart />
      </Box>
		</Box>
	);
};

export default Line;
