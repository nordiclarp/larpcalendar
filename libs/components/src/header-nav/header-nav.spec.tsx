import { render } from '@testing-library/react';

import { HeaderNav } from './header-nav';

describe('HeaderNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderNav />);
    expect(baseElement).toBeTruthy();
  });
});
