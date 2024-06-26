import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export function FixedContainer() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: '#ffeeee', height: '100vh' }} />
        </Container>
      </React.Fragment>
    );
  }

export default function NewPost() {
    return <FixedContainer/>
}