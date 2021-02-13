// This is the router of the app
import { React } from 'react';

import MedicalBody from './medical/MedicalBody';
import Header from '../header/Header';
import SideBar from './SideBar';
import { Box, VStack, HStack } from '@chakra-ui/react';


export default function Body(props) {
	return (
    <VStack w='100%' align='stretch'>
      <Header />
      <HStack spacing={10}>
        <SideBar />
        <MedicalBody {...props}/>
      </HStack>
    </VStack>
		)
}