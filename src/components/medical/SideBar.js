import { React } from 'react';
import { 
	Accordion,
	VStack, 
	AccordionItem, 
	AccordionButton, 
	AccordionPanel,
	Box, } from '@chakra-ui/react';
import { AccordionIcon, ListItem, UnorderedList } from '@chakra-ui/react';
import PropTypes from 'prop-types';


SideBar.propTypes = {
	category: PropTypes.string,
	categories: PropTypes.array,
	setCategory: PropTypes.func
};

function SideBar(props) {
	const renderSideButton = (category) => {
		return (
			<Box fontSize='18px' sx={{
				'&:hover': {
					cursor: 'pointer',
				},
				textDecoration: props.category===category.name?'underline':'none',
				fontWeight: props.category===category.name?'bold':'normal',
				textDecorationColor: 'black',
				textDecorationThickness: '2px',
			}} onClick={(e) => handleSideButtonClick(e)}>{category.name}</Box>	
		);
	};

	const handleSideButtonClick = (e) => {
		props.setCategory(e.target.textContent);
	};

	return (
		<VStack align='false' mb='auto' w='150px' spacing='20px' bg='#e0e0e0' textAlign='left'
			overflowY='auto' padding='10px 10px 10px 30px' borderRadius='0px 20px 20px 0px'>
				{ props.categories.map((cat) => (renderSideButton(cat)))}
		</VStack>
	);		
}

export default SideBar;
