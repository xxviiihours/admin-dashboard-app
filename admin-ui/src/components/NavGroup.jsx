import React from 'react';
import { MenuItem } from 'react-pro-sidebar';
import { Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from './../theme';

function NavGroup({ child, header, selected, setSelected }) {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<>
			<Typography
				key={header}
				variant='h6'
				color={colors.grey[300]}
				sx={{ m: '5px 0 5px 20px' }}
			>
				{header}
			</Typography>
			{child.map((item, index) => (
				<MenuItem
					key={index}
					active={selected === item.title}
					style={{
						color: colors.grey[100],
					}}
					onClick={() => setSelected(item.title)}
					icon={item.icon}
				>
					<Typography>{item.title}</Typography>
					<Link to={item.url} />
				</MenuItem>
			))}
		</>
	);
}

export default NavGroup;
