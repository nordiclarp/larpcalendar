import { Event as LarpEvent } from '@prisma/client';
import { GetServerSideProps, NextPage } from 'next';

import { EventCardList, Page } from '@larpcalendar/components';
export interface IndexProps {
  events: Array<LarpEvent>;
}

export const Index: NextPage<IndexProps> = ({ events = [] }) => (
  <Page title="Events" crumbs={[{ label: 'Events', href: '/' }]}>
    <p>{process?.env?.NEXT_PUBLIC_API_URL || 'No api'}</p>
    <EventCardList events={events} />
  </Page>
);

export const getServerSideProps: GetServerSideProps<IndexProps> = async (
  _context
) => {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  // const events = response ? await response.json() : [];
  const events = [];
  return { props: { events } };
};

export default Index;
