import { render } from '@testing-library/react';

import CustomHooks from './CustomHooks';

describe('CustomHooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomHooks />);
    expect(baseElement).toBeTruthy();
  });
});
