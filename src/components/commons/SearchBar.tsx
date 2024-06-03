// components/SearchBar.tsx
import React from 'react';
import { Input, Box } from '@chakra-ui/react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <Box mb={4}>
      <Input 
        placeholder="Search for a city..." 
        onChange={handleSearch} 
      />
    </Box>
  );
};

export default SearchBar;
