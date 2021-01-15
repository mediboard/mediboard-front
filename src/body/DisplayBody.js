import { React, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

import './DisplayBody.css';

const StyledButton = withStyles({
  root: {
    background: '#e3e3e3',
    borderRadius: 4,
    border: 0,
    color: 'white',
    height: 40,
    width: 100,
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const useStyles = makeStyles((theme) => ({
	displayContainer: {
		display: 'block',
		paddingLeft: 20,
		paddingRight: 20,
	},
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

//TODO this file also needs to get the drug info

export default function DisplayBody(props) {
	const classes = useStyles();

	const [state, setState] = useState({
		mode: 'Overview'
	})

	const renderHeaderButton = (text) => {
		return (
			<div id={text} className={classes.toolbarButton} onClick={(e) => handleToolbarButtonClick(e)} 
			style={{backgroundColor: state.mode === text ? '#7882ff' : '#e3e3e3'}}>
				{text}
			</div>
		);
	};

	const handleToolbarButtonClick = (e) => {
		var mode = e.target.id;
		setState(prevState => ({
			...prevState,
			mode: mode
		}));
		// TODO props.setMode(mode)
		e.target.style.backgroundColor = '#7882ff'; // This is eventually going to have to be moved to the sate
	}

	return (
		<div className={classes.displayContainer}>
			<div className={classes.drugHeader}>
				<div className={classes.drugIcon}>
					<AddPhotoAlternateIcon className={classes.drugImage}/>
				</div>
				<div className={classes.drugInfo}>
					<h3>Gabapentin</h3>
					<p>drug that you take that does nothing</p>
				</div>
				<div className={classes.toolbar}>
					{renderHeaderButton('Overview')}
				</div>
			</div>
			<div className="displayWindow">
				<StyledButton
					variant="contained"
					size="small"
				> Show
				</StyledButton>
			</div>
		</div>
	)
}