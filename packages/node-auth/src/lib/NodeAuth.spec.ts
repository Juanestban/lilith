import { nodeAuth } from './NodeAuth';

describe('nodeAuth', () => {
  it('should work', () => {
    expect(nodeAuth()).toEqual('NodeAuth');
  });
});
