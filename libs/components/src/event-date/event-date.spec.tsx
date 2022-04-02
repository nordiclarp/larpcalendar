import { render } from '@testing-library/react';

import { EventDate, EventDateProps } from './event-date';

describe('EventDate', () => {
  it('should render successfully', () => {
    const props: EventDateProps = {
      startDate: new Date(),
    };
    const { baseElement } = render(<EventDate {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
