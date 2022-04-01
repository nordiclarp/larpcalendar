import { Event as LarpEvent } from '@prisma/client';
import { GetStaticProps, NextPage } from 'next';

import { Page } from '../../components/page/page';

export interface EventPageProps {
  event: LarpEvent;
}

export const EventPage: NextPage<EventPageProps> = ({ event }) => (
  <Page title={event.title} crumbs={[{ label: 'Events', href: '/' }]}>
    {event.title}
  </Page>
);

export const getStaticProps: GetStaticProps<EventPageProps> = async ({
  params,
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${params.id}`
  );
  const event = await response.json();
  return { props: { event } };
};

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  const events = (await response.json()) || [];
  const paths = events.map(({ id }) => ({ params: { id } }));
  return {
    paths,
    fallback: true, // false or 'blocking'
  };
};

export default EventPage;
