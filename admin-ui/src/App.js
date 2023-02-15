import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { Route, Routes } from 'react-router-dom';

import 'react-pro-sidebar/dist/css/styles.css';

const TheLayout = React.lazy(() => import('./layout'));

function App() {
	const [theme, colorMode] = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<Routes>
						<Route path='*' name='Home' element={<TheLayout />} />
					</Routes>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
