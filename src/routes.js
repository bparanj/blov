import Blog from './Blog.vue';
import Home from './Home.vue';

export const routes = [
  { path: '', component: Home },
  { path: '/articles', component: Blog }
];