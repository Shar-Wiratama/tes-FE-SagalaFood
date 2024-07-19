// src/App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <ChakraProvider>
      <AdminPage />
    </ChakraProvider>
  );
}

export default App;
