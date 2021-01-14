import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import './DisplayBody.css'

const StyledButton = withStyles({
  root: {
    background: '#d44344',
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
	
}))

export default function DisplayBody(props) {
	return (
		<div className="displayWindow">
			<StyledButton
				variant="contained"
				size="small"
			> Show
			</StyledButton>
		</div>
	)
}