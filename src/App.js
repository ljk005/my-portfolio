import React from 'react';
import { MantineProvider, Container, Title, Text, Button, Card, Group } from '@mantine/core';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container>
        <Title order={1}>Welcome to My Portfolio</Title>
        <Text mt="sm">
          Hi, I'm Logan! I love exploring, learning, and meeting new people. Here are some of my projects
        </Text>
        <Group mt="lg">
          <Button component="a" href="#projects" variant="outline">
            View Projects
          </Button>
          <Button component="a" href="mailto:your.email@example.com">
            Contact Me
          </Button>
        </Group>

        <Card mt="xl" shadow="sm">
          <Title order={3}>Featured Project</Title>
          <Text>
           Project Description
          </Text>
        </Card>
      </Container>
    </MantineProvider>
  );
}

export default App;
