import { useState } from 'react'

function DonorDashboard() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const [classification, setClassification] = useState('')
  const [pickupDeadline, setPickupDeadline] = useState('')
  const [image, setImage] = useState(null)
  const [message, setMessage] = useState('')

  const token = localStorage.getItem('token')

  const handlePost = async () => {
    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('description', description)
      formData.append('quantity', quantity)
      formData.append('classification', classification)
      formData.append('pickupDeadline', pickupDeadline)
      if (image) formData.append('photo', image)

      const response = await fetch('http://localhost:3000/api/listings', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('Food listing posted successfully!')
        setTitle('')
        setDescription('')
        setQuantity('')
        setClassification('')
        setPickupDeadline('')
        setImage(null)
      } else {
        setMessage(data.error || 'Failed to post listing.')
      }
    } catch (error) {
      setMessage('Could not connect to server.')
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fefae0', padding: '40px 20px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 30px rgba(0,0,0,0.08)', width: '100%', maxWidth: '500px' }}>
        <h2 style={{ textAlign: 'center', color: '#606c38', marginBottom: '8px' }}>Donor Dashboard</h2>
        <p style={{ textAlign: 'center', color: '#888', marginBottom: '30px', fontSize: '14px' }}>Post your surplus food</p>

        {message && (
          <div style={{ backgroundColor: message.includes('success') ? '#d8f3dc' : '#ffe0e0', padding: '12px', borderRadius: '8px', marginBottom: '20px', color: message.includes('success') ? '#2d6a4f' : '#c0392b', fontSize: '14px', textAlign: 'center' }}>
            {message}
          </div>
        )}

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#283618' }}>Food Title</label>
          <input
            type="text"
            placeholder="e.g. Leftover Rice"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #d4d4aa', fontSize: '14px', backgroundColor: '#fefae0', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#283618' }}>Description</label>
          <textarea
            placeholder="Describe the food item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #d4d4aa', fontSize: '14px', backgroundColor: '#fefae0', height: '80px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#283618' }}>Quantity</label>
          <input
            type="text"
            placeholder="e.g. 10 plates, 5kg"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #d4d4aa', fontSize: '14px', backgroundColor: '#fefae0', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#283618' }}>Food Type</label>
          <select
            value={classification}
            onChange={(e) => setClassification(e.target.value)}
            style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #d4d4aa', fontSize: '14px', backgroundColor: '#fefae0', boxSizing: 'border-box' }}
          >
            <option value="">Select food type</option>
            <option value="edible">Edible (for charities)</option>
            <option value="inedible">Inedible (for farms)</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#283618' }}>Pickup Deadline</label>
          <input
            type="datetime-local"
            value={pickupDeadline}
            onChange={(e) => setPickupDeadline(e.target.value)}
            style={{ width: '100%', padding: '12px', marginTop: '6px', borderRadius: '8px', border: '1px solid #d4d4aa', fontSize: '14px', backgroundColor: '#fefae0', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#283618' }}>Upload Food Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            style={{ width: '100%', padding: '12px', marginTop: '6px', fontSize: '14px', boxSizing: 'border-box' }}
          />
        </div>

        <button
          onClick={handlePost}
          style={{ width: '100%', padding: '13px', backgroundColor: '#606c38', color: '#fefae0', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: '600' }}
        >
          Post Listing
        </button>
      </div>
    </div>
  )
}

export default DonorDashboard