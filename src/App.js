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
        backgroundImage: theme.colorScheme === 'dark'
          ? `
            radial-gradient(circle at 50% 0%, rgba(25, 113, 194, 0.15), rgba(0, 0, 0, 0) 50%),
            radial-gradient(circle at 0% 0%, rgba(34, 139, 230, 0.1), rgba(0, 0, 0, 0) 40%),
            radial-gradient(circle at 100% 0%, rgba(56, 178, 172, 0.1), rgba(0, 0, 0, 0) 40%),
            linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)
          `
          : `
            radial-gradient(circle at 50% 0%, rgba(25, 113, 194, 0.08), rgba(255, 255, 255, 0) 50%),
            radial-gradient(circle at 0% 0%, rgba(34, 139, 230, 0.05), rgba(255, 255, 255, 0) 40%),
            radial-gradient(circle at 100% 0%, rgba(56, 178, 172, 0.05), rgba(255, 255, 255, 0) 40%),
            linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.03) 100%)
          `,
      })}
    >
      <Container size="lg" py={100}>
        <Stack spacing={80}>
          <div style={{ textAlign: 'center' }}>
            <Title
              order={1}
              sx={(theme) => ({
                fontSize: '4.5rem',
                background: theme.colorScheme === 'dark'
                  ? 'linear-gradient(135deg, #4dabf7 0%, #228be6 50%, #38b2ac 100%)'
                  : 'linear-gradient(135deg, #228be6 0%, #1c7ed6 50%, #319795 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1.5rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                textShadow: theme.colorScheme === 'dark'
                  ? '0 0 30px rgba(77, 171, 247, 0.2)'
                  : '0 0 30px rgba(34, 139, 230, 0.2)',
                '@media (max-width: 768px)': {
                  fontSize: '2.5rem',
                },
              })}
            >
              Welcome to My Portfolio
            </Title>
            <Text
              size="xl"
              sx={(theme) => ({
                color: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[7],
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6,
                fontSize: '1.25rem',
              })}
            >
              Hi, I'm Logan! I love exploring, learning, and meeting new people.
              Here are some of my projects!
            </Text>
          </div>

          <Card
            shadow="sm"
            p="xl"
            radius="lg"
            withBorder
            sx={(theme) => ({
              backgroundColor: theme.colorScheme === 'dark' 
                ? 'rgba(37, 38, 43, 0.7)' 
                : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(12px)',
              border: `1px solid ${
                theme.colorScheme === 'dark' 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.1)'
              }`,
              transition: 'all 0.3s ease',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: theme.colorScheme === 'dark'
                  ? '0 20px 40px rgba(0, 0, 0, 0.5)'
                  : '0 20px 40px rgba(0, 0, 0, 0.1)',
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
              
              <Card 
                withBorder 
                p="sm"
                sx={(theme) => ({
                  backgroundColor: theme.colorScheme === 'dark' 
                    ? 'rgba(26, 27, 30, 0.7)'
                    : 'rgba(248, 249, 250, 0.7)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease',
                  border: `1px solid ${
                    theme.colorScheme === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)'
                  }`,
                  '&:hover': {
                    transform: 'scale(1.01)',
                    boxShadow: theme.colorScheme === 'dark'
                      ? '0 8px 20px rgba(0, 0, 0, 0.3)'
                      : '0 8px 20px rgba(0, 0, 0, 0.1)',
                  },
                })}
              >
                <Text weight={500} mb="xs">Training Progress</Text>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/training-output.png`}
                  alt="Neural Network Training"
                  style={{
                    width: '100%',
                    maxWidth: '600px',
                    borderRadius: '4px',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
              </Card>

              <Card 
                withBorder 
                p="sm"
                sx={(theme) => ({
                  backgroundColor: theme.colorScheme === 'dark' 
                    ? 'rgba(26, 27, 30, 0.7)'
                    : 'rgba(248, 249, 250, 0.7)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease',
                  border: `1px solid ${
                    theme.colorScheme === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)'
                  }`,
                  '&:hover': {
                    transform: 'scale(1.01)',
                    boxShadow: theme.colorScheme === 'dark'
                      ? '0 8px 20px rgba(0, 0, 0, 0.3)'
                      : '0 8px 20px rgba(0, 0, 0, 0.1)',
                  },
                })}
              >
                <Text weight={500} mb="xs">Digit Recognition Example</Text>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/digit-recognition.png`}
                  alt="Digit Recognition Example"
                  style={{
                    width: '100%',
                    maxWidth: '600px',
                    borderRadius: '4px',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
              </Card>

              <Card 
                withBorder 
                p="sm"
                sx={(theme) => ({
                  backgroundColor: theme.colorScheme === 'dark' 
                    ? 'rgba(26, 27, 30, 0.7)'
                    : 'rgba(248, 249, 250, 0.7)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease',
                  border: `1px solid ${
                    theme.colorScheme === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)'
                  }`,
                  '&:hover': {
                    transform: 'scale(1.01)',
                    boxShadow: theme.colorScheme === 'dark'
                      ? '0 8px 20px rgba(0, 0, 0, 0.3)'
                      : '0 8px 20px rgba(0, 0, 0, 0.1)',
                  },
                })}
              >
                <Text weight={500} mb="xs">Accuracy Statistics</Text>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/accuracy-stats.png`}
                  alt="Accuracy Statistics"
                  style={{
                    width: '100%',
                    maxWidth: '600px',
                    borderRadius: '4px',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
              </Card>

            </Stack>
            
            <Button 
              component="a"
              href="https://github.com/ljk005"
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
              fullWidth
              mt="xl"
              sx={{
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            >
              View Source Code
            </Button>
          </Card>

          <Group 
            grow 
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'stretch',
              '& > *': {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              },
              '@media (max-width: 768px)': {
                flexDirection: 'column',
                gap: theme.spacing.md,
                '& > *': {
                  width: '100% !important',
                  maxWidth: 'none !important',
                  marginLeft: '0 !important',
                  marginRight: '0 !important',
                  flex: 'none !important',
                  height: 'auto',
                },
              },
            })}
          >
            <Card
              shadow="sm"
              p="xl"
              radius="lg"
              withBorder
              sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' 
                  ? 'rgba(37, 38, 43, 0.7)' 
                  : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${
                  theme.colorScheme === 'dark' 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'rgba(0, 0, 0, 0.1)'
                }`,
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.colorScheme === 'dark'
                    ? '0 20px 40px rgba(0, 0, 0, 0.5)'
                    : '0 20px 40px rgba(0, 0, 0, 0.1)',
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
              
              <Card 
                withBorder 
                p="sm"
                sx={(theme) => ({
                  backgroundColor: theme.colorScheme === 'dark' 
                    ? 'rgba(26, 27, 30, 0.7)'
                    : 'rgba(248, 249, 250, 0.7)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease',
                  border: `1px solid ${
                    theme.colorScheme === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)'
                  }`,
                  '&:hover': {
                    transform: 'scale(1.01)',
                    boxShadow: theme.colorScheme === 'dark'
                      ? '0 8px 20px rgba(0, 0, 0, 0.3)'
                      : '0 8px 20px rgba(0, 0, 0, 0.1)',
                  },
                })}
              >
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
                gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
                fullWidth
                mt="xl"
                sx={{
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                View Source Code
              </Button>
            </Card>

            <Card
              shadow="sm"
              p="xl"
              radius="lg"
              withBorder
              sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' 
                  ? 'rgba(37, 38, 43, 0.7)' 
                  : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${
                  theme.colorScheme === 'dark' 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'rgba(0, 0, 0, 0.1)'
                }`,
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.colorScheme === 'dark'
                    ? '0 20px 40px rgba(0, 0, 0, 0.5)'
                    : '0 20px 40px rgba(0, 0, 0, 0.1)',
                },
              })}
            >
              <Title order={3} mb="md">Access Control System</Title>
              <Text size="lg" mb="md">
                An in-progress team based project where we are learning to store password hashes, use Docker containers, explore Javascript development, role-based access control, and endpoint logging.
              </Text>
              <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginBottom: '15px' }}>
                <li>Containerized microservices architecture using Docker and Docker Compose</li>
                <li>User management API with secure authentication</li>
                <li>TOTP (Time-based One-Time Password) authenticator service</li>
                <li>MySQL databases for user and data management</li>
                <li>JWT-based authentication system</li>
                <li>Secure password hashing with pepper</li>
                <li>Network isolation using Docker bridge networking</li>
              </ul>
              
              <Card 
                withBorder 
                p="sm"
                sx={(theme) => ({
                  backgroundColor: theme.colorScheme === 'dark' 
                    ? 'rgba(26, 27, 30, 0.7)'
                    : 'rgba(248, 249, 250, 0.7)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease',
                  border: `1px solid ${
                    theme.colorScheme === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)'
                  }`,
                  '&:hover': {
                    transform: 'scale(1.01)',
                    boxShadow: theme.colorScheme === 'dark'
                      ? '0 8px 20px rgba(0, 0, 0, 0.3)'
                      : '0 8px 20px rgba(0, 0, 0, 0.1)',
                  },
                })}
              >
                <Text weight={500} mb="xs">Logged In Example</Text>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/access-control.png`}
                  alt="Access Control System Architecture"
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
                href="https://github.com/ljk005/AccessControlProject"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
                fullWidth
                mt="xl"
                sx={{
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                View Source Code
              </Button>
            </Card>
          </Group>

          <Group 
            grow 
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'stretch',
              '& > *': {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              },
              '@media (max-width: 768px)': {
                flexDirection: 'column',
                gap: theme.spacing.md,
                '& > *': {
                  width: '100% !important',
                  maxWidth: 'none !important',
                  marginLeft: '0 !important',
                  marginRight: '0 !important',
                  flex: 'none !important',
                  height: 'auto',
                },
              },
            })}
          >
            <Card
              shadow="sm"
              p="xl"
              radius="lg"
              withBorder
              sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' 
                  ? 'rgba(37, 38, 43, 0.7)' 
                  : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${
                  theme.colorScheme === 'dark' 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'rgba(0, 0, 0, 0.1)'
                }`,
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.colorScheme === 'dark'
                    ? '0 20px 40px rgba(0, 0, 0, 0.5)'
                    : '0 20px 40px rgba(0, 0, 0, 0.1)',
                },
              })}
            >
              <div>
                <Title order={3} mb="md">Google Cloud Computing Foundations</Title>
                <Text size="lg" mb="md">
                  Recieved the Google Cloud Computing Foundations Certificate, covering essential cloud computing concepts and Google Cloud Platform fundamentals:
                </Text>
                <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginBottom: '15px' }}>
                  <li>Cloud computing infrastructure and services</li>
                  <li>Virtual machines and containers</li>
                  <li>Cloud storage and databases</li>
                  <li>Networking and security in the cloud</li>
                </ul>
              </div>
              
              <Card 
                withBorder 
                p="sm"
                sx={(theme) => ({
                  backgroundColor: theme.colorScheme === 'dark' 
                    ? 'rgba(26, 27, 30, 0.7)'
                    : 'rgba(248, 249, 250, 0.7)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease',
                  border: `1px solid ${
                    theme.colorScheme === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)'
                  }`,
                  '&:hover': {
                    transform: 'scale(1.01)',
                    boxShadow: theme.colorScheme === 'dark'
                      ? '0 8px 20px rgba(0, 0, 0, 0.3)'
                      : '0 8px 20px rgba(0, 0, 0, 0.1)',
                  },
                })}
              >
                <Text weight={500} mb="xs">Certificate</Text>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/GCCF.png`}
                  alt="Google Cloud Computing Foundations Certificate"
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '4px',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
              </Card>
            </Card>

            <Card
              shadow="sm"
              p="xl"
              radius="lg"
              withBorder
              sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' 
                  ? 'rgba(37, 38, 43, 0.7)' 
                  : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${
                  theme.colorScheme === 'dark' 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'rgba(0, 0, 0, 0.1)'
                }`,
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.colorScheme === 'dark'
                    ? '0 20px 40px rgba(0, 0, 0, 0.5)'
                    : '0 20px 40px rgba(0, 0, 0, 0.1)',
                },
              })}
            >
              <div>
                <Title order={3} mb="md">TryHackMe Pre-Security Path</Title>
                <Text size="lg" mb="md">
                  Completed the TryHackMe Pre-Security learning path, establishing a strong foundation in cybersecurity fundamentals my freshman year of college:
                </Text>
                <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginBottom: '15px' }}>
                  <li>Network fundamentals and security</li>
                  <li>Web application security basics</li>
                  <li>Linux and Windows systems</li>
                  <li>Security protocols and best practices</li>
                </ul>
              </div>
              
              <Card 
                withBorder 
                p="sm"
                sx={(theme) => ({
                  backgroundColor: theme.colorScheme === 'dark' 
                    ? 'rgba(26, 27, 30, 0.7)'
                    : 'rgba(248, 249, 250, 0.7)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease',
                  border: `1px solid ${
                    theme.colorScheme === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)'
                  }`,
                  '&:hover': {
                    transform: 'scale(1.01)',
                    boxShadow: theme.colorScheme === 'dark'
                      ? '0 8px 20px rgba(0, 0, 0, 0.3)'
                      : '0 8px 20px rgba(0, 0, 0, 0.1)',
                  },
                })}
              >
                <Text weight={500} mb="xs">Certificate</Text>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/THM.png`}
                  alt="TryHackMe Pre-Security Certificate"
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '4px',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
              </Card>
            </Card>
          </Group>

          <Group position="center" spacing="md">
            <Button
              size="lg"
              variant="gradient"
              gradient={(theme) => ({ 
                from: theme.colorScheme === 'dark' ? '#4dabf7' : '#228be6',
                to: '#38b2ac',
                deg: 135
              })}
              sx={{
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(8px)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              sx={(theme) => ({
                borderColor: theme.colorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[6],
                color: theme.colorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[6],
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[0],
                  transform: 'translateY(-2px)',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                },
              })}
              component="a"
              href="mailto:ljk005@email.latech.edu"
            >
              Contact Me
            </Button>
          </Group>
        </Stack>
      </Container>
      <ActionToggle />
    </Box>
  );
}

export default App;
