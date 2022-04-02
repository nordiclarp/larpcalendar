import { render } from '@testing-library/react';

import { CardHeader, CardHeaderProps } from './card-header';

describe('CardHeader', () => {
  it('should render successfully', () => {
    const props: CardHeaderProps = {
      title: 'Title',
    };
    const { baseElement } = render(<CardHeader {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
