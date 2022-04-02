import { render } from '@testing-library/react';

import { Page, PageProps } from './page';

describe('Page', () => {
  it('should render successfully', () => {
    const props: PageProps = {
      title: 'Title',
    };
    const { baseElement } = render(<Page {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
