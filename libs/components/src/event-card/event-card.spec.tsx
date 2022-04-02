import { render } from '@testing-library/react';

import { EventCard, EventCardProps } from './event-card';

describe('EventCard', () => {
  it('should render successfully', () => {
    const props: EventCardProps = {
      event: {
        id: 'id',
        createdAt: new Date(),
        updatedAt: null,
        title: 'title',
        startDate: new Date(),
        endDate: null,
        description: null,
        published: null,
        organizerId: 'organizerId',
      },
    };
    const { baseElement } = render(<EventCard {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
