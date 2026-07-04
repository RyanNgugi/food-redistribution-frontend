import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2d6a4f',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2 style={{ color: 'white', margin: 0 }}>🍱 FoodShare Nairobi</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/listings" style={{ color: 'white', textDecoration: 'none' }}>Listings</Link>
        <Link to="/donor-dashboard" style={{ color: 'white', textDecoration: 'none' }}>Post Food</Link>
        <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
        <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
      </div>
    </nav>
  )
}

export default Navbar