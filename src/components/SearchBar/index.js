import React, { PureComponent } from 'react';
import './SearchBar.css';

class SearchBar extends PureComponent {
  render() {
    return(
      <div className="SearchBar">
        <form className="form">
          <input className="form__input" placeholder="Zoeken" />
          {this.props.children}
        </form>
      </div>
    )
  }
};

export default SearchBar;
