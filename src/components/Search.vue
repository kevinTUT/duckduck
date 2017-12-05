<template>
  <div class="search">
    <input
      type="text"
      name="search"
      id="search"
      class="search-input"
      placeholder="搜索电影..."
      v-model="key">
  </div>
</template>

<script>
  export default {
    data () {
      return { key: null}
    },

    watch: {
      key (nv, ov) {
        this.$emit('onSearching', nv)
      }
    }
  }
</script>

<style>
  .search {
    text-align: center;
    width: 100%;
  }

  .search.pin {
    position: fixed;
    left: 200px;
    top: 104px;
    z-index: 999;
    width: 200px;
  }

  .search-input {
    color: #999;
    outline: none;
    padding: 15px;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #e2e2e2;
    transition: all .4s ease;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
  }

  .search-input:focus {
    width: 100%;
  }
</style>