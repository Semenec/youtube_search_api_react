import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncGetVideo } from '../actions/video';
import '../css/main.css';


class Search extends Component {

  render() {
    this.props.onSearchVideo(this.props.searchValue)
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    searchValue: ownProps.match.params.search
  };
}

export default connect(mapStateToProps,
  dispatch => ({
    onSearchVideo: (value) => {
      dispatch(asyncGetVideo(value))
    }
  })
)(Search);
