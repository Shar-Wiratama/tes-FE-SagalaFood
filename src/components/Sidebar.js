import React from 'react';
import { Box, Flex, VStack, Text, IconButton, Link } from '@chakra-ui/react';
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings, FiMenu } from 'react-icons/fi';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Box
      bg="white"
      w={isOpen ? "250px" : { base: "60px", md: "80px" }}
      h="100vh"
      transition="width 0.3s"
      overflow="hidden"
      boxShadow="lg"
      p="4"
    >
      <Flex direction="column" alignItems={isOpen ? "center" : "flex-start"}>
        <Flex alignItems="center" mb="8">
          {isOpen && <Text fontSize="2xl" ml="2">Tes Front-End</Text>}
        </Flex>
        <VStack spacing="4" w="full" alignItems={isOpen ? "flex-start" : "center"}>
          <NavItem icon={FiHome} label="Main Dashboard" isOpen={isOpen} />
          <NavItem icon={FiTrendingUp} label="NFT Marketplace" isOpen={isOpen} />
          <NavItem icon={FiCompass} label="Data Tables" isOpen={isOpen} />
          <NavItem icon={FiStar} label="Profile" isOpen={isOpen} />
          <NavItem icon={FiSettings} label="Settings" isOpen={isOpen} />
        </VStack>
      </Flex>
    </Box>
  );
};

const NavItem = ({ icon, label, isOpen }) => (
  <Link
    w="full"
    py="2"
    px="4"
    borderRadius="md"
    _hover={{ bg: 'gray.100' }}
    display="flex"
    alignItems="center"
    justifyContent={isOpen ? "flex-start" : "center"}
  >
    {icon && <Box as={icon} mr={isOpen ? "4" : "0"} />}
    {isOpen && <Text>{label}</Text>}
  </Link>
);

export default Sidebar;
