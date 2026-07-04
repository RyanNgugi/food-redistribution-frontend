import { useState } from 'react'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Logging in with:', email, password)
  }

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '30px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', color: '#2d6a4f' }}>Welcome Back</h2>
      <p style={{ textAlign: 'center', color: '#666' }}>Log in to your account</p>

      <div style={{ marginBottom: '15px' }}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <button
        onClick={handleLogin}
        style={{ width: '100%', padding: '10px', backgroundColor: '#2d6a4f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}
      >
        Login
      </button>

      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Don't have an account? <a href="/register" style={{ color: '#2d6a4f' }}>Register here</a>
      </p>
    </div>
  )
}

export default LoginPage