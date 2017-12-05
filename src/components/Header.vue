<template>
  <header class="app-header">
    <router-link to="/movie">
      <img class="logo" src="http://image.flaticon.com/icons/svg/189/189000.svg" alt="duckduckgo">
    </router-link>
    <router-link to="/search" class="search" v-if="$route.path !== '/search'">
      <img src="http://image.flaticon.com/icons/svg/188/188918.svg" alt="search...">
    </router-link>
  </header>
</template>

 <style>
  .app-header {
    margin-bottom: 20px;
    transition: all 1s ease;
  }

  .app-header a {
    display: block;
  }

  .app-header .logo {
    width: 50px;
    animation: rockDuck .5s 1s infinite linear;
  }

  .app-header .search {
    width: 35px;
    position: absolute;
    right: 15px;
    top: 15px;
  }

  .app-header input {
    text-align: center;
    width: 100%;
  }

  .app-header input {
    color: #999;
    outline: none;
    padding: 15px;
    width: 200px;
    border: 0;
    border-bottom: 1px solid #e2e2e2;
    transition: all .4s ease;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
  }

  .app-header input:focus {
    width: 70%;
  }

  @keyframes rockDuck {
    0% {
      transform: rotateZ(0deg)
    }
    50% {
      transform: rotateZ(25deg)
    }
    100% {
      transform: rotateZ(0deg)
    }
  }
 </style>