import { Event } from '@prisma/client';
import { GetServerSideProps, NextPage } from 'next';

export interface IndexProps {
  events: Array<Event>;
}

export const Index: NextPage<IndexProps> = ({ events }) => {
  const eventMapper = ({ id, title }: Event) => (
    <div key={`Event-${id}`}>
      <p>{title}</p>
    </div>
  );
  return (
    <div>
      <h1>Larp Calendar</h1>
      <div>{events.map(eventMapper)}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<IndexProps> = async (
  _context
) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  const events = (await response.json()) || [];
  return { props: { events } };
};

export default Index;
