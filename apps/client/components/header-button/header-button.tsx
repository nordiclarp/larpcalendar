import NextLink, { LinkProps } from 'next/link';
import { Button, Link } from '@chakra-ui/react';

export type HeaderButtonProps = Pick<LinkProps, 'href'>;

export const HeaderButton: React.FC<HeaderButtonProps> = ({
  href,
  children,
}) => {
  return (
    <NextLink href={href} passHref>
      <Button as={Link} textDecoration="none">
        {children}
      </Button>
    </NextLink>
  );
};

export default HeaderButton;
