import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CharacterCard } from './CharacterCard';

test('Correctly renders the content of a CharacterCard', () => {
  const testName = 'test';
  const testImageUrl = 'https://localhost:3000/image.png';
  const testStatus = 'alive';

  render(
    <BrowserRouter>
      <CharacterCard
        id={123}
        name={testName}
        image={testImageUrl}
        status={testStatus}
      />
    </BrowserRouter>
  );

  const cardName = screen.getByTestId('card-name');
  expect(cardName).toBeInTheDocument();
  expect(cardName).toHaveTextContent(testName);

  const cardImage = screen.getByTestId('card-image');
  expect(cardImage).toBeInTheDocument();
  expect(cardImage).toHaveAttribute('src', testImageUrl);

  expect(screen.getByText(`Status: ${testStatus}`)).toBeInTheDocument();
});
