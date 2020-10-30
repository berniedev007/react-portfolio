import Category1 from '../assets/img/blog/cat-post/cat-post-3.jpg';
import Category2 from '../assets/img/blog/cat-post/cat-post-2.jpg';
import Category3 from '../assets/img/blog/cat-post/cat-post-1.jpg';

import Blog1 from '../assets/img/blog/main-blog/m-blog-1.jpg';
import Blog2 from '../assets/img/blog/main-blog/m-blog-2.jpg';
import Blog3 from '../assets/img/blog/main-blog/m-blog-3.jpg';
import Blog4 from '../assets/img/blog/main-blog/m-blog-4.jpg';
import Blog5 from '../assets/img/blog/main-blog/m-blog-5.jpg';

const initialState = {
  categories: [
    {id: 1, name: 'Social Life', img: Category1, description: 'Enjoy your social life together'},
    {id: 2, name: 'Politics', img: Category2, description: 'Be a part of politics'},
    {id: 3, name: 'Food', img: Category3, description: 'Let the food be finished'},
  ],
  list: [
    {id: 1, img: Blog1, category: 'Food', name: 'Testing User1', date: '12 Dec, 2017', count_views: '1.2M', comment: '4', title: 'Blog 1', description: 'Blog 1 Description'},
    {id: 2, img: Blog2, category: 'Technology', name: 'Testing User2', date: '12 Dec, 2017', count_views: '1M', comment: '3', title: 'Blog 2', description: 'Blog 2 Description'},
    {id: 3, img: Blog3, category: 'Lifestyle', name: 'Testing User3', date: '12 Dec, 2017', count_views: '2.2M', comment: '4', title: 'Blog 3', description: 'Blog 3 Description'},
    {id: 4, img: Blog4, category: 'Lifestyle', name: 'Testing User4', date: '12 Dec, 2017', count_views: '1.5M', comment: '2', title: 'Blog 4', description: 'Blog 4 Description'},
    {id: 5, img: Blog5, category: 'Lifestyle', name: 'Testing User5', date: '12 Dec, 2017', count_views: '1.3M', comment: '5', title: 'Blog 5', description: 'Blog 5 Description'},
  ]
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
