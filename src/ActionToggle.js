import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import './ActionToggle.css';  // Assuming the CSS file is here

export function ActionToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[0],
          color: dark ? theme.colors.yellow[4] : theme.colors.blue[6],
          position: 'fixed',
          top: '20px',
          right: '20px',
          '&:hover': {
            backgroundColor: dark ? theme.colors.dark[5] : theme.colors.gray[1],
          },
        })}
      >
        {dark ? <IconSun size="1.2rem" /> : <IconMoon size="1.2rem" />}
      </ActionIcon>
    </Group>
  );
}
