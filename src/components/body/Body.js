// This is the router of the app
import { React } from 'react';

import MedicalBody from './medical/MedicalBody';
import Header from '../header/Header';
import { Box, VStack } from '@chakra-ui/react';


export default function Body(props) {
	return (
    <VStack w='100%'>
      <Header />
  		<MedicalBody {...props}/>
    </VStack>
		)
}