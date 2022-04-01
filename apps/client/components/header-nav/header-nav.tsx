import { ButtonGroup, useBreakpointValue } from '@chakra-ui/react';

import { Hamburger } from '../hamburger/hamburger';
import HeaderButton from '../header-button/header-button';

export const HeaderNav: React.FC = ({ children }) => {
  const isDesktop = useBreakpointValue<boolean>({ base: false, lg: true });
  return isDesktop ? (
    <ButtonGroup variant="ghost" color="gray.600">
      <HeaderButton href="/">Events</HeaderButton>
      <HeaderButton href="/organizers">Organizers</HeaderButton>
      {/* <UserMenu /> */}
    </ButtonGroup>
  ) : (
    <>
      <Hamburger />
    </>
  );
};
