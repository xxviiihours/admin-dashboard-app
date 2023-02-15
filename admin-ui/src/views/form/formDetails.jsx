import React from 'react';
import OInput from '../../components/OInput';
import { Field } from 'formik';
import { Box } from '@mui/material';

const FormDetails = ({ values, handleBlur, handleChange, isNonMobile }) => {
	return (
		<Box
			display={'grid'}
			gap={'30px'}
			gridTemplateColumns={'repeat(4, minmax(0, 1fr))'}
			sx={{ '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' } }}
		>
			{/* Row 1 */}
			<Field
				fullWidth
				variant={'filled'}
				type={'text'}
				label='First Name'
				name={'firstName'}
				onBlur={handleBlur}
				onChange={handleChange}
				value={values.firstName}
				sx={{ gridColumn: 'span 2' }}
				component={OInput}
			/>
			<Field
				fullWidth
				variant={'filled'}
				type={'text'}
				label='Last Name'
				name={'lastName'}
				onBlur={handleBlur}
				onChange={handleChange}
				value={values.lastName}
				sx={{ gridColumn: 'span 2' }}
				component={OInput}
			/>

			{/* Row 2 */}
			<Field
				fullWidth
				variant={'filled'}
				type={'text'}
				label='Phone Number'
				name={'phone'}
				onBlur={handleBlur}
				onChange={handleChange}
				value={values.phone}
				sx={{ gridColumn: 'span 2' }}
				component={OInput}
			/>
			<Field
				fullWidth
				variant={'filled'}
				type={'email'}
				label='Email Address'
				name={'email'}
				onBlur={handleBlur}
				onChange={handleChange}
				value={values.email}
				sx={{ gridColumn: 'span 2' }}
				component={OInput}
			/>

			{/* Row 3 */}
			<Field
				fullWidth
				variant={'filled'}
				type={'text'}
				label='Address Line 1'
				name={'address1'}
				onBlur={handleBlur}
				onChange={handleChange}
				value={values.address1}
				sx={{ gridColumn: 'span 4' }}
				component={OInput}
			/>
			<Field
				fullWidth
				variant={'filled'}
				type={'text'}
				label='Address Line 2'
				name={'address2'}
				onBlur={handleBlur}
				onChange={handleChange}
				value={values.address2}
				sx={{ gridColumn: 'span 4' }}
				component={OInput}
			/>
		</Box>
	);
};

export default FormDetails;
