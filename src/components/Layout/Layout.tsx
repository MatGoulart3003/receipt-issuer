import { Stack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Stack className='h-screen w-full bg-slate-100'>
      <Outlet />
    </Stack>
  );
};
