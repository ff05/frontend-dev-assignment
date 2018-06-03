import React, { PureComponent } from 'react';
import IconsSearch from '../Icons/Search';
import IconsCancel from '../Icons/Cancel';
import './SearchBar.css';

class SearchBar extends PureComponent {
  state = {
    cancelVisible: false,
    isFocus: false,
    textInput: "",
  }

  handleFocus() {
    this.setState({
      isFocus: !this.state.isFocus,
    });
  }

  handleClear() {
    this.setState({
      textInput: "",
    });
  }

  render() {
    const { isFocus, cancelVisible } = this.state;
    return(
      <div className={isFocus ? "SearchBar SearchBar--highlight" : "SearchBar"}>
        <form className="form">
          <input
            className="form__input"
            type="text"
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleFocus.bind(this)}
            placeholder="Zoeken"
            aria-label="Zoeken"
          />
          <IconsCancel isVisible={cancelVisible} onClick={this.handleClear.bind(this)} />
          <IconsSearch isFocus={isFocus} />
        </form>
      </div>
    )
  }
};

export default SearchBar;
