import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import './DisplayBody.css';
import DrugHeader from './DrugHeader';

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
		paddingRight: 20
	}
}))

//TODO this file also needs to get the drug info

export default function DisplayBody(props) {
	const classes = useStyles();

	return (
		<div className={classes.displayContainer}>
			<DrugHeader />
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