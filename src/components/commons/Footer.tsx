// components/Footer.tsx
import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box className='footer' as="footer" width="100%" bg="gray.200" py={4} mt={4}>
      <Text textAlign="center" fontSize="sm">
        © 2024 Your Company. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
