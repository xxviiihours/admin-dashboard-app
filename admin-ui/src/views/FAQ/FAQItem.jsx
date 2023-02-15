import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQItem = ({ question, answer, colors }) => {
	return (
		<Accordion defaultExpanded>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography color={colors.greenAccent[500]} variant='h5' />
				{question}
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{answer}</Typography>
			</AccordionDetails>
		</Accordion>
	);
};

export default FAQItem;
