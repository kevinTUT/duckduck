<template>
  <div class="search-view">
    <search @onSearching="search"></search>
    <div class="search-list">
        <search-item v-for="movie in results" :movie="movie" v-if="key"></search-item>
     </div>
  </div>
</template>

<script>
  import Search from '../../components/Search'
  import Result from '../../mock/result.json'
  import SearchItem from '../../components/SearchItem.vue'
  import * as MemberService from 'services/member'

  export default {
    components : { Search, SearchItem },

    data () { return { key: null, results: []} },

    methods: {
      search (key) {
        this.key = key
        this.results = key ? Result.subjects : []

        MemberService.fetchMembers([1,2,3,4,5])
          .then(members => {
            console.log(members)
          })
      }
    }
  }
</script>
,
<style>
  .search-view {
    margin: 20px 0;
  }
</style>