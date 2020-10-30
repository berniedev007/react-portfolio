import Post1 from '../assets/img/blog/popular-post/post1.jpg';
import Post2 from '../assets/img/blog/popular-post/post2.jpg';
import Post3 from '../assets/img/blog/popular-post/post3.jpg';
import Post4 from '../assets/img/blog/popular-post/post4.jpg';

const initialState = {
  categories: [
    {id: 1, name: 'Technology', count: '37'},
    {id: 2, name: 'Lifestyle', count: '24'},
    {id: 3, name: 'Fashion', count: '59'},
    {id: 4, name: 'Art', count: '29'},
    {id: 5, name: 'Food', count: '15'},
    {id: 6, name: 'Architecture', count: '09'},
    {id: 7, name: 'Adventure', count: '44'}
  ],
  list: [
    {id: 1, img: Post1, title: 'Space The Final Frontier', time: '02 Hours ago'},
    {id: 2, img: Post2, title: 'The Amazing Hubble', time: '02 Hours ago'},
    {id: 3, img: Post3, title: 'Astronomy Or Astrology', time: '03 Hours ago'},
    {id: 4, img: Post4, title: 'Asteroids telescope', time: '01 Hours ago'},
  ]
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
