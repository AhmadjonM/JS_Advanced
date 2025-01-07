import './Header.css';

function Header() {
    return (

      <header>
        <nav>
          <h3>DevLoop</h3>
          <div className='nav-links'>
            <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About us</a>
            <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
            <a href="#log-in" style={{ color: 'white', textDecoration: 'none' }}>Log in</a>
            <a href="#sign-up" style={{ color: 'white', textDecoration: 'none' }}>Sign up</a>
          </div>
        </nav>
      </header>
    );
  }
  
  export default Header;
  