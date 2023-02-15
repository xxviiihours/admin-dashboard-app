import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import ContentHeader from '../../components/ContentHeader';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataInvoices } from '../../data/mockData';
import { currencyFormatter } from '../../helpers/utils';

const Invoice = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns = [
		{
			field: 'id',
			headerName: 'ID',
			flex: 0.5,
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			cellClassName: 'name-column--cell',
		},

		{
			field: 'phone',
			headerName: 'Phone Number',
			flex: 1,
		},
		{
			field: 'email',
			headerName: 'Email Address',
			flex: 1,
		},
		{
			field: 'cost',
			headerName: 'Cost',
			type: 'number',
			headerAlign: 'left',
			align: 'left',
			renderCell: ({ row: { cost } }) => (
				<Typography color={colors.greenAccent[500]}>
					{currencyFormatter(cost)}
				</Typography>
			),
		},
		{
			field: 'date',
			headerName: 'Date',
			flex: 1,
		},
	];
	return (
		<Box m={'20px'}>
			<ContentHeader title={'INVOICES'} subtitle={'List of Invoice Balances'} />
			<Box
				m={'40px 0 0 0'}
				height={'75vh'}
				sx={{
					'& .MuiDataGrid-root': { border: 'none' },
					'& .MuiDataGrid-cell': { borderBottom: 'none' },
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.blueAccent[700],
						borderBottom: 'none',
					},
					'& .name-column--cell': { color: colors.greenAccent[300] },
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: colors.primary[400],
					},
					'& .MuiDataGrid-footerContainer': {
						borderTop: 'none',
						backgroundColor: colors.blueAccent[700],
					},
					'& .MuiCheckbox-root': {
						color: `${colors.greenAccent[200]} !important`,
					},
				}}
			>
				<DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
			</Box>
		</Box>
	);
};

export default Invoice;
