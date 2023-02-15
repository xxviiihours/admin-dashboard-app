import React from 'react';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from './../../theme';
import ContentHeader from '../../components/ContentHeader';

import BarChart from './../../components/BarChart';
import LineChart from './../../components/LineChart';
import GeographyChart from './../../components/GeographyChart';
import StatusBox from './../../components/StatusBox';
import ProgressCircle from './../../components/ProgressCircle';

/* Icons */
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BugReportIcon from '@mui/icons-material/BugReport';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { currencyFormatter } from './../../helpers/utils';

import { mockTransactions } from '../../data/mockData';

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m={'20px'}>
			<Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
				<ContentHeader title={'DASHBOARD'} subtitle={'Welcome to dashboard'} />
				<Box>
					<Button
						sx={{
							backgroundColor: colors.blueAccent[700],
							color: colors.grey[100],
							fontSize: '14px',
							fontWeight: 'bold',
							padding: '10px 20px',
						}}
					>
						<DownloadOutlinedIcon sx={{ mr: '10px' }} />
						Download Reports
					</Button>
				</Box>
			</Box>

			{/* Base Content of the Dashboard */}
			<Box
				display={'grid'}
				gridTemplateColumns={'repeat(12, 1fr)'}
				gridAutoRows={'130px'}
				gap={'20px'}
			>
				{/* Row 1 */}
				<Box
					gridColumn={'span 3'}
					backgroundColor={colors.primary[400]}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}
				>
					<StatusBox
						title={'1092'}
						subtitle={'Fixed Issues'}
						progress={'0.75'}
						status={{ value: '+4%', isIncrease: true }}
						icon={
							<AssignmentTurnedInIcon
								sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn={'span 3'}
					backgroundColor={colors.primary[400]}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}
				>
					<StatusBox
						title={'10'}
						subtitle={'New Members'}
						progress={'0.75'}
						status={{ value: '+2%', isIncrease: true }}
						icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
					/>
				</Box>
				<Box
					gridColumn={'span 3'}
					backgroundColor={colors.primary[400]}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}
				>
					<StatusBox
						title={'32,000'}
						subtitle={'Sales Obtrained'}
						progress={'0.75'}
						status={{ value: '-45%', isIncrease: false }}
						icon={
							<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />
						}
					/>
				</Box>
				<Box
					gridColumn={'span 3'}
					backgroundColor={colors.primary[400]}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}
				>
					<StatusBox
						title={'320,200'}
						subtitle={'Bug Reported'}
						progress={'0.75'}
						status={{ value: '-4%', isIncrease: false }}
						icon={<BugReportIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
					/>
				</Box>

				{/* Row 2 */}
				<Box gridColumn={'span 8'} gridRow={'span 2'} backgroundColor={colors.primary[400]}>
					<Box
						mt={'25px'}
						p={'0 30px'}
						display={'flex'}
						justifyContent={'space-between'}
						alignItems={'center'}
					>
						<Box>
							<Typography variant='h5' fontWeight={'600'} color={colors.grey[100]}>
								Revenue Generated
							</Typography>
							<Typography variant='h3' fontWeight={'600'} color={colors.greenAccent[100]}>
								{currencyFormatter(500304)}
							</Typography>
						</Box>
						<Box>
							<IconButton>
								<DownloadOutlinedIcon
									sx={{ fontSize: '26px', color: colors.greenAccent[500] }}
								/>
							</IconButton>
						</Box>
					</Box>
					<Box height={'220px'}>
						<LineChart isDashboard={true} />
					</Box>
				</Box>
				<Box
					gridColumn={'span 4'}
					gridRow={'span 2'}
					backgroundColor={colors.primary[400]}
					overflow='auto'
				>
					<Box
						display='flex'
						justifyContent='space-between'
						alignItems='center'
						borderBottom={`2px solid ${colors.primary[500]}`}
						colors={colors.grey[100]}
						p='15px'
					>
						<Typography color={colors.grey[100]} variant='h5' fontWeight='600'>
							Recent Transactions
						</Typography>
					</Box>
					{mockTransactions.map((transaction, i) => (
						<Box
							key={`${transaction.txId}-${i}`}
							display='flex'
							justifyContent='space-between'
							alignItems='center'
							borderBottom={`2px solid ${colors.primary[500]}`}
							p='15px'
						>
							<Box>
								<Typography color={colors.greenAccent[500]} variant='h5' fontWeight='600'>
									{transaction.txId}
								</Typography>
								<Typography color={colors.grey[100]}>{transaction.user}</Typography>
							</Box>
							<Box color={colors.grey[100]}>{transaction.date}</Box>
							<Box backgroundColor={colors.greenAccent[500]} p='5px 10px' borderRadius='4px'>
								${transaction.cost}
							</Box>
						</Box>
					))}
				</Box>

				{/* Row 3 */}
				<Box
					gridColumn='span 4'
					gridRow='span 2'
					backgroundColor={colors.primary[400]}
					p='30px'
				>
					<Typography variant='h5' fontWeight='600'>
						Campaign
					</Typography>
					<Box display='flex' flexDirection='column' alignItems='center' mt='25px'>
						<ProgressCircle size='125' />
						<Typography variant='h5' color={colors.greenAccent[500]} sx={{ mt: '15px' }}>
							$48,352 revenue generated
						</Typography>
						<Typography>Includes extra misc expenditures and costs</Typography>
					</Box>
				</Box>
				<Box gridColumn='span 4' gridRow='span 2' backgroundColor={colors.primary[400]}>
					<Typography variant='h5' fontWeight='600' sx={{ padding: '30px 30px 0 30px' }}>
						Sales Quantity
					</Typography>
					<Box height='250px' mt='-20px'>
						<BarChart isDashboard={true} />
					</Box>
				</Box>
				<Box
					gridColumn='span 4'
					gridRow='span 2'
					backgroundColor={colors.primary[400]}
					padding='30px'
				>
					<Typography variant='h5' fontWeight='600' sx={{ marginBottom: '15px' }}>
						Geography Based Traffic
					</Typography>
					<Box height='200px'>
						<GeographyChart isDashboard={true} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
