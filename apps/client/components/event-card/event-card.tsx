import { Box, Container, LinkBox, Text } from '@chakra-ui/react';

import Card from '../card/card';
import CardContent from '../card-content/card-content';
import CardHeader from '../card-header/card-header';
import CardProperty from '../card-property/card-property';
import { DetailsAction } from '../details-action/details-action';
import { EventDate } from '../event-date/event-date';
import { Event as LarpEvent } from '@prisma/client';

export interface TicketPrice {
  amount: number | { min: number; max: number };
  currency: string;
}
export interface EventTicket {
  name?: string;
  description?: string;
  url?: string; // URL for purchase
  availability?: 'available' | 'fewLeft' | 'soldOut';
  availabilityStarts?: Date;
  availabilityEnds?: Date;
  quantity?: number; // Total number of ticket type
  inventory?: number; // Available number of ticket type
  price?: TicketPrice | 'free'; // Price of ticket
}

export interface EventCardProps {
  event: LarpEvent;
  snippet?: string;
}

// TODO: Make type make sense
export const EventCard: React.FC<EventCardProps> = ({
  event: {
    id,
    title,
    // name,
    startDate,
    endDate,
    // location,
    // eventType,
    // capacity,
    // tickets = [],
    // snippet,
  },
  snippet = '',
}) => {
  if (!title) {
    return null;
  }

  const ticketsMapper = (ticket: EventTicket, index: number) => {
    const locale = 'en-US';
    if (ticket?.price === 'free') {
      return <Text key={`Ticket-${id}-${index}`}>Free</Text>;
    } else if (
      ticket?.price?.amount &&
      ticket?.price?.currency &&
      typeof ticket.price.amount === 'number'
    ) {
      return (
        <Text>
          {new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: ticket.price.currency,
          }).format(ticket.price.amount)}
        </Text>
      );
    } else {
      return null;
    }
  };

  return (
    <LinkBox as="article" data-testid="EventCard">
      <Card mx="auto">
        <CardHeader
          title={title}
          type={'larp'}
          action={<DetailsAction href={`/events/${id}`} />}
        />
        <CardContent>
          {!!snippet?.length && (
            <Box p={4} borderBottomWidth="1px">
              <Container p={0}>
                <Text>{snippet}</Text>
              </Container>
            </Box>
          )}
          <CardProperty label="Date">
            <EventDate startDate={startDate} endDate={endDate} />
          </CardProperty>
          {/* {location && (
            <CardProperty label="Location">
              <Text>
                {location.name}
                {location.city && `${location.name && ', '}${location.city}`}
                {location.country &&
                  `${(location.name || location.city) && ', '}${
                    location.country
                  }`}
              </Text>
            </CardProperty>
          )} */}
        </CardContent>
      </Card>
    </LinkBox>
  );
};

export default EventCard;
