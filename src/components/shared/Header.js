import { React, useState } from 'react';

import { Spacer, VStack, HStack, Box, Heading, Input, Text, Flex } from "@chakra-ui/react";
import { useStyleConfig } from "@chakra-ui/react";
import Button from "../shared/Button";
import { useHistory } from 'react-router-dom';
import Login from './Login';


export default function Header() {
  const history = useHistory();
  const [mode, setMode] = useState({
    mode: 'Home',
  });

  const rgbaSelected = 'rgba(129, 133, 255, 1)';
  const rgbaHover = 'rgba(129, 133, 255, .5)';

  const navNameToRoute = {
    Home: '/',
    Treatments: '/medical'
  }

  const renderNavButton = (text) => {
    return (
      <Text id={text} fontSize='xl' sx={{
        "&:hover": {
          cursor: 'pointer',
          borderBottom: (mode.mode === text)?'5px solid '+rgbaSelected:'5px solid '+rgbaHover,
        },
        borderBottom: (mode.mode === text)?'5px solid '+rgbaSelected:'',
      }} onClick={(e) => handleNavClick(e)}>{text}</Text>
    );
  };

  const handleNavClick = (e) => {
    setMode({mode: e.target.textContent});
    history.push(navNameToRoute[e.target.id]);
  };

  return (
    <VStack mb='20px' align='false' pl='20px' pr='20px' w='100%'>
      <Flex mb='1' mt='5'>
        <Heading as='h2' size='2xl' >The Medical Board</Heading>
        <Input placeholder='search' w='300px' h='auto' ml='5' sx={{'borderRadius':35}}/>
        <Spacer />
        <HStack float='right' textAlign='right' justifyContent='right' pl='auto'>
          <Login />
          <Button size="md" variant="black" mt='3'>Register</Button>
        </HStack>
      </Flex>
      <HStack float='left' ml='10' spacing="30px">
        {renderNavButton('Home')}
        {renderNavButton('Treatments')}
      </HStack>
    </VStack>
  );
}
 