import React from 'react';
import IconsCancel from './index';
import { shallow } from 'enzyme';

describe('<IconsCancel />', () => {
  const renderedComponent = shallow(<IconsCancel />);

  it('renders correctly', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
})
