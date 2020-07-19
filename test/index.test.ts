import { FilterableSet as OriginalFilterableSet } from '../src/FilterableSet';
import { FilterableSet } from '../src/index';

describe('index.js', () => {
  it('index.js export FilterableSet as default', async () => {
    const filterableSet = new FilterableSet();
    expect((filterableSet instanceof OriginalFilterableSet)).toBe(true);
  });
});
