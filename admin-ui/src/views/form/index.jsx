import React from 'react';
import * as yup from 'yup';
import { Box, Button, useMediaQuery } from '@mui/material';
import { Formik } from 'formik';
import ContentHeader from '../../components/ContentHeader';
import FormDetails from './FormDetails';

const initialValue = {
	firstName: '',
	lastName: '',
	phone: '',
	email: '',
	address1: '',
	address2: '',
};

const phoneRegExp = /^(09|\+639)\d{9}$/;

const memberSchema = yup.object().shape({
	firstName: yup.string().required('First name is required.'),
	lastName: yup.string().required('Last name is required.'),
	phone: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('Phone number is required.'),
	email: yup.string().email('Invalid email address.').required('Email address is required.'),
	address1: yup.string().required('Address is required.'),
});
const Form = () => {
	const isNonMobile = useMediaQuery('(min-width:600px)');
	const handleSubmit = (values) => {
		console.log(values);
	};
	return (
		<Box m={'20px'}>
			<ContentHeader title={'CREATE MEMBER'} subtitle={'Add New Member to the Team'} />
			<Formik
				initialValues={initialValue}
				validationSchema={memberSchema}
				onSubmit={handleSubmit}
			>
				{({ values, handleBlur, handleChange, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<FormDetails
							values={values}
							handleBlur={handleBlur}
							handleChange={handleChange}
							isNonMobile={isNonMobile}
						/>

						<Box display={'flex'} justifyContent={'end'} mt={'20px'}>
							<Button type='submit' color='secondary' variant='contained'>
								Create New Member
							</Button>
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	);
};

export default Form;
