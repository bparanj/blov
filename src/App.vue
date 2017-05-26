<template>
  <div id="container">
    <h1>Routing Demo</h1> 
    <hr>
    <app-navigation></app-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from './Navigation.vue';
  export default {
    components: {
      appNavigation: Navigation
    }
  }
</script>


<style>
</style>
