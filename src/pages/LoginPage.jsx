import { useState } from 'react'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()
      console.log('Response:', data)

      if (response.ok) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        alert('Login successful!')
        if (data.user.role === 'admin') {
          window.location.href = '/admin-dashboard'
        } else if (data.user.role === 'donor') {
          window.location.href = '/donor-dashboard'
        } else {
          window.location.href = '/listings'
        }
      } else {
        alert(data.error || 'Login failed. Please try again.')
      }
    } catch (error) {
      console.log('Error:', error)
      alert('Could not connect to server. Make sure the backend is running.')
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fefae0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '50px 40px',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0,0,0,0.08)',
        width: '100%',
        maxWidth: '420px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 'bold', fontSize: '28px', color: '#606c38' }}>
            WasteN<span style={{ color: '#dda15e' }}>♻</span>t
          </span>
          <h2 style={{ color: '#283618', marginTop: '15px', fontSize: '24px' }}>Welcome Back</h2>
          <p style={{ color: '#888', fontSize: '14px' }}>Log in to your account</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#283618' }}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #d4d4aa', fontSize: '14px', backgroundColor: '#fefae0', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#283618' }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #d4d4aa', fontSize: '14px', backgroundColor: '#fefae0', boxSizing: 'border-box' }}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{ width: '100%', padding: '13px', backgroundColor: '#606c38', color: '#fefae0', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}
        >
          Login
        </button>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#888' }}>
          Don't have an account?{' '}
          <a href="/register" style={{ color: '#606c38', fontWeight: '600', textDecoration: 'none' }}>Register here</a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage