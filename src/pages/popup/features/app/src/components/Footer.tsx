import { Link } from 'react-router-dom';
import { Footer as FooterComponent, Group, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars, IconSettings } from '@tabler/icons-react';

export const Footer: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <FooterComponent height={40}>
      <Group position='apart' sx={{height: '100%'}} px={10}>
        <ActionIcon 
          color={dark ? 'yellow' : 'blue'}
          variant='transparent'
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {colorScheme === 'dark' ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
        </ActionIcon>
        <ActionIcon component={Link} to="/settings">
          <IconSettings size="1rem" />
        </ActionIcon>
      </Group>
    </FooterComponent>
  );
};