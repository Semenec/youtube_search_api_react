import React from 'react';
import { connect } from 'react-redux';
import { onSearch } from '../actions/search';
import '../assets/css/header.css';

const Header = ({ onValueSearch, searchValue }) => {

  let valueSearch = '';

    return (
      <div className="header">
        <input type="text" placeholder="Search" ref={(input) => { valueSearch = input }} className="header_input"/>
        <a className="header_btn" onClick={() => onValueSearch(valueSearch.value)} href={`search=${searchValue}`}>submit</a>
      </div>
    )
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
