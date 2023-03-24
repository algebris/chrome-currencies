import { Routes, Route } from 'react-router-dom'
import { MainPage } from '@popup/features/app';
import { SettingsPage } from '@popup/features/settings';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/settings' element={<SettingsPage />} />
    </Routes>
  );
};
