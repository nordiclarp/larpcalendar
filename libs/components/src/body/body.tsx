import { Box } from '@chakra-ui/react';

export const Body: React.FC = ({ children }) => (
  <Box
    as="main"
    role="main"
    mx="auto"
    maxW="7xl"
    pt={{ base: '4', md: '8' }}
    pb={16}
    flex="1"
    d="flex"
  >
    {children}
  </Box>
);

export default Body;
