// components/Header.tsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import LogoSection from './LogoSection';

const Header: React.FC = () => {
  return (
    <Box mb={4}>
      <LogoSection />
    </Box>
  );
};

export default Header;