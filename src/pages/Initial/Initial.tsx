import { Flex, Link, Text, VStack } from '@chakra-ui/react';
import { PageScaffold } from '../components/PageScaffold/PageScaffold';

const stylesheet = {
  link: 'h-10 bg-blue-600 items-center justify-center p-4 flex rounded-md w-44',
  linkText: 'text-white font-semibold',
  title: 'text-2xl font-semibold',
  linksContent: 'w-[70vh] justify-between',
};

const InitialBody = () => {
  return (
    <>
      <VStack>
        <Text className={stylesheet.title}>Bem vindo ao Emissor de Notas!</Text>
        <Text>Escolha uma opção para continuar:</Text>
      </VStack>
      <Flex className={stylesheet.linksContent}>
        <Link href='/final-costumer-emissor' className={stylesheet.link}>
          <Text className={stylesheet.linkText}>Valor livre</Text>
        </Link>
        <Link href='/daily-emissor' className={stylesheet.link}>
          <Text className={stylesheet.linkText}>Emissor por Diária</Text>
        </Link>
      </Flex>
    </>
  );
};

export const Initial = () => {
  return (
    <PageScaffold>
      <InitialBody />
    </PageScaffold>
  );
};
