import React from 'react';
import { Container, Title, Text, Button, Card, Group, Box, Stack } from '@mantine/core';
import { ActionToggle } from './ActionToggle';

function App() {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        minHeight: '100vh',
        transition: 'all 0.3s ease',
      })}
    >
      <Container size="lg" py={100}>
        <Stack spacing={50}>
          <div>
            <Title
              order={1}
              sx={(theme) => ({
                fontSize: '3.5rem',
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                '@media (max-width: 768px)': {
                  fontSize: '2.5rem',
                },
              })}
            >
              Welcome to My Portfolio
            </Title>
            <Text
              mt="xl"
              size="xl"
              sx={(theme) => ({
                color: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[7],
              })}
            >
              Hi, I'm Logan! I love exploring, learning, and meeting new people.
              Here are some of my projects!
            </Text>
            <Group mt="xl">
              <Button
                size="lg"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                component="a"
                href="#projects"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                component="a"
                href="mailto:logan.j.knies@gmail.com"
              >
                Contact Me
              </Button>
            </Group>
          </div>

          <Card
            shadow="sm"
            p="xl"
            radius="md"
            withBorder
            sx={(theme) => ({
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
              },
            })}
          >
            <Title order={3} mb="md">MNIST Digit Recognition Neural Network</Title>
            <Text size="lg" mb="md">
              A Java-based neural network implementation for handwritten digit recognition using the MNIST dataset, featuring:
            </Text>
            <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginBottom: '15px' }}>
              <li>Custom Matrix operations class for neural network computations</li>
              <li>Forward propagation and backpropagation implementation</li>
              <li>Mini-batch gradient descent training</li>
              <li>CLI interface for interactive usage</li>
              <li>Save/Load functionality for trained network states</li>
              <li>Real-time Visualization of digit recognition</li>
              <li>Accuracy metrics per digit</li>
              <li>Misclassified image analysis</li>
            </ul>
            
            <Stack spacing="md">
              <Title order={4}>Project Screenshots:</Title>
              
              <Card withBorder p="sm">
                <Text weight={500} mb="xs">Training Progress</Text>
                <img 
                  src="/images/training-output.png" 
                  alt="Neural Network Training"
                  style={{
                    width: '100%',
                    maxWidth: '600px',
                    borderRadius: '4px'
                  }}
                />
              </Card>

              <Card withBorder p="sm">
                <Text weight={500} mb="xs">Digit Recognition Example</Text>
                <img 
                  src="/images/digit-recognition.png" 
                  alt="Digit Recognition Example"
                  style={{
                    width: '100%',
                    maxWidth: '600px',
                    borderRadius: '4px'
                  }}
                />
              </Card>

              <Card withBorder p="sm">
                <Text weight={500} mb="xs">Accuracy Statistics</Text>
                <img 
                  src="/images/accuracy-stats.png" 
                  alt="Accuracy Statistics"
                  style={{
                    width: '100%',
                    maxWidth: '600px',
                    borderRadius: '4px'
                  }}
                />
              </Card>
            </Stack>
            
            <Button 
              component="a"
              href="https://github.com/ljk005"
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
              fullWidth
              mt="xl"
            >
              View Source Code
            </Button>
          </Card>
        </Stack>
      </Container>
      <ActionToggle />
    </Box>
  );
}

export default App;
