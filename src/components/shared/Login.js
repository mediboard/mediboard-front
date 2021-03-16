import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Input,
	InputRightElement,
	InputGroup,
	FormControl,
	FormLabel,
	Button,
	Stack,
	Divider,
	HStack,
	Box,
	Text,
} from '@chakra-ui/react';

import AppButton from './Button';


export default function Login() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [show, setShow] = useState(false);
	const history = useHistory();

	const handleClick = () => setShow(!show);

	return (
		<Box>
			<AppButton bg="white" onClick={onOpen}>Log in</AppButton>
			<Modal size="sm" isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent borderRadius="20px" padding="1%">
					<ModalHeader>
						<HStack>
							<Box w="60%" h="10%">
								Sign In
							</Box>
						</HStack>
					</ModalHeader>
					<ModalCloseButton/>
					<ModalBody paddingBottom="2%">
						<FormControl id="email">
							<FormLabel>Email address</FormLabel>
							<Input type="email" />
						</FormControl>
						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<InputGroup size="md">
								<Input
									pr="4.5rem"
									type={show ? 'text' : 'password'}
									placeholder="Enter password"
								/>
								<InputRightElement width="4.5rem">
									<Button h="1.75rem" size="sm"  variant="ghost" onClick={handleClick}>
										{show ? 'Hide' : 'Show'}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
					</ModalBody>
					<Stack spacing="5%" pl="20%" pr="20%" alignItems="center">
						<Text as="u" fontSize="sm" onClick={onClose}>
							Forgot your password?
						</Text>
						<Button isFullWidth="true" borderRadius="100px" onClick={onClose} bg="#8186FF">
							Sign in
						</Button>
					</Stack>
					<ModalFooter>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
}