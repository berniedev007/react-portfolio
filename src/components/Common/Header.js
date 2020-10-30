import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';

function Header() {

  let location = useLocation();

  const links = [
    {id: 1, link: '/', name: 'Home', is_selected: location.pathname === '/'},
    {id: 2, link: '/about-us', name: 'About', is_selected: location.pathname === '/about-us'},
    {id: 3, link: '/services', name: 'Services', is_selected: location.pathname === '/services'},
    {id: 4, link: '/portfolio', name: 'Portfolio', is_selected: location.pathname.includes('/portfolio')},
    {id: 5, link: '/blog', name: 'Blog', is_selected: location.pathname.includes(`/blog`)},
    {id: 6, link: '/contact', name: 'Contact', is_selected: location.pathname === '/contact'},
  ]

  return (
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">            
            <a className="navbar-brand logo_h" href="/"><img src={Logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>            
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav justify-content-end">
                { 
                  links.map((item) =>
                    <li className={`nav-item ${item.is_selected ? "active" : ""}`} key={item.id}>
                      <a className="nav-link" href={item.link}>{item.name}</a>
                    </li>
                )}                                            
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;