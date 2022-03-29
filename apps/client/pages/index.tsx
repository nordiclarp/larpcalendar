import { GetServerSideProps, NextPage } from 'next';

interface EventDto {
  id: number;
  title: string;
}

export interface IndexProps {
  events: Array<EventDto>;
}

export const Index: NextPage<IndexProps> = ({ events }) => {
  const eventMapper = ({ id, title }: EventDto) => (
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
  const response = await fetch(`${process.env.API_BASE_URL}/events`);
  const events = (await response.json()) || [];
  return { props: { events } };
};

export default Index;
