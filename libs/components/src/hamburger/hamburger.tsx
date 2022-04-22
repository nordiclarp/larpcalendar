import {
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

import { HeaderButton } from '../header-button/header-button';

export const Hamburger: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // TODO: Make ref work
  // const btnRef = useRef<HTMLButtonElement>();

  return (
    <>
      <IconButton
        variant="ghost"
        icon={<FiMenu fontSize="1.25rem" />}
        aria-label="Open Menu"
        // ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Basic Drawer
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <ButtonGroup
              variant="ghost"
              color="gray.600"
              flexDirection="column"
            >
              <HeaderButton href="/">Events</HeaderButton>
              <HeaderButton href="/organizers">Organizers</HeaderButton>
            </ButtonGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
