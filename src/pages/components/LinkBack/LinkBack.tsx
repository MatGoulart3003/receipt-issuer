import { Link, Text } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';

const stylesheet = {
  link: 'flex h-10 items-center justify-center p-4  w-44 items-center',
  linkText: 'text-black font-semibold',
};

export const LinkBack = () => {
  return (
    <Link href='/' className={stylesheet.link}>
      <FiArrowLeft size={16} />
      <Text className={stylesheet.linkText}>Voltar</Text>
    </Link>
  );
};
