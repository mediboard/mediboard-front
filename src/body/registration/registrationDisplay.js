import { React, useState } from 'react';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import Banner from '../Banner';
import RegistrationForm from './registrationForm';


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'inline',
	}
}));

export default function RegistrationDisplay() {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Banner />
			<RegistrationForm />
		</div>
		)
}
