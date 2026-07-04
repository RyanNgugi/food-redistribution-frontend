function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.55)', padding: '40px', borderRadius: '10px' }}>
          <h1 style={{ fontSize: '48px', margin: '0 0 15px 0' }}>Reduce Waste. Feed Communities.</h1>
          <p style={{ fontSize: '18px', marginBottom: '25px' }}>Connecting surplus food donors with charities and farms in Nairobi</p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <a href="/register" style={{ backgroundColor: '#2d6a4f', color: 'white', padding: '12px 25px', borderRadius: '5px', textDecoration: 'none', fontSize: '16px' }}>Get Started</a>
            <a href="/listings" style={{ backgroundColor: 'white', color: '#2d6a4f', padding: '12px 25px', borderRadius: '5px', textDecoration: 'none', fontSize: '16px' }}>Browse Listings</a>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
        <h2 style={{ color: '#2d6a4f', marginBottom: '40px' }}>How It Works</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '200px' }}>
            <div style={{ fontSize: '40px' }}>🍽️</div>
            <h3 style={{ color: '#2d6a4f' }}>Donors Post</h3>
            <p style={{ color: '#666' }}>Restaurants and event organisers upload their surplus food and classify it</p>
          </div>
          <div style={{ maxWidth: '200px' }}>
            <div style={{ fontSize: '40px' }}>🔍</div>
            <h3 style={{ color: '#2d6a4f' }}>Recipients Browse</h3>
            <p style={{ color: '#666' }}>Charities and farms browse available listings and find what they need</p>
          </div>
          <div style={{ maxWidth: '200px' }}>
            <div style={{ fontSize: '40px' }}>🤝</div>
            <h3 style={{ color: '#2d6a4f' }}>Connect & Collect</h3>
            <p style={{ color: '#666' }}>Recipients contact donors directly to arrange pickup</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#2d6a4f', color: 'white' }}>
        <h2 style={{ marginBottom: '40px' }}>The Problem We Are Solving</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: '48px', margin: 0 }}>29,400</h1>
            <p>Tonnes of food wasted in Nairobi yearly</p>
          </div>
          <div>
            <h1 style={{ fontSize: '48px', margin: 0 }}>36%</h1>
            <p>Of Kenyans are food insecure</p>
          </div>
          <div>
            <h1 style={{ fontSize: '48px', margin: 0 }}>64%</h1>
            <p>Of recoverable waste is food</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#1b4332', color: 'white' }}>
        <p>© 2026 FoodShare Nairobi. All rights reserved.</p>
      </div>
    </div>
  )
}

export default LandingPage