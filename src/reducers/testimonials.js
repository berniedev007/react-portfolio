import Testimonial1 from '../assets/img/testimonials/t1.jpg';
import Testimonial2 from '../assets/img/testimonials/t2.jpg';

const initialState = {
  list: [
    {id: 1, img: Testimonial1, name: `Elite Martin`, comment: `Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from`},
    {id: 2, img: Testimonial2, name: `Davil Saden`, comment: `Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from`},
    {id: 3, img: Testimonial1, name: `Elite Martin`, comment: `Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from`},
    {id: 4, img: Testimonial2, name: `Davil Saden`, comment: `Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from`},
    {id: 5, img: Testimonial1, name: `Elite Martin`, comment: `Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from`},
    {id: 6, img: Testimonial2, name: `Davil Saden`, comment: `Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from`},
  ]
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
