import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onSearch } from '../actions/search';
import '../css/header.css';


class Header extends Component {

  render() {
    return (
      <div className="header">
      <input type="text" placeholder="Search" ref={(input) => { this.valueSearch = input }} className="header_input"/>
       <a className="header_btn" onClick={() => this.props.onValueSearch(this.valueSearch.value)} href={`search=${this.props.searchValue}`}>submit</a>
      </div>
    )
  }
}

export default connect(
  state => ({
    searchValue: state.search,
    videoImg: state.video
  }),
  dispatch => ({
    onValueSearch: (value) => {
      dispatch(onSearch(value))
    }

  })
)(Header)
