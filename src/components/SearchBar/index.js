import React, { PureComponent } from 'react';
import api from '../../api/client';
import IconsSearch from '../Icons/Search';
import IconsCancel from '../Icons/Cancel';
import './SearchBar.css';

class SearchBar extends PureComponent {
  state = {
    isText: false,
    isFocus: false,
    textInput: "",
    searchTerms: [],
  };

  handleFocus() {
    this.setState({
      isFocus: !this.state.isFocus,
    });
  };

  handleClear(event) {
    event.preventDefault();
    this.setState({
      textInput: "",
      searchTerms: [],
    });
  };

  handleChange(event) {
    const { value } = event.target;
    this.setState({ 
      textInput: value,
      isText: value ? true : false,
     });
  };

  handleKeyUp(event) {
    const { value } = event.target;
    if (value.length >= 2) {
      api(value)
      .then(
        (response) => this.getSearchTerms(response)
      )
      .catch(error => console.log(error))
    }
    if (this.state.searchTerms.length > 0)
      this.setState({ searchTerms: [] })
  };
  
  handleSearch(event) {
    event.preventDefault();
    api();
  };

  getSearchTerms(data) {
    if (data) {
      const terms = data.map((item) => ({
        term: item.searchterm,
        nr: item.nrResults,
      }));
      this.setState({
        searchTerms: terms,
      });
    }
  }

  render() {
    const { isFocus, isText, textInput, searchTerms } = this.state;
    return(
      <div className={isFocus ? "SearchBar SearchBar--highlight" : "SearchBar"}>
        <form className="form">
          <input
            className="form__input"
            type="text"
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleFocus.bind(this)}
            onChange={this.handleChange.bind(this)}
            onKeyUp={this.handleKeyUp.bind(this)}
            value={textInput}
            placeholder="Zoeken"
            aria-label="Zoeken"
          />
          <IconsCancel isText={isText} onClick={this.handleClear.bind(this)} />
          <IconsSearch onClick={this.handleSearch.bind(this)} isFocus={isFocus} />
        </form>
        {searchTerms.length > 0 &&
          <ul className="results-list">
            {searchTerms.map((item, index) => {
              const position = item.term.indexOf(textInput);
              const sub = item.term.slice(position, position + textInput.length);
              const left = item.term.slice(0, position);
              const right = item.term.slice(position + textInput.length);
              return (
                <li className="results-list__result" key={item+index}>
                  <span className="results-list__result__term1">{left}</span>
                  <span className="results-list__result__term2">{sub}</span>
                  <span className="results-list__result__term3">{right}</span>
                  <span className="results-list__result__number"> ({item.nr})</span>
                </li>
              )
            })}
          </ul>
        }
      </div>
    )
  }
};

export default SearchBar;
