import PropTypes from 'prop-types';
import { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <label>
        <span> Find contacts by name </span>
        <input type="text" />
      </label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;