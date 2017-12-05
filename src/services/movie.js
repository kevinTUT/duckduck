import resource from './resource'

export function fetchMovie(id) {
  return resource(`/movie/${id}`)
}

export function fetchMovies(ids) {
  return Promise.all(ids.map(id => fetchMovie(id)))
}

export function fetchMovieByName(name) {
  return resource(`/movie?name=${name}`)
}

export function fetchMovie(id) {
  return resource(`/movie?id=${id}`)
}