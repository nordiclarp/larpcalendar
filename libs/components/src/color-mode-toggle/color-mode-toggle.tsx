import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const label =
    colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
  const icon = colorMode === 'light' ? <FaSun /> : <FaMoon />;
  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label={label}
      title={label}
      icon={icon}
    />
  );
};

export default ColorModeToggle;
