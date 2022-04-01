import { Flex, HStack, Heading, Tag } from '@chakra-ui/react';

export interface CardHeaderProps {
  title: string;
  type?: string;
  action?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  type,
  action,
}) => {
  return (
    <Flex align="center" justify="space-between" p="4" borderBottomWidth="1px">
      <HStack>
        <Heading as="h2" fontSize="xl">
          {title}
        </Heading>
        {!!type?.length && <Tag>{type}</Tag>}
      </HStack>
      {action}
    </Flex>
  );
};

export default CardHeader;
