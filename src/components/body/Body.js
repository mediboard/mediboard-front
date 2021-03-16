// This is the router of the app
import { React, useState } from 'react';

import MedicalBody from './medical/MedicalBody';
import Header from '../header/Header';
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

export default function Body(props) {

	const [category, setCategory] = useState(undefined);

	return (
    <VStack w='100%' align='stretch'>
      <Header />
      <Banner />
      <HStack spacing={10}>
        <SideBar 
        	categories={categories}
        	category={category}
        	setCategory={setCategory}/>
        <MedicalBody {...props}/>
      </HStack>
    </VStack>
		)
}