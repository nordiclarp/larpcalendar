import { render } from '@testing-library/react';

import { HeaderButton, HeaderButtonProps } from './header-button';

describe('HeaderButton', () => {
  it('should render successfully', () => {
    const props: HeaderButtonProps = {
      href: '#',
    };
    const { baseElement } = render(<HeaderButton {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
