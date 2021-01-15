import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';

import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

const useStyles = makeStyles((theme) => ({
	drugIcon: {
		float: 'left',
		width: 'auto',
	},
	drugHeader: {
		height: 'auto',
		width: '100%',
		backgroundColor: '#e3e3e3',
		textAlign: 'left',
	},
	drugInfo: {
		height: '100%',
		width: '10%', //Maybe this should be the size of the content instead
		display: 'inline-block',
		textAlign: 'left'
	},
	drugImage: {
		fontSize: "7em",
	},
	toolbar: {
		width: '100%',
		paddingLeft: 113
	},
	toolbarButton: {
		borderStyle: 'solid',
		borderWidth: 'thin',
		textAlign: 'center',
		width: 100,
		paddingTop: 10,
		paddingBottom: 10,
		"&:hover": {
			backgroundColor: '#afb1c9',
			cursor: 'pointer',
		},
	},
}))



export default function DrugHeader(props) { // The props is the drug info
	const classes = useStyles();

	const renderButton = (text) => {
		return (
			<div id={text} className={classes.toolbarButton} onClick={(e) => handleToolbarButtonClick(e)}>
				{text}
			</div>
		);
	};

	const handleToolbarButtonClick = (e) => {
		var mode = e.target.id;
		// TODO props.setMode(mode)
		e.target.style.backgroundColor = '#afb1c9' // This is eventually going to have to be moved to the sate
	}

	return (
		<div className={classes.drugHeader}>
			<div className={classes.drugIcon}>
				<AddPhotoAlternateIcon className={classes.drugImage}/>
			</div>
			<div className={classes.drugInfo}>
				<h3>Gabapentin</h3>
				<p>drug that you take that does nothing</p>
			</div>
			<div className={classes.toolbar}>
				{renderButton('Overview')}
			</div>
		</div>
		)
}