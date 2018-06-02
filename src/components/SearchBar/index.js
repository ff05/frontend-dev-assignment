import React, { PureComponent } from 'react';

class SearchBar extends PureComponent {
  render() {
    return(
    <div className="App">
      <form>
        <input placeholder="Zoeken" />
      </form>
    </div>
    )
  }
};

export default SearchBar;
