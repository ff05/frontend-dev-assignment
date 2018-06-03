import React from 'react';
import IconsSearch from './index';
import { shallow } from 'enzyme';

describe('<IconsSearch />', () => {
  const renderedComponent = shallow(<IconsSearch />);

  it('renders correctly', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
