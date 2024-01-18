import { responsiveStyle } from './index.css';

describe('responsiveStyle', () => {
  it('should return an object with media queries', () => {
    expect(responsiveStyle({ s: { width: '10rem' }, l: { width: '30rem' } })).toMatchSnapshot();
  });
});
