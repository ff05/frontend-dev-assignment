import React, { PureComponent } from 'react';
import IconsSearch from '../Icons/Search';
import IconsCancel from '../Icons/Cancel';
import './SearchBar.css';

class SearchBar extends PureComponent {
  state = {
    isText: false,
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

  handleChange(event) {
    const { value } = event.target;
    this.setState({ 
      textInput: value,
      isText: value ? true : false,
     });
  }

  render() {
    const { isFocus, isText, textInput } = this.state;
    return(
      <div className={isFocus ? "SearchBar SearchBar--highlight" : "SearchBar"}>
        <form className="form">
          <input
            className="form__input"
            type="text"
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleFocus.bind(this)}
            onChange={this.handleChange.bind(this)}
            value={textInput}
            placeholder="Zoeken"
            aria-label="Zoeken"
          />
          <IconsCancel isText={isText} onClick={this.handleClear.bind(this)} />
          <IconsSearch isFocus={isFocus} />
        </form>
      </div>
    )
  }
};

export default SearchBar;
