import React from 'react';
import './Header.scss'

const Header = () => (
  <div className='header'>
    <div className='header__logo-wrapper'>
      <i className='uil uil-signal-alt-3' />
      <h1 className='header__label'>IRA Application</h1>
    </div>
    <p className='header__text'>IRA Accounts provided by Fidelity Investments</p>
  </div>
);

export default Header;
