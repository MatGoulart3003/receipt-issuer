import { Flex, Text } from '@chakra-ui/react';

interface HeaderProps {
  title: string;
  description: string;
}

export const Header = ({ title, description }: HeaderProps) => {
  return (
    <Flex className='w-3/4 flex-col gap-7 items-center justify-center self-center'>
      <Text className='text-3xl font-semibold text-slate-700'>{title}</Text>
      <Text className='text-lg  text-slate-700 text-center'>{description}</Text>
    </Flex>
  );
};
