import { Text, TextProps } from '@chakra-ui/react';
import { formatDateRange } from '@larpcalendar/utils';

export interface EventDateProps extends TextProps {
  startDate: Date;
  endDate?: Date;
}

export const EventDate: React.FC<EventDateProps> = ({
  startDate,
  endDate,
  ...rest
}) => {
  return (
    <Text {...rest} as="span">
      {formatDateRange(startDate, endDate)}
    </Text>
  );
};

export default EventDate;
