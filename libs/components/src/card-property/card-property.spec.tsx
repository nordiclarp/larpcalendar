import { render } from '@testing-library/react';

import { CardProperty, CardPropertyProps } from './card-property';

describe('CardProperty', () => {
  it('should render successfully', () => {
    const props: CardPropertyProps = {
      label: 'Label',
    };

    const { baseElement } = render(<CardProperty {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
