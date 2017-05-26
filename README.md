# blov

> Front-end for Rails API back-end

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

App.vue:

    <app-navigation></app-navigation>
    
Navigation style:

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

Navigation template:

  <div class='nav'>
    <ul>
      <li>
        <router-link to='/'>Home</router-link>
        <router-link to='/articles'>Blog</router-link>
      </li>
    </ul>    
  </div>



1. Install jQuery using webpack or npm
2. Link to static.css
3. Make AJAX call to get JSON data
4. Extract Article table into a component
5. Inject the Article component into the index.html
6. Run the app to render the list of all articles in http://localhost:8080
7. How to create links? Home, Blog ...


npm install axios --save

--save : You will use this option when you want to save a package dependency for distribution.



http://imcodebased.com/npm-save-or-save-dev-which-one-to-use/
https://medium.com/@bradfmd/vue-vuex-getting-started-f78c03d9f65


https://alligator.io/vuejs/rest-api-axios/

  import axios from 'axios'

  export default {
    name: 'articles',
    data: function () {
      return {
        articles: []
      }
    },
    methods: {
      fetchArticles: function () {
        axios.get('http://localhost:3000/articles').then((response) => {
          this.articles = response.data
        }, (error) => {
          console.log(error)
        })
      }
    },
    mounted: function () {
      this.loadProjects()
    }
  }




<template>
  <div id='container'>
    <h1>My Blog</h1> 

    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles">
          <td>{{article.id}}</td>
          <td>{{article.title}}</td>
        </tr>
      </tbody>
    </table>  
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'articles',
    data: function () {
      return {
        articles: []
      }
    },
    methods: {
      fetchArticles: function () {
        axios.get('http://localhost:3000/articles').then((response) => {
          this.articles = response.data
        }, (error) => {
          console.log(error)
        })
      }
    },
    mounted: function () {
      this.fetchArticles()
    }
  }
</script>

<style>
  body {
    background-color: #444444;
    font-family: Verdana, Helvetica, Arial;
    font-size: 14px;
  }

  a img {
    border: none;
  }

  a {
    color: #0000FF;
  }

  .clear {
    clear: both;
    height: 0;
    overflow: hidden;
  }

  #container {
    width: 75%;
    margin: 0 auto;
    background-color: #FFF;
    padding: 20px 40px;
    border: solid 1px black;
    margin-top: 20px;
    position: relative;
  }

  #flash_notice, #flash_error, #flash_alert {
    padding: 5px 8px;
    margin: 10px 0;
    margin-right: 150px;
  }

  #flash_notice {
    background-color: #CFC;
    border: solid 1px #6C6;
  }

  #flash_error, #flash_alert {
    background-color: #FCC;
    border: solid 1px #C66;
  }

  .field_with_errors {
    display: inline;
  }

  .error_messages {
    width: 400px;
    border: 2px solid #CF0000;
    padding: 0px;
    padding-bottom: 12px;
    margin-bottom: 20px;
    background-color: #f0f0f0;
    font-size: 12px;
  }

  .error_messages h2 {
    text-align: left;
    font-weight: bold;
    padding: 5px 10px;
    font-size: 12px;
    margin: 0;
    background-color: #c00;
    color: #fff;
  }

  .error_messages p {
    margin: 8px 10px;
  }

  form .field, form .actions {
    margin: 12px 0;
  }

  h4 {
    margin-bottom: 5px;
  }

  table {
      border-collapse: collapse;
      width: 100%;
  }

  th, td {
      text-align: left;
      padding: 8px;
  }

  tr:nth-child(even){background-color: #f2f2f2}

  th {
      background-color: #4CAF50;
      color: white;
  }
</style>


