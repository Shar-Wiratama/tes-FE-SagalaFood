import React, { useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Progress,
} from '@chakra-ui/react';

const DataTable = ({ searchQuery }) => {
  const [data, setData] = useState([
    { name: 'Sate Sapi', quantity: 258, price: "50.000", createdDate: '2022-10-24', progress: 70 },
    { name: 'Soto ayam', quantity: 858, price: "30.000", createdDate: '2021-02-21', progress: 40 },
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newData, setNewData] = useState({ name: '', quantity: '', price: '', createdDate: '', progress: 0 });

  const handleAddData = () => {
    const newEntry = { ...newData, progress: Math.floor(Math.random() * 100) };
    setData([...data, newEntry]);
    setNewData({ name: '', quantity: '', price: '', createdDate: '', progress: 0 });
    onClose();
  };

  const handleDeleteData = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box>
      <Button onClick={onOpen} mb={4}>Add Data</Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Quantity</Th>
            <Th>Price</Th>
            <Th>Created Date</Th>
            <Th>Recipe Research Progress</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((item, index) => (
            <Tr key={index}>
              <Td>{item.name}</Td>
              <Td>{item.quantity}</Td>
              <Td>{item.price}</Td>
              <Td>{item.createdDate}</Td>
              <Td>
                <Progress value={item.progress} size="sm" colorScheme="green" />
              </Td>
              <Td>
                <Button colorScheme="red" onClick={() => handleDeleteData(index)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                value={newData.name}
                onChange={(e) => setNewData({ ...newData, name: e.target.value })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Quantity</FormLabel>
              <Input
                value={newData.quantity}
                onChange={(e) => setNewData({ ...newData, quantity: e.target.value })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                value={newData.price}
                onChange={(e) => setNewData({ ...newData, price: e.target.value })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Created Date</FormLabel>
              <Input
                type="date"
                value={newData.createdDate}
                onChange={(e) => setNewData({ ...newData, createdDate: e.target.value })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddData}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DataTable;
