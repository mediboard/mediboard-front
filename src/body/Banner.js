// The shared banner displayed on almost all pages
import { React, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		marginTop: 10,
		marginBotom: 10,
		paddingTop: 10,
		paddingBottom: 10,
		background: '#e7e7e7',
	},
}))

export default function Banner() {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<h2>
				header
			</h2>	
		</div>
		);
}
