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
			<AccordionItem w='100%'>
				<h2>
					<AccordionButton padding='0'>
						<Box flex="1" textAlign="left" >
							{category.name}
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
					<UnorderedList>
						{category.subCategories.map((subCat) => (renderSideOption(subCat)))}
					</UnorderedList>
				</AccordionPanel> 
			</AccordionItem>
		);
	};

	const renderSideOption = (subCat) => {
		return (
			<ListItem sx={{
				'&:hover': {
					cursor: 'pointer',
				},
				textDecoration: props.category===subCat.name?'underline':'none',
				fontWeight: props.category===subCat.name?'bold':'normal',
				textDecorationColor: 'black',
				textDecorationThickness: '2px',
			}} onClick={(e) => handleSideButtonClick(e)}>{subCat.name}</ListItem>
		);
	};

	const handleSideButtonClick = (e) => {
		props.setCategory(e.target.textContent);
	};

	return (
		<VStack mb='auto' w='200px' bg='#e0e0e0' overflowY='auto' padding='10px 10px 10px 20px' borderRadius='0px 20px 20px 0px'>
			<Accordion allowMultiple defaultIndex={[0]} w='100%'>
				{ props.categories.map((cat) => (renderSideButton(cat)))}
			</Accordion>
		</VStack>
	);		
}

export default SideBar;
