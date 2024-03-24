import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }
  const {movies} = props
  return (
    <>
      <Slider {...settings}>
        {movies.map(eachMovies => (
          <MovieItem key={eachMovies.id} eachMovies={eachMovies} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
