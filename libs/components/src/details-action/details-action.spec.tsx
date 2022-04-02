import { render } from '@testing-library/react';

import { DetailsAction, DetailsActionProps } from './details-action';

describe('DetailsAction', () => {
  it('should render successfully', () => {
    const props: DetailsActionProps = {
      href: '#',
    };
    const { baseElement } = render(<DetailsAction {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
