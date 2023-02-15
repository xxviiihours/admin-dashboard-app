import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import ContentHeader from '../../components/ContentHeader';

const Calendar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [currentEvents, setCurrentEvents] = useState([]);

	const handleDateClick = (selected) => {
		// Addd Modal Prompt Here.
		const title = prompt('Please enter a new title for your event.');
		const calendarApi = selected.view.calendar;
		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay,
			});
		}
	};

	const handleEventClick = (selected) => {
		//Add Modal Prompt Here.
		if (window.confirm(`Are you sure you want to delete the event ${selected.event.title}`)) {
			selected.event.remove();
		}
	};
	return (
		<Box m={'20px'}>
			<ContentHeader title={'CALENDAR'} subtitle={'Full Calendar Interactive Page'} />
			<Box display={'flex'} justifyContent={'space-between'}>
				{/* Main Calendar Content */}
				<Box flex={'1 1 100%'} ml={'15px'}>
					<FullCalendar
						height={'75vh'}
						plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
						headerToolbar={{
							left: 'prev,next today',
							center: 'title',
							right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
						}}
						initialView={'dayGridMonth'}
						editable={true}
						selectable={true}
						selectMirror={true}
						dayMaxEvents={true}
						select={handleDateClick}
						eventClick={handleEventClick}
						eventsSet={(events) => setCurrentEvents(events)}
						initialEvents={[
							{ id: '1232', title: 'Valentine`s day', date: '2023-02-14' },

							{
								id: '4232',
								title: 'EDSA People`s Power Revolution Anniversay',
								date: '2023-02-25',
							},
						]}
					/>
				</Box>
        {/* Calendar Sidebar */}
				<Box flex={'1 1 20%'} backgroundColor={colors.primary[400]} p={'15px'} m={'0 0 0 15px'} border={'4px'}>
					<Typography variant='h5'>Events</Typography>
					<List> 
						{currentEvents.map((eventItem) => (
							<ListItem
								key={eventItem.id}
								sx={{
									backgroundColor: colors.greenAccent[500],
									margin: '10px 0',
									borderRadius: '2px',
								}}
							>
								<ListItemText
									primary={eventItem.title}
									secondary={
										<Typography>
											{formatDate(eventItem.start, {
												year: 'numeric',
												month: 'short',
												day: 'numeric',
											})}
										</Typography>
									}
								/>
							</ListItem>
						))}
					</List>
				</Box>

			</Box>
		</Box>
	);
};

export default Calendar;
