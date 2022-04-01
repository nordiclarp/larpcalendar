import {
  Box,
  ButtonGroup,
  Divider,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VisuallyHidden,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaPatreon,
  FaPaypal,
} from 'react-icons/fa';
import NextLink from 'next/link';

import { Logo } from '../logo/logo';

export const Footer: React.FC = () => (
  <Box
    as="footer"
    role="contentinfo"
    backgroundColor={useColorModeValue('gray.50', 'gray.900')}
  >
    <Stack
      spacing="10"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{ base: '4', md: '8' }}
      divider={<StackDivider />}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '10', lg: '28' }}
      >
        <Box
          flex="1"
          display="flex"
          justifyContent={{ base: 'center', lg: 'flex-start' }}
        >
          <NextLink href="/" passHref>
            <Link>
              <Logo
                boxSize={24}
                color={useColorModeValue('gray.800', 'gray.200')}
              />
              <VisuallyHidden>Larp Calendar</VisuallyHidden>
            </Link>
          </NextLink>
        </Box>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: '10', md: '20' }}
        >
          <SimpleGrid
            columns={2}
            spacing={{ base: '10', md: '20', lg: '28' }}
            flex="1"
          >
            <Box minW="130px">
              <Stack>
                <NextLink href="/about" passHref>
                  <Link>About</Link>
                </NextLink>
                <NextLink href="/contact" passHref>
                  <Link>Contact</Link>
                </NextLink>
              </Stack>
            </Box>
            <Box minW="130px">
              <Stack>
                <NextLink href="/privacy-policy" passHref>
                  <Link>Privacy Policy</Link>
                </NextLink>
                <NextLink href="/terms-of-service" passHref>
                  <Link>Terms of Service</Link>
                </NextLink>
              </Stack>
            </Box>
          </SimpleGrid>
        </Stack>
      </Stack>
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
          height={{ base: 'auto', md: '4' }}
        >
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()}{' '}
            <Link
              href="https://nordiclarp.org/"
              isExternal
              textDecoration="underline"
            >
              Nordic Larp
            </Link>
          </Text>
          <Divider
            orientation={useBreakpointValue({
              base: 'horizontal',
              md: 'vertical',
            })}
          />
          <Text fontSize="sm">
            Logo and icon designed by{' '}
            <Link
              href="https://neostate.net/"
              isExternal
              textDecoration="underline"
            >
              Niklas Rhöse
            </Link>
            .
          </Text>
        </Stack>
        <ButtonGroup variant="ghost" color="gray.600">
          <IconButton
            as={Link}
            href="https://www.facebook.com/larpcalendar"
            aria-label="Follow Larp Calendar on Facebook"
            title="Follow Larp Calendar on Facebook"
            icon={<FaFacebook fontSize="20px" />}
            isExternal
          />
          <IconButton
            as={Link}
            href="https://discord.gg/bGvAFDsDwV"
            aria-label="Join the Nordic Larp Discord"
            title="Join the Nordic Larp Discord"
            icon={<FaDiscord fontSize="20px" />}
            isExternal
          />
          <IconButton
            as={Link}
            href="https://github.com/nordiclarp/larpcalendar"
            aria-label="Check out the Larp Calendar code on Github"
            title="Check out the Larp Calendar code on Github"
            icon={<FaGithub fontSize="20px" />}
            isExternal
          />
          <IconButton
            as={Link}
            href="https://www.patreon.com/nordiclarp"
            aria-label="Donate on Patreon"
            title="Donate on Patreon"
            icon={<FaPatreon fontSize="20px" />}
            isExternal
          />
          <IconButton
            as={Link}
            href="https://paypal.me/johannesaxner"
            aria-label="Donate on Paypal"
            title="Donate on Paypal"
            icon={<FaPaypal fontSize="20px" />}
            isExternal
          />
        </ButtonGroup>
      </Stack>
    </Stack>
  </Box>
);

export default Footer;
