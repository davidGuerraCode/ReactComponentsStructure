import Filters from '../filters';

describe('Filters test', () => {
  it('has a module', () => {
    expect(Filters).toBeDefined();
  });

  describe('filterItems', () => {
    it('returns a matching list item', () => {
      const list = ['foo', 'bar'];
      const expected = ['foo'];
      const actual = Filters.filterItems(list, 'foo');

      expect(actual).toEqual(expected);
    });

    it('returns a partial matching list item', () => {
      const list = ['foo', 'bar'];
      const expected = ['foo'];
      const actual = Filters.filterItems(list, 'f');

      expect(actual).toEqual(expected);
    });

    it('does not return a incorrect partial matching', () => {
      const list = ['foo', 'bar'];
      const expected = [];
      const actual = Filters.filterItems(list, 'c');

      expect(actual).toEqual(expected);
    });
  });
});
