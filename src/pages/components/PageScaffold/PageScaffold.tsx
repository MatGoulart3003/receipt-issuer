import { Flex, Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface PageScaffoldProps {
  children: ReactNode;
}

const stylesheet = {
  stack: 'h-full w-full items-center justify-center',
  container:
    'flex-col rounded-lg shadow-lg p-5 w-2/5 bg-white justify-between gap-6 items-center',
};

export const PageScaffold = ({ children }: PageScaffoldProps) => {
  return (
    <Stack className={stylesheet.stack}>
      <Flex className={stylesheet.container}>{children}</Flex>
    </Stack>
  );
};
