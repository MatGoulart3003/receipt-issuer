import { Stack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Stack className='h-full min-h-screen w-full bg-slate-100 overflow-auto py-6 items-center justify-center'>
      <Outlet />
    </Stack>
  );
};
