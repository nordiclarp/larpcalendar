import { Container, Stack, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Breadcrumbs, { BreadcrumbData } from '../breadcrumbs/breadcrumbs';

export interface PageProps {
  title: string;
  heading?: string;
  crumbs?: BreadcrumbData[];
}
export const Page: React.FC<PageProps> = ({
  heading,
  title,
  crumbs,
  children,
}) => (
  <Container px={0}>
    <Stack px={{ base: 4, md: 0 }}>
      <Head>
        <title>{title && `${title} | `}Larp Calendar</title>
      </Head>
      {crumbs && <Breadcrumbs crumbs={crumbs} />}
      <Heading as="h1">{heading || title}</Heading>
      {children}
    </Stack>
  </Container>
);
