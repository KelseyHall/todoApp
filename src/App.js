import { AppBar, Container, Typography } from '@mui/material';

import React from 'react';

import DisplayTodoList from './components/DisplayTodoList';

function App() {
  return (
    <div className="App">
      <AppBar position="sticky">
        <Typography variant="h2" align="center">
          Todo App
        </Typography>
      </AppBar>
      <Container>
        <DisplayTodoList />
      </Container>
    </div>
  );
}

export default App;
