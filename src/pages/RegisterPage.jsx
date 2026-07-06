import { useState } from 'react'

function RegisterPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [role, setRole] = useState('')
  const [subType, setSubType] = useState('')

  const getSubTypes = () => {
    if (role === 'donor') return [
      { value: 'restaurant', label: 'Restaurant' },
      { value: 'event_organizer', label: 'Event Organizer' },
    ]
    if (role === 'recipient') return [
      { value: 'charity', label: 'Charity' },
      { value: 'farm', label: 'Farm' },
    ]
    return []
  }

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName, email, password, phoneNumber, role, subType })
      })

      const data = await response.json()
      console.log('Response:', data)

      if (response.ok) {
        alert('Registration successful! Please log in.')
        window.location.href = '/login'
      } else {
        alert(data.error || 'Registration failed. Please try again.')
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
          <h2 style={{ color: '#283618', marginTop: '15px', fontSize: '24px' }}>Create Account</h2>
          <p style={{ color: '#888', fontSize: '14px' }}>Join the platform</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#283618' }}>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #d4d4aa', fontSize: '14px', backgroundColor: '#fefae0', boxSizing: 'border-box' }}
          />
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

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#283618' }}>Phone Number</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #d4d4aa', fontSize: '14px', backgroundColor: '#fefae0', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#283618' }}>Password</label>
          <input
            type="password"
            placeholder="Min 8 chars, uppercase, lowercase, number"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #d4d4aa', fontSize: '14px', backgroundColor: '#fefae0', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#283618' }}>I am a:</label>
          <select
            value={role}
            onChange={(e) => { setRole(e.target.value); setSubType('') }}
            style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #d4d4aa', fontSize: '14px', backgroundColor: '#fefae0', boxSizing: 'border-box' }}
          >
            <option value="">Select your role</option>
            <option value="donor">Donor</option>
            <option value="recipient">Recipient</option>
          </select>
        </div>

        {role && (
          <div style={{ marginBottom: '25px' }}>
            <label style={{ fontSize: '14px', fontWeight: '600', color: '#283618' }}>I am specifically a:</label>
            <select
              value={subType}
              onChange={(e) => setSubType(e.target.value)}
              style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #d4d4aa', fontSize: '14px', backgroundColor: '#fefae0', boxSizing: 'border-box' }}
            >
              <option value="">Select type</option>
              {getSubTypes().map(st => (
                <option key={st.value} value={st.value}>{st.label}</option>
              ))}
            </select>
          </div>
        )}

        <button
          onClick={handleRegister}
          style={{ width: '100%', padding: '13px', backgroundColor: '#606c38', color: '#fefae0', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}
        >
          Register
        </button>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#888' }}>
          Already have an account?{' '}
          <a href="/login" style={{ color: '#606c38', fontWeight: '600', textDecoration: 'none' }}>Login here</a>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage