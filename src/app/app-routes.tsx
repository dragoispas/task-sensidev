import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../modules/generic/ErrorPage';
import { CharacterGridPage } from '../modules/character-grid/CharacterGridPage';
import { CharacterDetailsPage } from '../modules/character-details/CharacterDetailsPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/character/:id" element={<CharacterDetailsPage />} />
      <Route path="/" element={<CharacterGridPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}