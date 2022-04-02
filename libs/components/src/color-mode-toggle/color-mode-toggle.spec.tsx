import { render } from '@testing-library/react';

import { ColorModeToggle } from './color-mode-toggle';

describe('ColorModeToggle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ColorModeToggle />);
    expect(baseElement).toBeTruthy();
  });
});
