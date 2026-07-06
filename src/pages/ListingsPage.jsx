import { useState, useEffect } from 'react'

function ListingsPage() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  const token = localStorage.getItem('token')

  const fetchListings = async () => {
    try {
      const url = search
        ? `http://localhost:3000/api/listings?keyword=${search}`
        : `http://localhost:3000/api/listings`

      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      const data = await response.json()

      if (response.ok) {
        setListings(data.listings)
      } else {
        setMessage(data.error || 'Failed to load listings.')
      }
    } catch (error) {
      setMessage('Could not connect to server.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchListings()
  }, [])

  const handleClaim = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/listings/${id}/claim`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      const data = await response.json()

      if (response.ok) {
        alert(`Listing claimed! Contact ${data.donorContact.name} at ${data.donorContact.phoneNumber} or ${data.donorContact.email} to arrange pickup.`)
        fetchListings()
      } else {
        alert(data.error || 'Failed to claim listing.')
      }
    } catch (error) {
      alert('Could not connect to server.')
    }
  }

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#606c38' }}>Available Food Listings</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Browse and claim surplus food</p>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search listings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #d4d4aa', backgroundColor: '#fefae0' }}
        />
        <button
          onClick={fetchListings}
          style={{ padding: '10px 20px', backgroundColor: '#606c38', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          Search
        </button>
      </div>

      {message && (
        <div style={{ backgroundColor: '#ffe0e0', padding: '12px', borderRadius: '8px', marginBottom: '20px', color: '#c0392b', fontSize: '14px', textAlign: 'center' }}>
          {message}
        </div>
      )}

      {loading ? (
        <p style={{ textAlign: 'center', color: '#666' }}>Loading listings...</p>
      ) : listings.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No listings found.</p>
      ) : (
        listings.map(item => (
          <div key={item.id} style={{ border: '1px solid #d4d4aa', borderRadius: '12px', padding: '20px', marginBottom: '15px', backgroundColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, color: '#606c38' }}>{item.title}</h3>
              <span style={{
                backgroundColor: item.classification === 'edible' ? '#d8f3dc' : '#fff3cd',
                color: item.classification === 'edible' ? '#2d6a4f' : '#856404',
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '13px'
              }}>
                {item.classification}
              </span>
            </div>
            {item.photoUrl && (
              <img
                src={`http://localhost:3000${item.photoUrl}`}
                alt={item.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', margin: '10px 0' }}
              />
            )}
            <p style={{ color: '#555', margin: '8px 0' }}>Quantity: {item.quantity}</p>
            <p style={{ color: '#555', margin: '4px 0' }}>Pickup by: {new Date(item.pickupDeadline).toLocaleString()}</p>
            <p style={{ color: '#888', fontSize: '13px' }}>Posted by: {item.donor?.fullName}</p>
            <button
              onClick={() => handleClaim(item.id)}
              style={{ marginTop: '10px', padding: '8px 20px', backgroundColor: '#606c38', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            >
              Claim
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default ListingsPage