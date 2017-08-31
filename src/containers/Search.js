import React, { Component } from 'react';
import '../assets/css/main.css';
import { connect } from 'react-redux';
import { asyncGetVideo } from '../actions/video';

class Search extends Component {
  componentWillMount() {
    this.props.onSearchVideo(this.props.searchValue);
  }
  render() {
    const movie = this.props.movieImg;
    if (movie) {
      return (
        <div className="main">
          <ul className="main_list">
            {movie.map((movie, index) =>
              <li className="main_list__item" key={index}>
                <a href={`/movie/${movie.id.videoId}`}>
                 <img src={movie.snippet.thumbnails.default.url} alt="video img" className='container' />
                </a>
                <a href={`/movie/${movie.id.videoId}`}>
                  {movie.snippet.title}
                </a>
              </li>
            )}
          </ul>
        </div>
      )
    } else if (this.props.isPreloader) {
      return (
        <h1><img className="preloader" src="http://www.otpusk.by/bitrix/templates/main/images/preloader.gif" alt="preloader"/></h1>
      )
    } else {
    return (
      <h1>error</h1>
    )
  }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    searchValue: ownProps.match.params.search,
    movieImg: state.video[0],
    isPreloader: state.isPreloader
  };
}

export default connect(mapStateToProps,
  dispatch => ({
    onSearchVideo: (value) => {
      dispatch(asyncGetVideo(value))
    }
  })
)(Search)
