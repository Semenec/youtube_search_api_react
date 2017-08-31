import React from 'react';
import { connect } from 'react-redux';
import '../assets/css/movie.css';

const Movie = ({ videoID }) => {
  return (
    <div className="movie"><input type="button" value="Come back" onClick={ () => history.back() } />
    <iframe width="100%" height="500px" src={videoID} frameBorder="0" allowFullScreen></iframe></div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    videoID: "https://www.youtube.com/embed/" + ownProps.match.params.id + '?autoplay=1'
  };
}

export default connect(mapStateToProps)(Movie);
