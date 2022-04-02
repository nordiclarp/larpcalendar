import { render } from '@testing-library/react';

import { Hamburger } from './hamburger';

describe('Hamburger', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hamburger />);
    expect(baseElement).toBeTruthy();
  });
});
