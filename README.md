# GitHub Getter

A single page JavaScript application that allows users to search through Github repositories via keyword

## To run project:

```bash
npm run start
```

## Future Features

### Caching
In order to improve the user experience and to reduce the number of calls to the GitHub API, I would like to implement caching to the fetch script within the Repository service.

### UI
There are many areas in which the user interface can be cleaned up and improved. To highlight a few opportunities:

* When a user searches a new keyword, a loading indication should be added so that he/she knows the request was sent

* When an error occurs, currently there is no handling aside from a console log statement. There should be some sort of client-facing indication when this happens to avoid confusion.

* Showing just a few repositories when a user searches might help to reduce the cognitive load on the user. For example, I would only show five repository cards to begin with, adding a "Show More" button to load the remaining repositories. Seeing up to 100 cards can be overwhelming for the user.

* A fade-in/out or scroll-down/up effect could be added when toggling the card details to improve the user's interaction with the application.

### Accessibility

In future implementations, I would like to add accessibility support including aria labelling, alt tags, etc. The current implementation is, unfortunately, not highly accessible.

### Documentation

Method, class, and general documentation should be added to improve maintainability.

### Testing

Utilizing a framework to test API endpoints, services, and component rendering would help solidify code integrity.
