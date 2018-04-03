import { getEmptyMap } from './Crossword';

it('renders without crashing', () => {
    expect(getEmptyMap({width: 20, height: 30})).toBeTruthy();
});
