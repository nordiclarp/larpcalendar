export const formatDateRange = (
  startInput: Date | string,
  endInput?: Date | string
): string => {
  const start = new Date(startInput);
  const end = endInput && new Date(endInput);
  const dayOptions: Intl.DateTimeFormatOptions = { day: 'numeric' };
  const monthOptions: Intl.DateTimeFormatOptions = { month: 'long' };
  const dayMonthOptions: Intl.DateTimeFormatOptions = {
    ...dayOptions,
    ...monthOptions,
  };
  const fullOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    ...dayMonthOptions,
  };
  const locale = 'en-US';
  const dateTimeFormat = new Intl.DateTimeFormat('en', fullOptions);
  if (!end || start.toDateString() === end.toDateString()) {
    return dateTimeFormat.format(start);
  }
  if (start.getFullYear() === end.getFullYear()) {
    // same year
    if (start.getMonth() === end.getMonth()) {
      // same month
      return `${new Intl.DateTimeFormat(locale, monthOptions).format(
        start
      )} ${new Intl.DateTimeFormat(locale, dayOptions).format(
        start
      )}-${new Intl.DateTimeFormat(locale, dayOptions).format(
        end
      )}, ${start.getFullYear()}`;
    } else {
      // different months, same year
      return `${new Intl.DateTimeFormat(locale, dayMonthOptions).format(
        start
      )} - ${new Intl.DateTimeFormat(locale, dayMonthOptions).format(
        end
      )}, ${start.getFullYear()}`;
    }
  } else {
    return `${new Intl.DateTimeFormat(locale, fullOptions).format(
      start
    )} - ${dateTimeFormat.format(end)}`;
  }
};
