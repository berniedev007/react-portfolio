import { combineReducers } from "redux";
import blogs from './blogs';
import posts from './posts';
import portfolioes from './portfolioes';
import brands from './brands';
import services from './services';
import testimonials from './testimonials';

export default combineReducers({
  blogs,
  posts,
  portfolioes,
  brands,
  services,
  testimonials
});