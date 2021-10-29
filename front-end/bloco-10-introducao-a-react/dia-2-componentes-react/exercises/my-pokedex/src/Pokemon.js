import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';


class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    const {value, measurementUnit} = averageWeight; 

    return (
      <div className='pokemon'>
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>
          {`Average weight: ${value} ${measurementUnit}`}
          </p>
          <div>
            <img src={image} alt={name}/>
          </div>
        </div>
      </div>
    );
  }
}
