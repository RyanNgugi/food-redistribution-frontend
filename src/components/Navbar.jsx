import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#606c38',
      padding: '15px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
position: 'sticky',
top: 0,
zIndex: 1000
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 'bold',
          fontSize: '36px',
          color: '#fefae0'
        }}>
          WasteN<span style={{ color: '#dda15e' }}>♻</span>t
        </span>
      </Link>
      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fefae0', textDecoration: 'none', fontSize: '15px' }}>Home</Link>
        <Link to="/listings" style={{ color: '#fefae0', textDecoration: 'none', fontSize: '15px' }}>Listings</Link>
        <Link to="/donor-dashboard" style={{ color: '#fefae0', textDecoration: 'none', fontSize: '15px' }}>Post Food</Link>
        <Link to="/login" style={{ color: '#fefae0', textDecoration: 'none', fontSize: '15px' }}>Login</Link>
        <Link to="/register" style={{ backgroundColor: '#dda15e', color: '#283618', textDecoration: 'none', fontSize: '15px', padding: '8px 18px', borderRadius: '5px', fontWeight: 'bold' }}>Register</Link>
      </div>
    </nav>
  )
}

export default Navbar