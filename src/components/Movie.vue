<template>
  <div class="movie">
    <!-- <a :href="movie.alt"></a> -->
    <img :src="movie.image || movie.images && movie.images.large" :alt="movie.title" class="movie-cover">
    <ul class="movie-detail">
      <li><span class="movie-label title">{{ movie.title }}</span></li>
      <li><span class="movie-label">评分：</span>{{ movie.rating.average || 0 }}</li>
      <li><span class="movie-label">地区：</span>{{ movie.countries && movie.countries.join('/') || '暂无' }}</li>
      <li><span class="movie-label">分类：</span>{{ movie.genres && movie.genres.join('/') || '暂无' }}</li>
      <li><span class="movie-label">评论数：</span>{{ movie.comments_count || 0 }}</li>
      <li><span class="movie-label">点评数：</span>{{ movie.ratings_count || 0 }}</li>
      <li><span class="movie-label">上映时间：</span>{{ movie.year || '当前时间' }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'movie-item',
    props: ['movie'],
    // methods: {
    //   remove (movie) {
    //     this.$emit('onRemove', movie)
    //   }
    // },
    computed: {
      actors () {
        return this.movie.casts.map ( item => item.name )
      }
    }
  }
</script>

<style>
  .movie {
    transition: all .5s linear;
    position: relative;
    width: 280px;
    height: 444px;
    overflow: hidden;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 20px #ccc;
    display: inline-block;
    margin-right: 20px;
    margin-top: 20px;
    z-index: 2;
  }

  .movie:nth(4n) {
    margin-right: 0;
  }

  .movie:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px #888;
  }

  .movie:hover > .movie-detail {
    opacity: .7;
    transform: translateY(0);
  }

  .movie-cover {
    float: left;
    height: 100%;
  }

  .movie-detail {
    color: #fff;
    opacity: .7;
    list-style: none;
    position: absolute;
    background-color: #000;
    bottom: 0;
    width: 100%;
    padding: 10px 0;
    margin: 0;
    transition: all 1s ease;
    overflow: hidden;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    transform: translateY(131px);
    z-index: 1;
  }

  .movie-detail li {
    padding-left: 10px;
  }

  .movie-label.title {
    font-size: 18px;
  }
</style>