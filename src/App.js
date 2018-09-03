import React, { Component } from 'react';
import Search from './components/Search';
import Repositories from './components/Repositories';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      userHasSubmittedSearch: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(repositories) {
    this.setState({
      repositories: repositories,
      userHasSubmittedSearch: true,
    });
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <section className="search-box">
            <h1 className="text-center color-white">Search GitHub repositories by keyword.</h1>
            <Search onSubmit={this.handleSubmit} />
          </section>
          <Repositories
            repositories={this.state.repositories}
            userHasSubmittedSearch={this.state.userHasSubmittedSearch}
          />
        </div>
      </div>
    );
  }
}

export default App;
