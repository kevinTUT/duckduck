<template>
  <div class="movie-view">
    <h1 class="movie-title">电影
      <router-link to="/movie/theaters" tag="span" class="movie-category" active-class="active">正在热映</router-link>
      <router-link to="/movie/coming" tag="span" class="movie-category" active-class="active">即将上映</router-link>
      <router-link to="/movie/top" tag="span" class="movie-category" active-class="active">Top 250</router-link>
    </h1>
      <movie
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie">
      </movie>
    <!-- <transition-group tag="div" class="movie-list" name="movies">
    </transition-group> -->
  </div>
</template>

<script>
  import Movie from './Movie.vue'

  export default {
    props: ['movies'],
    components: { Movie }
  }
</script>

<style>
  .movie-view {
    margin: 20px 0;
  }

  .movie-title {
    margin: 0;
    font-size: 25px;
    font-weight: 100;
    text-shadow: 0 0 2px #ccc;
  }

  .movie-category {
    cursor: pointer;
    margin-left: 10px;
    font-size: 14px;
    transition: all .2s ease;
  }

  .movie-category.active {
    border-bottom: 1px solid #f00;
  }

  .movie-category:hover {
    font-size: 16px;
  }

</style>