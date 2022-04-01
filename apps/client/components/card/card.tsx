import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';

export const Card: React.FC<BoxProps> = (props) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      rounded={{ md: 'lg' }}
      shadow="base"
      overflow="hidden"
      {...props}
    />
  );
};

export default Card;
