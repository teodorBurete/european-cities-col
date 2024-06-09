// components/NavBar.tsx
import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
      <Box bg="blue.700" py={4} px={20} mb={20}>
      <Flex justifyContent="flex-start">
        <Box>
          <Link
            as={NavLink}
            to="/"
            fontWeight="bold"
            fontSize="1rem"
            color="white"
            marginRight="3rem"
            _hover={{ textDecoration: "none", color: "blue.200" }}
            _active={{ color: "blue.200" }}
          >
            Home
          </Link>
        </Box>
        <Box>
          <Link
            as={NavLink}
            to="/countries-and-cities"
            fontWeight="bold"
            fontSize="1rem"
            color="white"
            marginRight="3rem"
            _hover={{ textDecoration: "none", color: "blue.200" }}
            _active={{ color: "blue.200" }}
          >
            Countries and Cities
          </Link>
        </Box>
        <Box>
          <Link
            as={NavLink}
            to="/cost-of-living"
            fontWeight="bold"
            fontSize="1rem"
            color="white"
            _hover={{ textDecoration: "none", color: "blue.200" }}
            _active={{ color: "blue.200" }}
          >
            Cost of Living
          </Link>
        </Box>
      </Flex>
    </Box>
    );
  };

export default NavBar;