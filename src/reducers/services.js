import Service1 from '../assets/img/services/s1.png';
import Service2 from '../assets/img/services/s2.png';
import Service3 from '../assets/img/services/s3.png';
import Service4 from '../assets/img/services/s4.png';

const initialState = {
  list: [
    {id: 1, img: Service1, title: `Wp developing`, description: `Creeping for female light years that lesser can't evening heaven isn't bearing tree`},
    {id: 2, img: Service2, title: 'UI/ux design', description: `Creeping for female light years that lesser can't evening heaven isn't bearing tree`},
    {id: 3, img: Service3, title: 'Web design', description: `Creeping for female light years that lesser can't evening heaven isn't bearing tree`},
    {id: 4, img: Service4, title: 'seo optimize', description: `Creeping for female light years that lesser can't evening heaven isn't bearing tree`}
  ]
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
