import React from 'react';
import { CircularProgress, CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { Route, Routes } from 'react-router-dom';

import 'react-pro-sidebar/dist/css/styles.css';

const TheLayout = React.lazy(() => import('./layout'));

const loadingIndicator = <CircularProgress />;
function App() {
	const [theme, colorMode] = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<React.Suspense fallback={loadingIndicator}>
						<Routes>
							<Route path='*' name='Home' element={<TheLayout />} />
						</Routes>
					</React.Suspense>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
