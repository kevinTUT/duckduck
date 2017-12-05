<template>
  <div class="search-item">
    <div class="search-item-cover">
        <img :src="movie.image || movie.images && movie.images.medium" alt="movie.title">
        <p class="search-item-title">{{ movie.title }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['movie']
  }
</script>

<style>

</style>