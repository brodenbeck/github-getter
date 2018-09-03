import React from 'react';
import ListItem from './ListItem';

const Repositories = ({repositories, userHasSubmittedSearch}) => {
  if (repositories.length > 0 ){
    return (
      <ul>
        { repositories.map(repository => <ListItem repository={repository}></ListItem>) }
      </ul>
    )
  }
  else if (userHasSubmittedSearch) {
    return (
      <p>Nothing matches your search query.</p>
    );
  }
  else {
    return null;
  }
}

export default Repositories;