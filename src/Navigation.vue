<template>
  <div class='nav'>
    <ul>
      <li>
        <router-link to='/'>Home</router-link>
        <router-link to='/articles'>Blog</router-link>
      </li>
    </ul>        
  </div>
</template>

<style>
  body {
    margin: 0;
    padding: 0;
    background: #f7f8fa;
  }

  .nav ul {
    list-style: none;
    background-color: #282d31;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  .nav li {
    font-family: "Open Sans", sans-serif;
    font-size: 1.2em;
    line-height: 40px;
    height: 40px;
    border-bottom: 1px solid #888;
  }

  .nav a {
    text-decoration: none;
    color: #fff;
    display: block;
    transition: .3s background-color;
  }

  .nav a:hover {
    background-color: #019fc2;
  }

  .nav a.active {
    background-color: #f7f8fa;
    color: #019fc2;
    cursor: default;
  }
  
  @media screen and (min-width: 700px) {
    .nav li {
      width: 120px;
      border-bottom: none;
      height: 50px;
      line-height: 50px;
      font-size: 1.4em;
    }
 
    .nav li {
      display: inline-block;
      margin-right: -4px;
    }
 
  }
</style>