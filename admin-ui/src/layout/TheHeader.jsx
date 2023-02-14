import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import React, { useContext } from 'react';

import { tokens, ColorModeContext } from '../theme';

import SearchIcon from '@mui/icons-material/Search';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const TheHeader = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	return (
		<Box display={'flex'} justifyContent={'space-between'} p={2}>
			{/* Search Section */}
			<Box display={'flex'} bgcolor={colors.primary[400]} borderRadius={'3px'}>
				<InputBase sx={{ ml: 2, flex: 1 }} placeholder={'Search here'} />
				<IconButton type='button' sx={{ p: 1 }}>
					<SearchIcon />
				</IconButton>
			</Box>

			{/* ICONS */}
			<Box display={'flex'}>
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === 'light' ? (
						<LightModeOutlinedIcon />
					) : (
						<DarkModeOutlinedIcon />
					)}
				</IconButton>
				<IconButton>
					<NotificationsOutlinedIcon />
				</IconButton>
				<IconButton>
					<SettingsOutlinedIcon />
				</IconButton>
				<IconButton>
					<PersonOutlinedIcon />
				</IconButton>
			</Box>
		</Box>
	);
};

export default TheHeader;
