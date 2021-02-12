import { Box, useStyleConfig } from "@chakra-ui/react";


export default function Button(props) {
	const { size, variant, ...rest } = props;

	const styles = useStyleConfig("Button", {size, variant})

	return <Box as="button" sx={styles} {...rest} /> 
}
