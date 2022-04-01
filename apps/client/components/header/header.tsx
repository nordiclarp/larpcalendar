import { Box, Heading, Link, Stack, useColorModeValue } from '@chakra-ui/react';

import { ColorModeToggle } from '../color-mode-toggle/color-mode-toggle';
import NextLink from 'next/link';
import { FavIcon } from '../fav-icon/fav-icon';

import { HeaderNav } from '../header-nav/header-nav';

export const Header: React.FC = () => {
  return (
    <Box
      as="header"
      data-testid="Header"
      backgroundColor={useColorModeValue('gray.50', 'gray.900')}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mx="auto"
        maxW="7xl"
        py={{ base: '2', md: '4' }}
        px={{ base: '4', md: '8' }}
      >
        <NextLink href="/" passHref>
          <Link d="flex">
            <Heading fontSize="xl" as="p">
              <FavIcon
                fontSize="20px"
                color={useColorModeValue('gray.800', 'gray.200')}
                mr={2}
              />
              Larp Calendar
            </Heading>
          </Link>
        </NextLink>
        <Stack direction={{ base: 'row', md: 'row-reverse' }}>
          <ColorModeToggle />
          <HeaderNav />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
