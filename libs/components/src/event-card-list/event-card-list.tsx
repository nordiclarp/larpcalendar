import { Box, Heading, Stack } from '@chakra-ui/react';
import { Event as LarpEvent } from '@prisma/client';
import { Fragment } from 'react';

import { EventCard } from '../event-card/event-card';

export interface EventCardListProps {
  events?: LarpEvent[];
  loading?: boolean;
}

export const EventCardList: React.FC<EventCardListProps> = ({
  events = [],
  loading,
}) => {
  const eventMapper = (event: LarpEvent, index: number, array: LarpEvent[]) => {
    const year = new Date(event.startDate).getFullYear();
    let component = null;
    if (
      index === 0 ||
      year !== new Date(array[index - 1].startDate).getFullYear()
    ) {
      component = (
        <Fragment key={`EventCard-${event.id}`}>
          <Heading as="h2" fontSize="2xl">
            {year}
          </Heading>
          <EventCard event={event} />
        </Fragment>
      );
    } else {
      component = <EventCard event={event} key={`EventCard-${event.id}`} />;
    }
    return component;
  };
  return (
    <Stack spacing={3}>
      {loading && <Box>Loading...</Box>}
      {!events.length && <Box>No events!</Box>}
      {events.map(eventMapper)}
    </Stack>
  );
};

export default EventCardList;
