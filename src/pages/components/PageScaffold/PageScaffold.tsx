import { Flex, Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { LinkBack } from '../LinkBack/LinkBack';
import { Header } from '../Header/Header';

interface PageScaffoldProps {
  children: ReactNode;
  title: string;
  description: string;
}

const stylesheet = {
  stack: 'h-full w-full items-center justify-center',
  container: 'flex-col rounded-lg shadow-lg p-5 bg-white gap-6',
};

export const PageScaffold = ({
  children,
  title,
  description,
}: PageScaffoldProps) => {
  const handleWidth = () => {
    return location.pathname === '/initial' ? 'w-2/5' : 'w-3/4';
  };

  return (
    <Stack className={stylesheet.stack}>
      <Flex className={`${stylesheet.container} ${handleWidth()}`}>
        {location.pathname !== '/initial' && (
          <Flex className='w-full items-start flex-col'>
            <LinkBack />
            <Header title={title} description={description} />
          </Flex>
        )}
        {children}
      </Flex>
    </Stack>
  );
};
