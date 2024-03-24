import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const filterActionMovies = () => {
    const {moviesList} = props
    return moviesList.filter(
      eachActionMovieItem => eachActionMovieItem.categoryId === 'ACTION',
    )
  }

  const filterComedyMovies = () => {
    const {moviesList} = props
    return moviesList.filter(
      eachComedyMovieItem => eachComedyMovieItem.categoryId === 'COMEDY',
    )
  }

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
        className="primeVideo-img"
      />
      <div className="movies-container">
        <h1 className="movie-heading">Action Movies</h1>
        <MoviesSlider movies={filterActionMovies()} />
        <h1 className="movie-heading">Comedy Movies</h1>
        <MoviesSlider movies={filterComedyMovies()} />
      </div>
    </div>
  )
}

export default PrimeVideo
