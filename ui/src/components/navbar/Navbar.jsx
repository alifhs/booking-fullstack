import './navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
        <a href="/" className='logoAnchor'>
        <span className='logo'>Booking</span>
        </a>
        <div className='navItems'>
        <button className='navButton'>Register</button>
        <button className='navButton'>Login</button>

        </div>

        </div>

    </div>
  )
}
