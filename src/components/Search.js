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
      <form onSubmit={this.handleSubmit}>
        <label>Search by keyword:</label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
