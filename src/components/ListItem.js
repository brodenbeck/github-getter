import React, { Component } from 'react';
import Star from '../images/star.png';
import Arrow from '../images/arrow-down.png';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };

    this.toggleItemDetails = this.toggleItemDetails.bind(this);
  }
  toggleItemDetails() {
    this.setState({isExpanded: !this.state.isExpanded});
  }
  render() {
    return (
      <li className={"card " + (this.state.isExpanded ? "expanded" : "")}>
        <span className="card__header" onClick={this.toggleItemDetails}>
          <h2>{this.props.repository.name} / {this.props.repository.owner}</h2>
          <img className="icon__arrow-down" src={Arrow} alt="" />
        </span>
        {
          this.state.isExpanded &&
          <span className="card__content">
            <p className="card__body">{this.props.repository.description}</p>
            <span className="card__footer">
              <span className="card__footer-item">{this.props.repository.language}</span>
              <span className="card__footer-item">
                <img className="icon__star m-r-5" src={Star} alt="" />
                {this.props.repository.followers}
              </span>
              <span className="card__footer-item">
                <a href={this.props.repository.url} target="_blank">{this.props.repository.url}</a>
              </span>
            </span>
          </span>
        }
      </li>
    );
  }
}

export default ListItem;
