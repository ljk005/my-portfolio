import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import './ActionToggle.css';  // Assuming the CSS file is here

export function ActionToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        <IconSun className={`icon ${colorScheme === 'light' ? 'light' : 'hidden'}`} stroke={1.5} />
        <IconMoon className={`icon ${colorScheme === 'dark' ? 'dark' : 'hidden'}`} stroke={1.5} />
      </ActionIcon>
    </Group>
  );
}
