// The shared banner displayed on almost all pages
import { React, useState } from 'react';
import { 
	Flex, 
	Box,
	Text,
	VStack,
	Spacer,
	Heading } from '@chakra-ui/react';
import Button from '../shared/Button';


export default function Banner(props) {

	return (
		<Flex p='10px 20px 10px 20px' bg='#e0e0e0'>
			<Box bg='#afb1c9' w='100px' h='100px' mr='20px'/>
			<VStack align='false'>
				<Heading size='lg' mb='10px'>
					header
				</Heading>
				<VStack align='false' textAlign='left' spacing='0px'>
					<Text>brand name</Text>
					<Text>Manufactorer</Text>
				</VStack>
			</VStack>
			<Spacer />
			<Box mt='auto' mb='auto'>
				<Button>Review Treatment</Button>
			</Box>
		</Flex>
	);
}
