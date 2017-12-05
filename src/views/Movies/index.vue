<template>
  <div class="movie-view">
    <movie-list :movies="movies" @onChangeCategory="loadMovies"></movie-list>
  </div>
</template>

<script>
  import MovieList from '../../components/MovieList.vue'
  import theatersMovies from '../../mock/movies.json'
  import comingMovies from '../../mock/coming.json'
  import topMovies from '../../mock/top.json'

  export default {
    components: { MovieList },

    watch: { '$route': 'loadMovies' },

    data () {
      return { saved: false, movies: [] }
    },

    created () {
      this.loadMovies()
    },

    methods: {
      loadMovies () {
        let category = this.$route.params.category
        switch (category) {
          case 'coming':
            this.movies = comingMovies.subjects
            break
          case 'theaters':
            this.movies = theatersMovies.subjects
            break
          case 'top':
            this.movies = topMovies.subjects
            break
          default:
            this.movies = comingMovies.subjects
        }
      }
    }
  }
</script>