import { React, useState } from 'react';

import { HStack, Box, Heading, Input, Text } from "@chakra-ui/react";
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
      <Text fontSize='2xl' sx={{
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
    <Box>
      <Box w='100%' mb='5' mt='5' d='flex'>
        <Box w='70%' textAlign='left' d='flex'>
          <Heading as='h1' size='3xl'>The Medical Board</Heading>
          <Input placeholder='search' w='300px' h='auto' ml='5' sx={{'borderRadius':35}}/>
        </Box>
        <Box w='30%' float='right' textAlign='right'>
          <Button size="md" variant="green" mt='3' mr='5'>Login</Button>
          <Button size="md" variant="brown" mt='3'>Register</Button>
        </Box>
      </Box>
      <HStack float='left' ml='10' spacing="30px">
        {renderNavButton('Home')}
        {renderNavButton('About')}
      </HStack>
    </Box>
    )
}
