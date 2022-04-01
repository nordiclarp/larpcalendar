import { formatDateRange } from './format-date-range';

describe('formatDateRange', () => {
  it('should print date range in same month, same year', () => {
    const startDate = new Date('2010-01-01');
    const endDate = new Date('2010-01-03');
    expect(formatDateRange(startDate, endDate)).toEqual('January 1-3, 2010');
  });
  it('should print date range in different month, same year', () => {
    const startDate = new Date('2010-01-01');
    const endDate = new Date('2010-02-03');
    expect(formatDateRange(startDate, endDate)).toEqual(
      'January 1 - February 3, 2010'
    );
  });
  it('should print date range in different year', () => {
    const startDate = new Date('2010-01-01');
    const endDate = new Date('2011-02-03');
    expect(formatDateRange(startDate, endDate)).toEqual(
      'January 1, 2010 - February 3, 2011'
    );
  });
  it('should print single date with same dates', () => {
    const startDate = new Date('2010-01-01T07:33');
    const endDate = new Date('2010-01-01T09:45');
    expect(formatDateRange(startDate, endDate)).toEqual('January 1, 2010');
  });
  it('should print single date when only one given', () => {
    const startDate = new Date('2010-01-01T07:33');
    expect(formatDateRange(startDate)).toEqual('January 1, 2010');
  });
});
