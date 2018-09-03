import React, { Component } from 'react';
import Repository from '../services/Repository';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    Repository.index(this.state.value, this.props.onSubmit);
    event.preventDefault();
  }
  render() {
    return (
      <form
        className="search-box__form"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          className="search-box__input"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
