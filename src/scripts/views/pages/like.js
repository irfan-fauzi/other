import FavoriteMovieIdb from '../../data/favoritemovie-idb'
import { createMovieItemTemplate } from '../templates/template-creator'

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="movies">

        </div>
      </div>
    `
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies()
    const movieContainer = document.querySelector('#movies')
    movies.forEach((movie) => {
      movieContainer.innerHTML += createMovieItemTemplate(movie)
    })
  },
}

export default Like
