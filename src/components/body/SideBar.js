import { React, useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		width: 200,
		backgroundColor: '#e7e7e7',
		textAlign: 'center',
		paddingTop: 10,
		paddingBottom: 10,
	}
}));

export default function SideBar() {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<p>Overview</p>	
			<p>Effects</p>	
			<p>Uses</p>	
			<p>Reviews</p>
			<p>Posts</p>
		</div>	
		)		
}
