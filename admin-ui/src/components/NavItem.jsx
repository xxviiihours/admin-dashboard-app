import React from 'react';
import { useTheme, Typography } from '@mui/material';
import { tokens } from '../theme';
import { MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const NavItem = ({ idx, title, to, icon, selected, setSelected }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<MenuItem
			key={idx}
			active={selected === title}
			style={{
				color: colors.grey[100],
			}}
			onClick={() => setSelected(title)}
			icon={icon}
		>
			<Typography>{title}</Typography>
			<Link to={to} />
		</MenuItem>
	);
};

export default NavItem;
