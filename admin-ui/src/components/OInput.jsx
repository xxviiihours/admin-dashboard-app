import { TextField } from '@mui/material';
import React from 'react';

const OInput = ({ field, form: { touched, errors }, ...props }) => {
	return (
		<TextField
      {...field}
			{...props}
			autoComplete='off'
			error={touched[field.name] && !!errors[field.name]}
			helperText={touched[field.name] && errors[field.name]}
		/>
	);
};

export default OInput;
