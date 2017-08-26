import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/main.css';

class Main extends Component {

  render() {
    const video = this.props.videoImg;
    if(this.props.videoImg.length > 1) {
    return (
        <div className="main">
          <ul className="main_list">
            {video.map((movie, index) =>
              <li className="main_list__item" key={index}>
              <a href={`/movie/${movie.id.videoId}`}>
               <img src={movie.snippet.thumbnails.default.url} alt="video img" className='container' />
              </a>
              <a href={`/movie/${movie.id.videoId}`}>{movie.snippet.title}</a>
              </li>
            )}
          </ul>
        </div>
    );
  } else {
    return (
      <h1><img className="preloader" src="http://www.otpusk.by/bitrix/templates/main/images/preloader.gif" alt="preloader"/></h1>
    )
  }
  }
}

export default connect(
  state => ({
    videoImg: state.video
  })
)(Main)
