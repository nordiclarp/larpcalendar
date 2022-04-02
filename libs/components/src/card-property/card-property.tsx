import { Box, Flex, FlexProps, useColorModeValue } from '@chakra-ui/react';

export interface CardPropertyProps extends FlexProps {
  label: string;
}

export const CardProperty: React.FC<CardPropertyProps> = ({
  children,
  label,
  ...rest
}) => {
  return (
    <Flex
      as="dl"
      direction={{ base: 'column', sm: 'row' }}
      p="4"
      _even={{ bg: useColorModeValue('gray.50', 'gray.600') }}
      {...rest}
    >
      <Box as="dt" minWidth="180px">
        {label}
      </Box>
      <Box as="dd" flex="1" fontWeight="semibold">
        {children}
      </Box>
    </Flex>
  );
};

export default CardProperty;
