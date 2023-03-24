import { useNavigate } from 'react-router-dom';
import {
  AppShell,
  Navbar,
  NavLink,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { IconHome } from '@tabler/icons-react';

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <AppShell
      styles={theme => ({
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      header={
        <Navbar>
          <NavLink label="Back" icon={<IconHome size="1rem" onClick={()=>navigate(-1)}/>} />
        </Navbar>
      }
    >
      <Text>Settings Page</Text>
    </AppShell>
  );
}