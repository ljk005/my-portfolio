import React from 'react';
import { MantineProvider, Container, Title, Text, Button, Card, Group } from '@mantine/core';

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        colors: {
          dark: [
            '#1e1e1e', // Custom dark gray background (index 0)
            '#2e2e2e', // Slightly lighter gray for contrast (index 1)
            '#3e3e3e', // Additional shades if needed
          ],
        },
        primaryColor: 'blue', // Highlight color for buttons
        fontFamily: 'Verdana, sans-serif', // Matching VS Code's simplicity
      }}
    >
      <Container
        style={{
          backgroundColor: '#1e1e1e',
          color: '#ffffff',
          minHeight: '100vh',
          padding: '20px',
        }}
      >
        <Title order={1} align="center" mb="lg">
          Welcome to My Portfolio
        </Title>
        <Text size="lg" mt="sm" align="center">
          Hi, I'm Logan! I love exploring, learning, and meeting new people. Here are some of my projects:
        </Text>
        <Group position="center" mt="lg">
          <Button component="a" href="#projects" variant="outline" color="gray">
            View Projects
          </Button>
          <Button component="a" href="mailto:your.email@example.com" color="blue">
            Contact Me
          </Button>
        </Group>

        <Card mt="xl" shadow="sm" radius="md" style={{ backgroundColor: '#2e2e2e' }}>
          <Title order={3}>Featured Project</Title>
          <Text mt="sm" color="dimmed">
            Project Description
          </Text>
        </Card>
      </Container>
    </MantineProvider>
  );
}

export default App;
