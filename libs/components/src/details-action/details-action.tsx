import { LinkOverlay } from '@chakra-ui/react';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface DetailsActionProps {
  href: string;
  label?: string;
}

export const DetailsAction: React.FC<DetailsActionProps> = ({
  href,
  label = 'View details',
}) => (
  <Link href={href} passHref>
    <LinkOverlay p={5} d="block" textAlign="right" data-testid="DetailsAction">
      {label}
    </LinkOverlay>
  </Link>
);

export default DetailsAction;
