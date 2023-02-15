import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Dashboard = React.lazy(() => import('../views/Dashboard'));
const Team = React.lazy(() => import("../views/Team"));
const Contact = React.lazy(() => import("../views/Contact"));
const Invoice = React.lazy(() => import("../views/Invoice"));
const Form = React.lazy(() => import("../views/Form"));
const Calendar = React.lazy(() => import("../views/Calendar"));
const FAQ = React.lazy(() => import("../views/FAQ"));
const Bar = React.lazy(() => import("./../views/Bar"));
const Pie = React.lazy(() => import("./../views/Pie"));
const Line = React.lazy(() => import("./../views/Line"));
const Geography = React.lazy(() => import("./../views/Geography"));

const TheContent = () => {
	return (
		<Routes>
			<Route path='/' element={<Dashboard />} />
			<Route path='/team' element={<Team />} />
			<Route path='/contacts' element={<Contact />} />
			<Route path='/invoices' element={<Invoice />} />
			<Route path='/create-member' element={<Form />} />
			<Route path='/calendar' element={<Calendar />} />
			<Route path='/faq' element={<FAQ />} />
			<Route path='/bar' element={<Bar />} />
			<Route path='/pie' element={<Pie />} />
			<Route path='/line' element={<Line />} />
			<Route path='/geography' element={<Geography />} />
		</Routes>
	);
};

export default TheContent;
