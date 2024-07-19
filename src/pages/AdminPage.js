// src/pages/AdminPage.js
import React, { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DataTable from '../components/DataTable';

const AdminPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Flex direction="column" minH="100vh">
      <Navbar onToggleSidebar={toggleSidebar} onSearch={setSearchQuery} />
      <Flex flex="1">
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <Box flex="1" p="4">
          <DataTable searchQuery={searchQuery} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default AdminPage;
