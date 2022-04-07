import { Event as LarpEvent } from '@prisma/client';
import { GetServerSideProps, NextPage } from 'next';

import { EventCardList, Page } from '@larpcalendar/components';
export interface IndexProps {
  events: Array<LarpEvent>;
  error: any;
}

export const Index: NextPage<IndexProps> = ({ events = [], error }) => {
  console.log({ events, error });
  return (
    <Page title="Events" crumbs={[{ label: 'Events', href: '/' }]}>
      <p>NODE_ENV: {process?.env?.NODE_ENV || 'No env'}</p>
      <p>
        NEXT_PUBLIC_API_URL: {process?.env?.NEXT_PUBLIC_API_URL || 'No api'}
      </p>
      <EventCardList events={events} />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps<IndexProps> = async (
  _context
) => {
  let error;
  let events = [];
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
    events = response ? await response.json() : [];
  } catch (err) {
    error = err;
  }
  console.log({ events, error });
  return { props: { events, error } };
};

export default Index;
