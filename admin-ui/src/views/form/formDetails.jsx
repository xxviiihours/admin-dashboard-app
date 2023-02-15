import React from 'react';
import OInput from '../../components/OInput';
import { Field } from 'formik';
import { Box } from '@mui/material';
import { inputLabelFormat } from '../../helpers/utils';

const FormDetails = ({ values, handleBlur, handleChange, isNonMobile }) => {

	return (
		<Box
			display={'grid'}
			gap={'30px'}
			gridTemplateColumns={'repeat(4, minmax(0, 1fr))'}
			sx={{ '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' } }}
		>
			{Object.keys(values).map((key) => (
				<Field
					key={key}
					fullWidth
					variant={'filled'}
					type={'text'}
					label={inputLabelFormat(key)}
					name={key}
					hidden={key === 'address1' ? true : false}
					value={values[key]}
					onChange={handleChange}
					onBlur={handleBlur}
					sx={{ gridColumn: key.includes('address') ? 'span 4' : 'span 2' }}
					component={OInput}
				/>
			))}
		</Box>
	);
};

export default FormDetails;
