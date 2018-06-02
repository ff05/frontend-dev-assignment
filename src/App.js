import React from 'react';
import SearchBar from './components/SearchBar';
import IconsSearch from './components/Icons/Search';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <SearchBar>
        <IconsSearch />
      </SearchBar>
    </div>
  );
};

export default App;
