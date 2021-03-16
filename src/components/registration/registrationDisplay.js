import { React, useState } from 'react';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import Banner from '../Banner';
import RegistrationForm from './registrationForm';
import Header from '../../header/Header';


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'inline',
	}
}));

export default function RegistrationDisplay() {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Header />
			<RegistrationForm />
		</div>
		)
}
