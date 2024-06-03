// components/NavBar.tsx
import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
      <Box bg="gray.100" padding="0.5rem" paddingX={20} mb={20}>
        <Flex justifyContent="flex-start">
        <Box>
            <Link as={NavLink} to="/" fontWeight="bold" fontSize="1rem" marginRight="3rem">
              Home
            </Link>
          </Box>
          <Box>
            <Link as={NavLink} to="/countries-and-cities" fontWeight="bold" fontSize="1rem" marginRight="3rem">
              Countries and Cities
            </Link>
          </Box>
          <Box>
            <Link as={NavLink} to="/cost-of-living" fontWeight="bold" fontSize="1rem">
              Cost of Living
            </Link>
          </Box>
        </Flex>
      </Box>
    );
  };

export default NavBar;