import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconsCancel from '../components/Icons/Cancel';
import IconsSearch from '../components/Icons/Search';
import SearchBar from '../components/SearchBar';

const styles = {
  height: '40px',
  display: 'flex',
  'justify-content': 'center',
};
const Wrapper = ({ children }) => (
  <div style={styles}>
    { children }
  </div>
);

storiesOf('IconsCancel', module)
  .add('default', () => (
    <Wrapper>
      <IconsCancel isText={true}/>
    </Wrapper>
  ));

storiesOf('IconsSearch', module)
  .add('default', () => (
    <Wrapper>
      <IconsSearch isFocus={false}/>
    </Wrapper>
  ))
  .add('with focus', () => (
    <Wrapper>
      <IconsSearch isFocus={true}/>
    </Wrapper>
  ))

storiesOf('SearchBar', module)
  .add('default', () => (
    <SearchBar />
  ));