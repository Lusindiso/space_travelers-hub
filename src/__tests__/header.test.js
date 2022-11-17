import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Header from '../components/Header';

describe('Test for Header components', () => {
  it('Check if the Header section are available', () => {
    const Header = renderer.create(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    expect(Header).toMatchSnapshot();
  });
});
