import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';

import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

const useStyles = makeStyles((theme) => ({
	drugIcon: {
		height: '100%',
		marginLeft: 20,
		float: 'left',
		width: '10%',
	},
	drugHeader: {
		height: 30,
		width: '100%',
		backgroundColor: 'grey',
	}
}))

export default function DrugHeader(props) { // The props is the drug info
	const classes = useStyles();

	return (
		<div className={classes.drugHeader}>
			<div className={classes.drugIcon}>
				<AddPhotoAlternateIcon />
			</div>
		</div>
		)
}