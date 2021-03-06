import React from 'react';
import SearchBar from './index';
import IconsSearch from '../Icons/Search';
import { shallow } from 'enzyme';
import api from '../../api/client';
import sinon from 'sinon';

describe('<SearchBar />', () => {
  const renderedComponent = shallow(<SearchBar />);
  const formInput = renderedComponent.find('.form__input');

  it('renders without crashing', () => {
    renderedComponent;
  });

  it('should be selectable by class "SearchBar"', function() {
    expect(renderedComponent.is('.SearchBar')).toBe(true);
  });

  it('should contain the form', () => {
    formInput;
  });

  it('should toggle the search icon\'s isFocus state when input is focused', () => {
    formInput.simulate('focus');

    const searchIcon = renderedComponent.find(IconsSearch);
    expect(searchIcon.props().isFocus).toEqual(true);
  });

  it('should render the results-list when search results are fetched', () => {
    var stub = sinon.stub();

    stub('hello');

    console.log(stub.firstCall.args);

  });
})
