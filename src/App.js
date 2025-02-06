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
                href="mailto:ljk005@email.latech.edu"
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
                  src={`${process.env.PUBLIC_URL}/images/training-output.png`}
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
                  src={`${process.env.PUBLIC_URL}/images/digit-recognition.png`}
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
                  src={`${process.env.PUBLIC_URL}/images/accuracy-stats.png`}
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

          <Group grow>
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
              <Title order={3} mb="md">Othello Game with AI</Title>
              <Text size="lg" mb="md">
                A Python implementation of the classic Othello/Reversi game with an AI opponent using minimax algorithm and alpha-beta pruning:
              </Text>
              <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginBottom: '15px' }}>
                <li>Graphical user interface using Tkinter</li>
                <li>AI opponent with adjustable difficulty (search depth)</li>
                <li>Minimax algorithm with alpha-beta pruning optimization</li>
                <li>Move history tracking and replay</li>
                <li>Debug mode for AI decision visualization</li>
                <li>Position evaluation using weighted board heuristics</li>
                <li>Support for both human and AI players</li>
              </ul>
              
              <Card withBorder p="sm">
                <Text weight={500} mb="xs">Game Interface</Text>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/othello-gui.png`}
                  alt="Othello Game Interface"
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '4px',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
              </Card>
              
              <Button 
                component="a"
                href="https://github.com/ljk005/Othello-AI"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                fullWidth
                mt="xl"
              >
                View Source Code
              </Button>
            </Card>

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
              <Title order={3} mb="md">New Project</Title>
              <Text size="lg" mb="md">
                Description of your new project will go here.
              </Text>
              {/* Add content for your new project card */}
            </Card>
          </Group>
        </Stack>
      </Container>
      <ActionToggle />
    </Box>
  );
}

export default App;
