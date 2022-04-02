import {
  Box,
  Button,
  Link,
  Menu,
  Spinner,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';

export const UserMenu: React.FC = (_props) => {
  const toast = useToast();
  // TODO: Implement these
  const status = undefined;
  const user: undefined | { displayName: string } = undefined;
  const isAdmin = false;

  const onSignOutClick = async () => {
    try {
      // await signOut(firebaseAuth);
      toast({
        title: 'Signed out',
        description: 'Come back soon!',
        status: 'info',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const itemColor = useColorModeValue('gray.800', 'gray.400');

  return (
    <Box data-testid="UserMenu">
      {status === 'loading' ? (
        <Button disabled={true} data-testid="UserMenu--loading">
          <Spinner />
        </Button>
      ) : user ? (
        <Menu data-testid="UserMenu--signedIn">
          {/* <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {user.displayName || 'Logged in'}
          </MenuButton>
          <MenuList>
            <MenuItem
              icon={<FaHome />}
              color={itemColor}
              as={Link}
              to="/dashboard"
            >
              Dashboard
            </MenuItem>
            <MenuItem
              icon={<FaCog />}
              color={itemColor}
              as={Link}
              href="/settings"
            >
              Settings
            </MenuItem>
            {isAdmin && (
              <>
                <MenuDivider />
                <MenuItem
                  icon={<FaShieldAlt />}
                  color={itemColor}
                  as={Link}
                  href="/admin"
                >
                  Admin Panel
                </MenuItem>
              </>
            )}
            <MenuDivider />
            <MenuItem
              onClick={onSignOutClick}
              icon={<FaSignOutAlt />}
              color={itemColor}
            >
              Sign out
            </MenuItem>
          </MenuList> */}
        </Menu>
      ) : (
        <Button as={Link} href="/sign-in" data-testid="UserMenu--signedOut">
          Sign in
        </Button>
      )}
    </Box>
  );
};

export default UserMenu;
