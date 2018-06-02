import React from 'react';
import App from './App';
import SearchBar from './components/SearchBar';
import { shallow } from 'enzyme';

describe('<App />', () => {
  const renderedComponent = shallow(<App />);

  it('renders without crashing', () => {
    renderedComponent;
  });

  it('should contains the Searchbar', () => {
    expect(renderedComponent.find(SearchBar)).toBeTruthy();
  })
})
