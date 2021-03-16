// This is the router of the app
import { React, useState } from 'react';

import Header from '../shared/Header';
import SideBar from './SideBar';
import { Box, VStack, HStack } from '@chakra-ui/react';
import Banner from './Banner'

const categories = [
	{
		name: 'Biomass',
		subCategories: [
			{ name: 'Wheat' },
			{ name: 'Beans' },
		]
	},
	{
		name: 'Spores',
		subCategories: [
			{ name: 'Maitake' },
			{ name: 'Penis Envy' },
		]
	},
];

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

	const [category, setCategory] = useState(undefined);

	return (
    <VStack w='100%' align='stretch'>
      <Banner />
      <HStack spacing={10}>
        <SideBar 
        	categories={categories}
        	category={category}
        	setCategory={setCategory}/>
      </HStack>
    </VStack>
	);
}