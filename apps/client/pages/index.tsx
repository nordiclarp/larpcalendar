import { Event as LarpEvent } from '@prisma/client';
import { GetServerSideProps, NextPage } from 'next';

import { EventCardList, Page } from '@larpcalendar/components';
export interface IndexProps {
  events: Array<LarpEvent>;
}

export const Index: NextPage<IndexProps> = ({ events = [] }) => {
  return (
    <Page title="Events" crumbs={[{ label: 'Events', href: '/' }]}>
      <EventCardList events={events} />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps<IndexProps> = async (
  _context
) => {
  let events = [];
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
    events = response ? await response.json() : [];
  } catch (error) {
    console.error(error);
  }
  return { props: { events } };
};

export default Index;
