<template>
  <div id="app">
    <app-header></app-header>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from './components/Header'
  import AppFooter from './components/Footer'
  export default {
    components: { AppHeader, AppFooter }
  }
</script>

<style>
  #app {
    font: 14px/1.5 'Microsoft YaHei', Arial, sans-serif;
    width: 900px;
    margin: 20px auto;
    position: relative;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>