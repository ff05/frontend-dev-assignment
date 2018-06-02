import React from 'react';
import SearchBar from './index';
import { shallow } from 'enzyme';

describe('<SearchBar />', () => {
  const renderedComponent = shallow(<SearchBar />);

  it('renders without crashing', () => {
    renderedComponent;
  });

  it('should be selectable by class "SearchBar"', function() {
    expect(renderedComponent.is('.SearchBar')).toBe(true);
  });

  it('should contain the form', () => {
    expect(renderedComponent.find('.form').getElement()).toBeDefined();
  })
})
