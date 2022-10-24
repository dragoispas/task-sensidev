import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage';
import { CharacterGridPage } from '../pages/CharacterGridPage';
import { CharacterDetailsPage } from '../pages/CharacterDetailsPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/character/:id" element={<CharacterDetailsPage />} />
      <Route path="/" element={<CharacterGridPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}