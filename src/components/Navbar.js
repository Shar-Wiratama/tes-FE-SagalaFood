// src/components/Navbar.js
import React from 'react';
import { Box, Flex, IconButton, Input, Avatar, useColorModeValue } from '@chakra-ui/react';
import { FiMenu, FiBell } from 'react-icons/fi';

const Navbar = ({ onToggleSidebar, onSearch }) => {
  return (
    <Box bg={useColorModeValue('black', 'gray.800')} px={4} boxShadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          bg="black"
          outlineColor="white"
          icon={<FiMenu />} 
          textColor="white"
          aria-label="Toggle Sidebar"
          onClick={onToggleSidebar}
        />
        <Input
          placeholder="Search..."
          maxW="400px"
          bg="white"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Flex alignItems="center">
          <IconButton
            size="md"
            bg="black"
            outlineColor="white"
            icon={<FiBell />}
            textColor="white"
            aria-label="Notifications"
            mr="4"
          />
          <Avatar name="User" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
