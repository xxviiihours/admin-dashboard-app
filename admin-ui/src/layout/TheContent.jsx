import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Dashboard = React.lazy(() => import('./../views/dashboard'));
const Team = React.lazy(() => import("./../views/team"));
const Contact = React.lazy(() => import("./../views/contact"));
const Invoice = React.lazy(() => import("./../views/invoice"));
const Form = React.lazy(() => import("./../views/form"));
// const Bar = React.lazy(() => import("./../views/bar"));
// const Pie = React.lazy(() => import("./../views/pie"));
// const Line = React.lazy(() => import("./../views/line"));
// const FAQ = React.lazy(() => import("./../views/faq"));
// const Geography = React.lazy(() => import("./../views/geography"));
// const Calendar = React.lazy(() => import("./../views/calendar"));

const TheContent = () => {
	return (
		<Routes>
			<Route path='/' element={<Dashboard />} />
			<Route path='/team' element={<Team />} />
			<Route path='/contacts' element={<Contact />} />
			<Route path='/invoices' element={<Invoice />} />
			<Route path='/create-member' element={<Form />} />
			{/* <Route path='/bar' element={<Bar />} /> */}
			{/* <Route path='/pie' element={<Pie />} /> */}
			{/* <Route path='/line' element={<Line />} /> */}
			{/* <Route path='/faq' element={<FAQ />} /> */}
			{/* <Route path='/geography' element={<Geography />} /> */}
			{/* <Route path='/calendar' element={<Calendar />} /> */}
		</Routes>
	);
};

export default TheContent;
