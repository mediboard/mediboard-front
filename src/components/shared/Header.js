import { React, useState } from 'react';

import { VStack, HStack, Box, Heading, Input, Text } from "@chakra-ui/react";
import { useStyleConfig } from "@chakra-ui/react";
import Button from "../shared/Button";

// TODO center buttons with chakra center
export default function Header() {
  const [mode, setMode] = useState({
    mode: 'Home',
  });

  const rgbaSelected = 'rgba(69, 171, 93, 1)';
  const rgbaHover = 'rgba(69, 171, 93, .5)';

  const renderNavButton = (text) => {
    return (
      <Text fontSize='xl' sx={{
        "&:hover": {
          cursor: 'pointer',
          borderBottom: (mode.mode === text)?'5px solid '+rgbaSelected:'5px solid '+rgbaHover,
        },
        borderBottom: (mode.mode === text)?'5px solid '+rgbaSelected:'',
      }} onClick={(e) => handleNavClick(e)}>{text}</Text>
      )
  };

  const handleNavClick = (e) => {
    setMode({mode: e.target.textContent});
  };

  return (
    <VStack mb='20px' align='false' pl='20px'>
      <Box w='100%' mb='2' mt='5' d='flex'>
        <Box w='70%' textAlign='left' d='flex'>
          <Heading as='h2' size='2xl' >The Medical Board</Heading>
          <Input placeholder='search' w='300px' h='auto' ml='5' sx={{'borderRadius':35}}/>
        </Box>
        <Box w='30%' float='right' textAlign='right'>
          <Button size="md" variant="purple" mt='3' mr='5'>Login</Button>
          <Button size="md" variant="black" mt='3'>Register</Button>
        </Box>
      </Box>
      <HStack float='left' ml='10' spacing="30px">
        {renderNavButton('Home')}
        {renderNavButton('About')}
      </HStack>
    </VStack>
    )
}
