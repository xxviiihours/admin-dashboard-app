import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';

import navigation from './_nav';

/* Import outlined icons */
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NavItem from '../components/NavItem';
import NavGroup from '../components/NavGroup';

const TheSidebar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState('Dashboard');

	return (
		<Box
			sx={{
				'& .pro-sidebar-inner': {
					background: `${colors.primary[400]} !important`,
				},
				'& .pro-icon-wrapper': {
					backgroundColor: 'transparent !important',
				},
				'& .pro-inner-item': {
					padding: '5px 35px 5px 20px !important',
				},
				'& .pro-inner-item:hover': {
					color: '#868dfb !important',
				},
				'& .pro-menu-item.active': {
					color: '#6870fa !important',
				},
			}}
		>
			<ProSidebar collapsed={isCollapsed}>
				<Menu iconShape='square'>
					{/* Sidebar header */}
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : null}
						style={{ margin: '10px 0 20px 0', color: colors.grey[100] }}
					>
						{!isCollapsed && (
							<Box display='flex' justifyContent='space-between' alignItems='center' ml='15px'>
								<Typography variant='h3' color={colors.grey[100]}>
									ADMIN PORTAL
								</Typography>
								<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>

					{/* User info */}
					{!isCollapsed && (
						<Box mb='25px'>
							<Box display='flex' justifyContent='center' alignContent='center'>
								{/* Add logo here */}
							</Box>

							<Box textAlign='center'>
								<Typography
									variant='h2'
									color={colors.grey[100]}
									fontWeight='bold'
									sx={{ m: '10px 0 0 0' }}
								>
									Kivan Snape
								</Typography>
								<Typography variant='h5' color={colors.greenAccent[500]}>
									Super Admin
								</Typography>
							</Box>
						</Box>
					)}

					{/* Navigation Menu */}
					<Box paddingLeft={isCollapsed ? null : '10%'}>
						{navigation.map((item, index) => (
							<div key={index}>
								{!item.header && (!item.child || item.child.length === 0) ? (
									<div key={index}>
										<NavItem
											idx={index}
											title={item.title}
											to={item.url}
											icon={item.icon}
											selected={selected}
											setSelected={setSelected}
										/>
									</div>
								) : null}
								{item.child && item.child.length > 0 ? (
									<NavGroup
										child={item.child}
										header={item.header}
										selected={selected}
										setSelected={setSelected}
									/>
								) : null}
							</div>
						))}
					</Box>
				</Menu>
			</ProSidebar>
		</Box>
	);
};

export default TheSidebar;
