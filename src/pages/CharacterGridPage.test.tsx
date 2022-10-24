import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { store } from '../app/store';
import { CharacterGridPage } from './CharacterGridPage';

test('Renders the grid page and matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <CharacterGridPage />
    </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
