import { useState } from 'react'

function DonorDashboard() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const [type, setType] = useState('')
  const [image, setImage] = useState(null)

  const handlePost = () => {
    console.log('Posting food listing:', { title, description, quantity, type, image })
  }

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '30px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', color: '#2d6a4f' }}>Donor Dashboard</h2>
      <p style={{ textAlign: 'center', color: '#666' }}>Post your surplus food</p>

      <div style={{ marginBottom: '15px' }}>
        <label>Food Title</label>
        <input
          type="text"
          placeholder="e.g. Leftover Rice"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Description</label>
        <textarea
          placeholder="Describe the food item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc', height: '80px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Quantity</label>
        <input
          type="text"
          placeholder="e.g. 10 plates, 5kg"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Food Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        >
          <option value="">Select food type</option>
          <option value="edible">Edible (for charities)</option>
          <option value="inedible">Inedible (for farms)</option>
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Upload Food Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={{ width: '100%', padding: '10px', marginTop: '5px' }}
        />
      </div>

      <button
        onClick={handlePost}
        style={{ width: '100%', padding: '10px', backgroundColor: '#2d6a4f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}
      >
        Post Listing
      </button>
    </div>
  )
}

export default DonorDashboard