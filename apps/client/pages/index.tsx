import { Event as LarpEvent } from '@prisma/client';
import { GetStaticProps, NextPage } from 'next';
import { EventCardList } from '../components/event-card-list/event-card-list';

import { Page } from '../components/page/page';

export interface IndexProps {
  events: Array<LarpEvent>;
}

export const Index: NextPage<IndexProps> = ({ events }) => (
  <Page title="Events" crumbs={[{ label: 'Events', href: '/' }]}>
    <EventCardList events={events} />
  </Page>
);

export const getStaticProps: GetStaticProps<IndexProps> = async (_context) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  const events = (await response.json()) || [];
  return { props: { events } };
};

export default Index;
