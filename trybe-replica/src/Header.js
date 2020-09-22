import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import trybeLogo from './trybe-logo.png'

class Header extends React.Component {
  render() {
    return (
      <header className='trybe-header'>
        <nav className='trybe-nav'>
          <span><Link to='/'><img src={trybeLogo} alt="Logo da Trybe" /></Link></span>
          <span><Link to='/solutions'>Gabarito</Link></span>
          <span><Link to='/schedule/10'>Agenda</Link></span>
          <span><Link to='/trybe-content'>Conteúdo</Link></span>
          <span><Link to='/setup'>Setup</Link></span>
        </nav>
      </header>
    )
  }
}

export default Header;