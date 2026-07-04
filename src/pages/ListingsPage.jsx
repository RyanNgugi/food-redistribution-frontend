import { useState } from 'react'

const mockListings = [
  { id: 1, title: 'Leftover Rice', description: 'White rice from lunch service', quantity: '10 plates', type: 'edible', donor: 'Mama Oliech Restaurant' },
  { id: 2, title: 'Vegetable Peels', description: 'Carrot and potato peels', quantity: '5kg', type: 'inedible', donor: 'Safari Park Hotel' },
  { id: 3, title: 'Bread Loaves', description: 'Unsold bread from today', quantity: '20 loaves', type: 'edible', donor: 'Nairobi Bakery' },
  { id: 4, title: 'Fruit Waste', description: 'Overripe fruits', quantity: '8kg', type: 'inedible', donor: 'Zucchini Grocery' },
]

function ListingsPage() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = mockListings.filter(item => {
    const matchesFilter = filter === 'all' || item.type === filter
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#2d6a4f' }}>Available Food Listings</h2>
      <p style={{ textAlign: 'center', color: '#666' }}>Browse and claim surplus food</p>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search listings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        >
          <option value="all">All</option>
          <option value="edible">Edible</option>
          <option value="inedible">Inedible</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No listings found.</p>
      ) : (
        filtered.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, color: '#2d6a4f' }}>{item.title}</h3>
              <span style={{
                backgroundColor: item.type === 'edible' ? '#d8f3dc' : '#fff3cd',
                color: item.type === 'edible' ? '#2d6a4f' : '#856404',
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '13px'
              }}>
                {item.type}
              </span>
            </div>
            <p style={{ color: '#555', margin: '8px 0' }}>{item.description}</p>
            <p style={{ color: '#555', margin: '4px 0' }}>Quantity: {item.quantity}</p>
            <p style={{ color: '#888', fontSize: '13px' }}>Posted by: {item.donor}</p>
            <button
              style={{ marginTop: '10px', padding: '8px 20px', backgroundColor: '#2d6a4f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              onClick={() => alert(`You have claimed: ${item.title}. Contact ${item.donor} to arrange pickup.`)}
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