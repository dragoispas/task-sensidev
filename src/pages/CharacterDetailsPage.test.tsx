import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { store } from '../app/store';
import { CharacterDetailsPage } from './CharacterDetailsPage';

test('Renders the details page and matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <CharacterDetailsPage />
    </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
