import { React, useState } from 'react';
import { VStack, Text } from '@chakra-ui/react';


export default function SideBar(props) {
	const [mode, setMode] = useState({
    mode: 'Hot',
  });

  const rgbaSelected = 'rgba(69, 171, 93, 1)';
  const rgbaHover = 'rgba(69, 171, 93, .5)';

	const renderSideButton = (text) => {
		return (
				<Text fontSize='3xl' sx={{
	        "&:hover": {
	          cursor: 'pointer',
	          borderBottom: (mode.mode === text)?'5px solid '+rgbaSelected:'5px solid '+rgbaHover,
	        },
	        borderBottom: (mode.mode === text)?'5px solid '+rgbaSelected:'',
	      }} onClick={(e)=> handleSideButtonClick(e)}>
					{text}
				</Text>
			)
	};

	const handleSideButtonClick = (e) => {
		setMode({mode: e.target.textContent});
	}

	return (
		<VStack w='15%' bg='#e0e0e0' overflowY='auto' padding='10px' borderRadius='0px 20px 20px 0px'>
			{renderSideButton('posts')}

		</VStack>
		)		
}
