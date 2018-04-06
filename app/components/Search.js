import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactRouter from 'react-router-dom';

class Search extends Component {
  state = {
      search: '',
  }
  handleSubmitZipcode = () => {
    this.props.onSubmitZipcode(this.state.search)

    this.setState(function () {
      return {
        search: ''
      }
    })
  }
  handleUpdateZipcode = (e) => {
    var zip = e.target.value;
    this.setState(function () {
      return {
        search: zip
      }
    });
  }
  render() {
    return (
      <div
        className='zipcode-container'
        style={{flexDirection: this.props.direction}}>
        <input
          className='form-control'
          onChange={this.handleUpdateZipcode}
          placeholder='St. George,  Utah '
          type='text'
          value={this.state.search} />
        <button
          type='button'
          style={{margin: 10}}
          className='btn btn-success'
          onClick={this.handleSubmitZipcode}>
            Get Weather
        </button>
      </div>
    )
  }
}

Search.defaultProps = {
  direction: 'column'
}

Search.propTypes = {
  direction: PropTypes.string,
}

module.exports = Search;