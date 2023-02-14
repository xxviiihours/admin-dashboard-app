import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const _nav = [
	{
		title: 'Dashboard',
		url: '/',
		icon: <HomeOutlinedIcon />,
	},
	{
		header: 'Data',
		child: [
			{ title: 'Manage Team', url: '/team', icon: <PeopleOutlinedIcon /> },
			{ title: 'Contacts Information', url: '/contacts', icon: <ContactsOutlinedIcon /> },
			{ title: 'Invoices Balances', url: '/invoices', icon: <ReceiptOutlinedIcon /> },
		],
	},
	{
		header: 'Pages',
		child: [
			{ title: 'Profile Form', url: '/form', icon: <PersonOutlinedIcon /> },
			{ title: 'Calendar', url: '/calendar', icon: <CalendarTodayOutlinedIcon /> },
			{ title: 'FAQ Page', url: '/faq', icon: <HelpOutlinedIcon /> },
		],
	},
	{
		header: 'Chart',
		child: [
			{ title: 'Bar Chart', url: '/bar', icon: <BarChartOutlinedIcon /> },
			{ title: 'Pie Chart', url: '/pie', icon: <PieChartOutlinedIcon /> },
			{ title: 'Line Chart', url: '/line', icon: <TimelineOutlinedIcon /> },
			{ title: 'Geography Chart', url: '/geography', icon: <MapOutlinedIcon /> },
		],
	},

	// { title: 'Manage Team', url: '/team', icon: <PeopleOutlinedIcon /> },
	// { title: 'Contacts Information', url: '/contacts', icon: <ContactsOutlinedIcon /> },
	// { title: 'Invoices Balances', url: '/invoices', icon: <ReceiptOutlinedIcon /> },
	// { header: 'Pages' },
	// { title: 'Profile Form', url: '/form', icon: <PersonOutlinedIcon /> },
	// { title: 'Calendar', url: '/calendar', icon: <CalendarTodayOutlinedIcon /> },
	// { title: 'FAQ Page', url: '/faq', icon: <HelpOutlinedIcon /> },
	// { header: 'Charts' },
	// { title: 'Bar Chart', url: '/bar', icon: <BarChartOutlinedIcon /> },
	// { title: 'Pie Chart', url: '/pie', icon: <PieChartOutlinedIcon /> },
	// { title: 'Line Chart', url: '/line', icon: <TimelineOutlinedIcon /> },
	// { title: 'Geography Chart', url: '/geography', icon: <MapOutlinedIcon /> },
];

export default _nav;
