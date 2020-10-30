import Portfolio1 from '../assets/img/portfolio/p1.jpg';
import Portfolio2 from '../assets/img/portfolio/p2.jpg';
import Portfolio3 from '../assets/img/portfolio/p3.jpg';
import Portfolio4 from '../assets/img/portfolio/p4.jpg';
import Portfolio5 from '../assets/img/portfolio/p5.jpg';
import Portfolio6 from '../assets/img/portfolio/p6.jpg';
import Portfolio7 from '../assets/img/portfolio/p7.jpg';
import Portfolio8 from '../assets/img/portfolio/p8.jpg';
import Portfolio9 from '../assets/img/portfolio/p9.jpg';

const initialState = {
  list: [
    {id: 1, img: Portfolio1, title: `minimal design`, description: `Animated, portfolio`, types: ['upcoming', 'latest']},
    {id: 2, img: Portfolio2, title: `Paint wall`, description: `Animated, portfolio`, types: ['upcoming', 'popular', 'following']},
    {id: 3, img: Portfolio3, title: `FEMALE LIGHT`, description: `Animated, portfolio`, types: ['upcoming', 'latest']},
    {id: 4, img: Portfolio4, title: `FOURTH AIR`, description: `Animated, portfolio`, types: ['upcoming', 'latest', 'following']},
    {id: 5, img: Portfolio5, title: `TOGETHER SIGN`, description: `Animated, portfolio`, types: ['upcoming' ]},
    {id: 6, img: Portfolio6, title: `MULTIPLY FOWL`, description: `Animated, portfolio`, types: ['upcoming', 'latest', 'following']},
    {id: 7, img: Portfolio7, title: `GREEN HEAVEN`, description: `Animated, portfolio`, types: ['upcoming', 'popular']},
    {id: 8, img: Portfolio8, title: `FLY MALE`, description: `Animated, portfolio`, types: ['latest']},
    {id: 9, img: Portfolio9, title: `SEASON FACE`, description: `Animated, portfolio`, types: ['upcoming', 'latest', 'following']},
  ]
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
