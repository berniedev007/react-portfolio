import Brand1 from '../assets/img/brands/logo1.png';
import Brand2 from '../assets/img/brands/logo2.png';
import Brand3 from '../assets/img/brands/logo3.png';
import Brand4 from '../assets/img/brands/logo4.png';
import Brand5 from '../assets/img/brands/logo5.png';
import Brand6 from '../assets/img/brands/logo6.png';
import Brand7 from '../assets/img/brands/logo7.png';
import Brand8 from '../assets/img/brands/logo8.png';
import Brand9 from '../assets/img/brands/logo9.png';

const initialState = {
  list: [
    {id: 1, img: Brand1},
    {id: 2, img: Brand2},
    {id: 3, img: Brand3},
    {id: 4, img: Brand4},
    {id: 5, img: Brand5},
    {id: 6, img: Brand6},
    {id: 7, img: Brand7},
    {id: 8, img: Brand8},
    {id: 9, img: Brand9}  
  ]
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
