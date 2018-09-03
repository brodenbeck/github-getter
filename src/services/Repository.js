class Repository {
  static index(query, successCB = () => {}, failureCB = () => {}) {
    fetch(`https://api.github.com/legacy/repos/search/${query}`)
      .then(response => response.json())
      .then(data => data.repositories)
      .then(repositories => successCB(repositories))
      .catch(error => failureCB(error));
  }
}

export default Repository;