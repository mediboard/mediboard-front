import { React, useState } from 'react';

import drugsHttpClient from '../../../services/clientapis/DrugsHttpClient';
import DrugOverview from './treatments/DrugOverview';
import SideBar from '../SideBar';
import { HStack, Box, Heading } from '@chakra-ui/react';

// const useStyles = makeStyles((theme) => ({
// 	displayContainer: {
// 		display: 'block',
// 		paddingLeft: 20,
// 		paddingRight: 20,
// 	},
// 	drugIcon: {
// 		float: 'left',
// 		width: 'auto',
// 	},
// 	drugHeader: {
// 		height: 'auto',
// 		width: '100%',
// 		backgroundColor: '#e3e3e3',
// 		textAlign: 'left',
// 	},
// 	drugInfo: {
// 		height: '100%',
// 		width: '15%', //Maybe this should be the size of the content instead
// 		display: 'inline-block',
// 		textAlign: 'left'
// 	},
// 	drugWindow: {
// 		padding: 10,
// 		borderStyle: 'solid',
// 		borderWidth: 'thin',
// 		backgroundColor: '#e3e3e3',
// 		float: 'right',
// 	},
// 	displayWindow: {
// 		marginTop: 30,
// 	},
// 	drugImage: {
// 		fontSize: "7em",
// 	},
// 	toolbar: {
// 		width: '100%',
// 		paddingLeft: 113
// 	},
// 	toolbarButton: {
// 		borderStyle: 'solid',
// 		borderWidth: 'thin',
// 		textAlign: 'center',
// 		width: 100,
// 		paddingTop: 10,
// 		paddingBottom: 10,
// 		"&:hover": {
// 			backgroundColor: '#afb1c9',
// 			cursor: 'pointer',
// 		},
// 	},
// }))

//TODO this file also needs to get the drug info

export default function MedicalBody(props) {
	// const [state, setState] = useState({ // All we need is the mode here 
	// 	mode: 'Overview',
	// 	effectsData: {}
	// });

	// const renderHeaderButton = (text) => {
	// 	return (
	// 		<div id={text} className={classes.toolbarButton} onClick={(e) => handleToolbarButtonClick(e)} 
	// 		style={{backgroundColor: state.mode === text ? '#7882ff' : '#e3e3e3'}}>
	// 			{text}
	// 		</div>
	// 	);
	// };

	// const handleToolbarButtonClick = (e) => {
	// 	var mode = e.target.id;
	// 	setState(prevState => ({
	// 		...prevState,
	// 		mode: mode
	// 	}));
	// 	// TODO props.setMode(mode)
	// 	e.target.style.backgroundColor = '#7882ff'; // This is eventually going to have to be moved to the sate
	// }

	return (
		<Box>
		  <HStack float='left' >
		  	<Heading float='left'>Hello World!</Heading>
		  </HStack>	
		</Box>	
	)
}