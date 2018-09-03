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
        <Search onSubmit={this.handleSubmit} />
        <Repositories
          repositories={this.state.repositories}
          userHasSubmittedSearch={this.state.userHasSubmittedSearch}
        />
      </div>
    );
  }
}

export default App;
