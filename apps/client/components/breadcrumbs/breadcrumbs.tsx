import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import NextLink from 'next/link';

export interface BreadcrumbData {
  href: string;
  label: string;
}

export interface BreadcrumbsProps {
  crumbs?: BreadcrumbData[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs = [] }) => {
  const crumbsMapper = (
    { label, href }: BreadcrumbData,
    index: number,
    array: BreadcrumbData[]
  ) => {
    return (
      <BreadcrumbItem
        isCurrentPage={index < array.length}
        key={`Breadcrumb-${index}`}
      >
        {href ? (
          <NextLink href={href} passHref>
            <BreadcrumbLink>{label}</BreadcrumbLink>
          </NextLink>
        ) : (
          <BreadcrumbLink
            _hover={{ textDecoration: 'none', cursor: 'inherit' }}
          >
            {label}
          </BreadcrumbLink>
        )}
      </BreadcrumbItem>
    );
  };
  return (
    <Breadcrumb fontSize="sm">
      <BreadcrumbItem isCurrentPage={!crumbs?.length}>
        <NextLink href="/" passHref>
          <BreadcrumbLink>Home</BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
      {crumbs.map(crumbsMapper)}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
